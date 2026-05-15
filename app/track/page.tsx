'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Order {
  orderId: string;
  timestamp: string;
  status: string;
  total: number;
  items: { productName: string; quantity: number }[];
  trackingNumber: string | null;
  labelUrl: string | null;
  customer: { name: string; email: string; phone: string };
  address: { city: string; state: string; zip: string };
}

export default function TrackPage() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setOrder(null);
    setLoading(true);

    try {
      const res = await fetch(`/api/orders/lookup?orderId=${encodeURIComponent(orderId)}&email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (data.order) {
        setOrder(data.order);
      } else {
        setError(data.error || 'Order not found');
      }
    } catch {
      setError('Failed to look up order');
    } finally {
      setLoading(false);
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case 'shipped': return 'text-green-400 bg-green-400/10';
      case 'label_ready': return 'text-yellow-400 bg-yellow-400/10';
      case 'delivered': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const formatStatus = (s: string) => s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-[#00ffaa]">Track</span> Your Order
          </h1>
          <p className="text-gray-400">Enter your order ID and email to see shipping status</p>
        </div>

        <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#2a2a4e] mb-8">
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Order ID</label>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="VT-XXXXXXXX-XXXX"
                required
                className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffaa] font-mono"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#00ffaa]"
              />
            </div>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00dd99] disabled:bg-gray-600 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Looking up order...' : 'Track Order'}
            </button>
          </form>
        </div>

        {order && (
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#2a2a4e]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-mono text-[#00ffaa] text-xl font-bold">{order.orderId}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Placed {new Date(order.timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor(order.status)}`}>
                {formatStatus(order.status)}
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-300">{item.quantity}x {item.productName}</span>
                  <span className="text-gray-400">${(item.quantity * (order.total / order.items.reduce((s, it) => s + it.quantity, 0))).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-[#2a2a4e] pt-3 flex justify-between font-medium">
                <span>Total</span>
                <span className="text-[#00ffaa]">${order.total.toFixed(2)}</span>
              </div>
            </div>

            {order.trackingNumber && (
              <div className="bg-[#0a0a1a] rounded-lg p-4 mb-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Tracking Number</p>
                <p className="font-mono text-lg">{order.trackingNumber}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Ship To</p>
                <p className="text-gray-200">{order.customer.name}</p>
                <p className="text-gray-400">{order.address.city}, {order.address.state} {order.address.zip}</p>
              </div>
              {order.labelUrl && (
                <div className="text-right">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Shipping Label</p>
                  <a
                    href={order.labelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 px-3 py-1.5 bg-[#00ffaa] text-[#0a0a1a] text-sm font-medium rounded-md hover:bg-[#00dd99] transition"
                  >
                    Download Label
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        <p className="text-center text-gray-500 text-sm mt-6">
          Have an account?{' '}
          <Link href="/login" className="text-[#00ffaa] hover:underline">Sign in</Link>
          {' '}to view all your orders
        </p>
      </div>
    </div>
  );
}
