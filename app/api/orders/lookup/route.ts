import { NextRequest, NextResponse } from 'next/server';
import { existsSync, readFile } from 'fs';
import * as path from 'path';

const ORDERS_DIR = path.join(process.env.HOME || '/Users/julylan', '.hermes', 'vitatech-orders');

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('orderId');
  const email = searchParams.get('email');

  if (!orderId || !email) {
    return NextResponse.json(
      { success: false, error: 'Order ID and email are required' },
      { status: 400 }
    );
  }

  try {
    const orderPath = path.join(ORDERS_DIR, `${orderId}.json`);
    
    if (!existsSync(orderPath)) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    const content = await readFile(orderPath, 'utf-8');
    const order = JSON.parse(content);

    // Verify email matches
    if (order.customer.email.toLowerCase() !== email.toLowerCase()) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error('Order lookup error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to look up order' },
      { status: 500 }
    );
  }
}
