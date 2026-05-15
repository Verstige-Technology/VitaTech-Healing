import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import * as path from 'path';
import { createShipment } from '@/lib/easyship';

const ORDERS_DIR = path.join(process.env.HOME || '/Users/julylan', '.hermes', 'vitatech-orders');

// Ensure orders directory exists
async function ensureOrdersDir() {
  if (!existsSync(ORDERS_DIR)) {
    await mkdir(ORDERS_DIR, { recursive: true });
  }
}

// Generate a unique order ID
function generateOrderId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `VT-${timestamp}-${random}`;
}

// Order interface matching the schema
interface OrderItem {
  productId: string;
  productName: string;
  variant: string;
  quantity: number;
  price: number;
}

interface CustomerAddress {
  name: string;
  email: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface Order {
  orderId: string;
  timestamp: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: CustomerAddress;
  };
  braceletSize: string;
  orderNotes?: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  squarePaymentId: string;
  status: 'pending_fulfillment' | 'label_ready' | 'shipped' | 'delivered';
  labelUrl: string | null;
  trackingNumber: string | null;
  easyshipShipmentId: string | null;
}

// GET - Fetch all orders
export async function GET() {
  try {
    await ensureOrdersDir();
    
    // Get all JSON files from orders directory
    const { readdir } = await import('fs/promises');
    const orderFiles = await readdir(ORDERS_DIR).catch(() => []);
    
    const orders: Order[] = [];
    for (const file of orderFiles) {
      if (file.endsWith('.json')) {
        try {
          const content = await readFile(path.join(ORDERS_DIR, file), 'utf-8');
          orders.push(JSON.parse(content));
        } catch {
          // Skip invalid files
        }
      }
    }

    // Sort by timestamp descending
    orders.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST - Create a new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      cartItems,
      shippingAddress,
      braceletSize,
      orderNotes,
      paymentToken,
      total,
      squarePaymentId,
    } = body;

    // Validate required fields
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

    if (!braceletSize) {
      return NextResponse.json(
        { success: false, error: 'Bracelet size is required' },
        { status: 400 }
      );
    }

    await ensureOrdersDir();

    // Generate order ID
    const orderId = generateOrderId();

    // Calculate totals
    const subtotal = cartItems.reduce(
      (sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity,
      0
    );
    const shipping = 0; // Free shipping
    const orderTotal = subtotal + shipping;

    // Create order record
    const order: Order = {
      orderId,
      timestamp: new Date().toISOString(),
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
          country: shippingAddress.country || 'United States',
        },
      },
      braceletSize,
      orderNotes: orderNotes || '',
      items: cartItems.map((item: { id: string; name: string; size?: string; quantity: number; price: number }) => ({
        productId: item.id,
        productName: item.name,
        variant: item.size || braceletSize,
        quantity: item.quantity,
        price: item.price,
      })),
      subtotal,
      shipping,
      total: orderTotal,
      squarePaymentId: squarePaymentId || '',
      status: 'pending_fulfillment',
      labelUrl: null,
      trackingNumber: null,
      easyshipShipmentId: null,
    };

    // Save order to JSON file
    const orderFilePath = path.join(ORDERS_DIR, `${orderId}.json`);
    await writeFile(orderFilePath, JSON.stringify(order, null, 2));

    return NextResponse.json({
      success: true,
      orderId: order.orderId,
      order,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to create order' },
      { status: 500 }
    );
  }
}

// PATCH - Update an existing order
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, labelUrl, trackingNumber, easyshipShipmentId, status } = body;

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: 'Order ID is required' },
        { status: 400 }
      );
    }

    await ensureOrdersDir();

    const orderFilePath = path.join(ORDERS_DIR, `${orderId}.json`);
    
    if (!existsSync(orderFilePath)) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    // Read existing order
    const orderContent = await readFile(orderFilePath, 'utf-8');
    const order = JSON.parse(orderContent) as Order;

    // Update fields
    if (labelUrl !== undefined) order.labelUrl = labelUrl;
    if (trackingNumber !== undefined) order.trackingNumber = trackingNumber;
    if (easyshipShipmentId !== undefined) order.easyshipShipmentId = easyshipShipmentId;
    if (status !== undefined) order.status = status as Order['status'];

    // Save updated order
    await writeFile(orderFilePath, JSON.stringify(order, null, 2));

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to update order' },
      { status: 500 }
    );
  }
}