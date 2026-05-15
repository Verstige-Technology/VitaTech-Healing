import { NextRequest, NextResponse } from 'next/server';
import { getSessionUser } from '@/lib/auth';
import { existsSync, readFile } from 'fs/promises';
import * as path from 'path';

const ORDERS_DIR = path.join(process.env.HOME || '/Users/julylan', '.hermes', 'vitatech-orders');

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 });
  }
  
  const orders = [];
  for (const orderId of user.orderIds) {
    const orderPath = path.join(ORDERS_DIR, `${orderId}.json`);
    if (existsSync(orderPath)) {
      const content = await readFile(orderPath, 'utf-8');
      orders.push(JSON.parse(content));
    }
  }
  
  return NextResponse.json({ success: true, orders });
}
