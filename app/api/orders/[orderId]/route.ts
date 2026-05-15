import { NextRequest, NextResponse } from 'next/server';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import * as path from 'path';

const ORDERS_DIR = path.join(process.env.HOME || '/Users/julylan', '.hermes', 'vitatech-orders');

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await params;

  if (!orderId) {
    return NextResponse.json({ success: false, error: 'Order ID required' }, { status: 400 });
  }

  try {
    const orderPath = path.join(ORDERS_DIR, `${orderId}.json`);

    if (!existsSync(orderPath)) {
      return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
    }

    const content = await readFile(orderPath, 'utf-8');
    const order = JSON.parse(content);

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error('Order fetch error:', err);
    return NextResponse.json({ success: false, error: 'Failed to fetch order' }, { status: 500 });
  }
}