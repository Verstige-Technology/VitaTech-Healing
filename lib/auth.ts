import { SignJWT, jwtVerify } from 'jose';
import { existsSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { hash, compare } from 'bcryptjs';
import { cookies } from 'next/headers';
import * as path from 'path';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'vitatech-secret-change-in-production'
);

const USERS_DIR = path.join(process.env.HOME || '/Users/julylan', '.hermes', 'vitatech-users');

// ─── Types ───────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  createdAt: string;
  orderIds: string[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function ensureUsersDir() {
  if (!existsSync(USERS_DIR)) {
    await mkdir(USERS_DIR, { recursive: true });
  }
}

function userFilePath(email: string): string {
  return path.join(USERS_DIR, `${encodeURIComponent(email.toLowerCase())}.json`);
}

// ─── Auth Actions ─────────────────────────────────────────────────────────────

export async function registerUser(email: string, password: string, name: string): Promise<{ success: true; userId: string } | { success: false; error: string }> {
  try {
    await ensureUsersDir();
    const filePath = userFilePath(email);

    if (existsSync(filePath)) {
      return { success: false, error: 'An account with this email already exists' };
    }

    const passwordHash = await hash(password, 12);
    const user: User = {
      id: `user_${Date.now().toString(36)}`,
      email: email.toLowerCase(),
      passwordHash,
      name,
      createdAt: new Date().toISOString(),
      orderIds: [],
    };

    await writeFile(filePath, JSON.stringify(user, null, 2));
    return { success: true, userId: user.id };
  } catch (err) {
    console.error('Register error:', err);
    return { success: false, error: 'Failed to create account' };
  }
}

export async function loginUser(email: string, password: string): Promise<{ success: true; user: Omit<User, 'passwordHash'> } | { success: false; error: string }> {
  try {
    const filePath = userFilePath(email);

    if (!existsSync(filePath)) {
      return { success: false, error: 'Invalid email or password' };
    }

    const content = await readFile(filePath, 'utf-8');
    const user: User = JSON.parse(content);

    const valid = await compare(password, user.passwordHash);
    if (!valid) {
      return { success: false, error: 'Invalid email or password' };
    }

    const { passwordHash: _, ...safeUser } = user;
    return { success: true, user: safeUser };
  } catch (err) {
    console.error('Login error:', err);
    return { success: false, error: 'Login failed' };
  }
}

export async function getUserByEmail(email: string): Promise<Omit<User, 'passwordHash'> | null> {
  try {
    const filePath = userFilePath(email);
    if (!existsSync(filePath)) return null;
    const content = await readFile(filePath, 'utf-8');
    const user: User = JSON.parse(content);
    const { passwordHash: _, ...safeUser } = user;
    return safeUser;
  } catch {
    return null;
  }
}

export async function getUserById(userId: string): Promise<Omit<User, 'passwordHash'> | null> {
  try {
    await ensureUsersDir();
    const { readdir } = await import('fs/promises');
    const files = await readdir(USERS_DIR);
    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const content = await readFile(path.join(USERS_DIR, file), 'utf-8');
      const user: User = JSON.parse(content);
      if (user.id === userId) {
        const { passwordHash: _, ...safeUser } = user;
        return safeUser;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export async function linkOrderToUser(email: string, orderId: string): Promise<void> {
  try {
    const filePath = userFilePath(email);
    if (!existsSync(filePath)) return;
    const content = await readFile(filePath, 'utf-8');
    const user: User = JSON.parse(content);
    if (!user.orderIds.includes(orderId)) {
      user.orderIds.push(orderId);
      await writeFile(filePath, JSON.stringify(user, null, 2));
    }
  } catch (err) {
    console.error('Link order error:', err);
  }
}

// ─── Session (JWT in cookies) ─────────────────────────────────────────────────

export async function createSession(userId: string): Promise<string> {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
  return token;
}

export async function verifySession(token: string): Promise<{ userId: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as { userId: string };
  } catch {
    return null;
  }
}

export async function getSessionUser(): Promise<Omit<User, 'passwordHash'> | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('vitatech_session')?.value;
  if (!token) return null;
  const session = await verifySession(token);
  if (!session) return null;
  return getUserById(session.userId);
}