'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface OrderItem {
  productId: string;
  productName: string;
  variant: string;
  quantity: number;
  price: number;
}

interface Order {
  orderId: string;
  timestamp: string;
  customer: { name: string; email: string; phone: string };
  address: { city: string; state: string; zip: string; country: string };
  items: OrderItem[];
  total: number;
  status: string;
  trackingNumber: string | null;
  labelUrl: string | null;
}

export default function OrderConfirmationPage() {
  const params = useParams();
  const orderId = params.orderId as string;
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // Try dashboard orders first (if logged in)
        let res = await fetch('/api/auth/orders');
        if (res.ok) {
          const data = await res.json();
          const found = data.orders?.find((o: Order) => o.orderId === orderId);
          if (found) {
            setOrder(found);
            setLoading(false);
            return;
          }
        }
        // Fallback to order confirmation page lookup
        const orderRes = await fetch(`/api/orders/${orderId}`);
        if (orderRes.ok) {
          const data = await orderRes.json();
          setOrder(data.order);
        }
      } catch (e) {
        console.error('Failed to fetch order:', e);
      } finally {
        setLoading(false);
      }
    };
    if (orderId) fetchOrder();
  }, [orderId]);

  const statusColor = (status: string) => {
    switch (status) {
      case 'shipped': return 'text-green-400';
      case 'label_ready': return 'text-yellow-400';
      case 'delivered': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const formatStatus = (s: string) =>
    s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className="mb-8 text-center">
          <div className="w-24 h-24 mx-auto bg-[#00ffaa]/10 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-[#00ffaa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-[#00ffaa] mb-2">Order Confirmed!</h1>
          {order && (
            <p className="text-gray-400">Thank you, {order.customer.name}. Check your email for details.</p>
          )}
        </div>

        {/* Order Details */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00ffaa]" />
          </div>
        ) : order ? (
          <>
            <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a4e] mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Order ID</p>
                  <p className="font-mono text-[#00ffaa] text-lg font-bold">{order.orderId}</p>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${statusColor(order.status)}`}>
                    {formatStatus(order.status)}
                  </span>
                  <p className="text-gray-500 text-xs mt-1">
                    {new Date(order.timestamp).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="border-t border-[#2a2a4e] pt-4 mb-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Items</p>
                <div className="space-y-2">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-200">{item.quantity}x {item.productName}</span>
                      <span className="text-gray-400">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-[#2a2a4e] pt-4 flex justify-between">
                <span className="text-gray-300 font-medium">Total</span>
                <span className="text-[#00ffaa] font-bold text-lg">${order.total.toFixed(2)}</span>
              </div>

              {/* Tracking */}
              {order.trackingNumber && (
                <div className="mt-4 bg-[#0a0a1a] rounded-lg p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Tracking Number</p>
                  <p className="font-mono text-[#00ffaa]">{order.trackingNumber}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              {order.labelUrl && (
                <a
                  href={order.labelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#00ffaa] hover:bg-[#00dd99] text-[#0a0a1a] font-bold rounded-lg transition-colors shadow-lg shadow-[#00ffaa]/20 flex items-center justify-center gap-2"
                >
                  📦 Download Shipping Label
                </a>
              )}
              <Link
                href="/track"
                className="px-8 py-4 bg-[#1a1a2e] hover:bg-[#2a2a4e] text-white font-semibold rounded-lg border border-[#2a2a4e] transition-colors flex items-center justify-center gap-2"
              >
                📍 Track Order
              </Link>
            </div>

            {/* Account + Next Steps */}
            <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a4e]">
              <p className="text-gray-400 text-sm mb-3 font-medium">Create a free account to track all your orders</p>
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="px-6 py-2 bg-[#00ffaa] hover:bg-[#00dd99] text-[#0a0a1a] font-bold rounded-lg transition-colors text-sm"
                >
                  Sign In / Register
                </Link>
                <Link
                  href="/"
                  className="px-6 py-2 bg-[#0a0a1a] hover:bg-[#2a2a4e] text-gray-300 font-medium rounded-lg border border-[#2a2a4e] transition-colors text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#2a2a4e] text-center">
            <p className="text-gray-400 mb-4">Order details could not be loaded.</p>
            <p className="font-mono text-[#00ffaa] text-lg mb-6">{orderId}</p>
            <Link
              href="/track"
              className="inline-block px-6 py-3 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00dd99] transition"
            >
              Track this order
            </Link>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#2a2a4e] text-center">
          <p className="text-gray-400 text-sm">
            Questions about your order?{' '}
            <Link href="/contact" className="text-[#00ffaa] hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}