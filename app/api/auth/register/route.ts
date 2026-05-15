import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth';
import { setCookie } from 'cookies';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    const result = await registerUser(email, password, name);

    if (!result.success) {
      return NextResponse.json(result, { status: 409 });
    }

    return NextResponse.json({ success: true, userId: result.userId });
  } catch (err) {
    console.error('Register API error:', err);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}