import { NextRequest, NextResponse } from 'next/server';
import { getSessionUser, linkOrderToUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 });
  }
  
  const { orderId } = await request.json();
  if (!orderId) {
    return NextResponse.json({ success: false, error: 'Order ID required' }, { status: 400 });
  }
  
  await linkOrderToUser(user.email, orderId);
  return NextResponse.json({ success: true });
}
