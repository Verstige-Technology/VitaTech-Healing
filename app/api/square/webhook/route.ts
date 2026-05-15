import { NextRequest, NextResponse } from 'next/server';
import * as crypto from 'crypto';

// Verify Square webhook signature
function verifySignature(
  signature: string,
  body: string,
  signatureKey: string
): boolean {
  const hmac = crypto.createHmac('sha256', signatureKey);
  hmac.update(body);
  const expectedSignature = hmac.digest('base64');
  return signature === expectedSignature;
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-square-hmacsha256-signature') || '';
    const signatureKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY || '';

    // Verify webhook signature in production
    if (process.env.NODE_ENV === 'production' && signatureKey) {
      if (!verifySignature(signature, rawBody, signatureKey)) {
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    }

    const event = JSON.parse(rawBody);
    const { type, data } = event;

    console.log(`Received Square webhook: ${type}`);

    switch (type) {
      case 'payment.completed':
      case 'payment.updated':
        const payment = data?.object?.payment;
        if (payment) {
          console.log(`Payment ${payment.id} status: ${payment.status}`);
          // Here you would typically:
          // - Update order status in your database
          // - Send confirmation email
          // - Update inventory
          // - Trigger fulfillment workflow
        }
        break;

      case 'payment.failed':
        const failedPayment = data?.object?.payment;
        if (failedPayment) {
          console.log(`Payment ${failedPayment.id} failed`);
          // Handle failed payment - update order status, notify customer, etc.
        }
        break;

      case 'refund.completed':
        console.log('Refund completed');
        // Handle refund completion
        break;

      default:
        console.log(`Unhandled webhook event type: ${type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function GET() {
  return NextResponse.json({ status: 'Webhook endpoint active' });
}