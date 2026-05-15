import { NextRequest, NextResponse } from 'next/server';
import { squareClient } from '@/lib/square';
import { createShipment } from '@/lib/easyship';
import { getUserByEmail, linkOrderToUser } from '@/lib/auth';
import { sendOrderConfirmation } from '@/lib/email';

// POST - Process payment and create order with EasyShip shipment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartItems, shippingAddress, braceletSize, orderNotes, paymentToken, total } = body;

    // Validate required fields
    if (!paymentToken) {
      return NextResponse.json(
        { success: false, error: 'Payment token is required' },
        { status: 400 }
      );
    }

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Cart items are required' },
        { status: 400 }
      );
    }

    if (!shippingAddress || !shippingAddress.name || !shippingAddress.email) {
      return NextResponse.json(
        { success: false, error: 'Valid shipping address is required' },
        { status: 400 }
      );
    }

    // Create idempotency key for the payment
    const idempotencyKey = `order-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    // Build line items for the Square payment
    const currency = 'USD';
    const amountInCents = Math.round(total * 100);

    // Create the payment using Square SDK
    const response = await squareClient.payments.create({
      sourceId: paymentToken,
      idempotencyKey,
      amountMoney: {
        amount: BigInt(amountInCents),
        currency,
      },
      locationId: process.env.SQUARE_LOCATION_ID || '',
      note: `VitaTech Order - ${cartItems.length} items`,
      buyerEmailAddress: shippingAddress?.email,
    });

    // Square SDK v44 returns CreatePaymentResponse directly (no .result wrapper)
    const payment = 'payment' in response ? response.payment : (response as any).result?.payment;

    if (!payment?.id) {
      return NextResponse.json(
        { success: false, error: 'Payment processing failed' },
        { status: 500 }
      );
    }

    const squarePaymentId = payment.id;

    // Now create the order in our orders API
    const baseUrl = process.env.APP_URL || 'http://localhost:3000';
    const orderResponse = await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cartItems,
        shippingAddress,
        braceletSize,
        orderNotes,
        total,
        squarePaymentId,
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderData.success) {
      // Payment succeeded but order creation failed - log but continue
      console.error('Order creation failed after payment:', orderData.error);
    }

    const orderId = orderData.orderId || `VT-FALLBACK-${Date.now()}`;

    // Link to existing account if customer has one, and send confirmation email
    (async () => {
      try {
        const existingUser = await getUserByEmail(shippingAddress.email);
        if (existingUser) {
          await linkOrderToUser(shippingAddress.email, orderId);
        }
        // Send order confirmation email
        if (orderData.order) {
          await sendOrderConfirmation(orderData.order);
        }
      } catch (e) {
        console.error('Post-order email/link error:', e);
      }
    })();

    // Try to create EasyShip shipment
    let shipmentData = {
      labelUrl: null as string | null,
      trackingNumber: null as string | null,
      easyshipShipmentId: null as string | null,
    };

    try {
      const orderForShipment = {
        orderId,
        customer: {
          name: shippingAddress.name,
          email: shippingAddress.email,
          phone: shippingAddress.phone || '',
          address: {
            name: shippingAddress.name,
            email: shippingAddress.email,
            phone: shippingAddress.phone || '',
            line1: shippingAddress.line1,
            line2: shippingAddress.line2 || '',
            city: shippingAddress.city,
            state: shippingAddress.state,
            zip: shippingAddress.zip,
            country: shippingAddress.country || 'US',
          },
        },
        braceletSize,
        items: cartItems.map((item: { id: string; name: string; price: number; quantity: number }) => ({
          productId: item.id,
          productName: item.name,
          variant: braceletSize,
          quantity: item.quantity,
          price: item.price,
        })),
        total,
      };

      const { label, scopeError } = await createShipment(orderForShipment);
      shipmentData = {
        labelUrl: label.labelUrl,
        trackingNumber: label.trackingNumber,
        easyshipShipmentId: label.shipmentId,
      };

      // Update order with shipment details
      await fetch(`${baseUrl}/api/orders`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          ...shipmentData,
          status: 'label_ready',
        }),
      });
    } catch (shipmentError) {
      console.error('EasyShip shipment creation failed:', shipmentError);
      // Continue - the order is still valid even without shipment
    }

    return NextResponse.json({
      success: true,
      orderId,
      paymentId: squarePaymentId,
      paymentStatus: payment.status,
      shipment: shipmentData,
    });
  } catch (error) {
    console.error('Square payment error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Payment processing failed' 
      },
      { status: 500 }
    );
  }
}