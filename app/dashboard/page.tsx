'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Order {
  orderId: string;
  timestamp: string;
  status: string;
  total: number;
  items: { productName: string; quantity: number }[];
  trackingNumber: string | null;
  labelUrl: string | null;
  customer: { name: string; email: string };
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [meRes, ordersRes] = await Promise.all([
          fetch('/api/auth/me'),
          fetch('/api/auth/orders'),
        ]);
        
        if (!meRes.ok) {
          router.push('/login');
          return;
        }
        
        const meData = await meRes.json();
        setUser(meData.user);
        
        const ordersData = await ordersRes.json();
        setOrders(ordersData.orders || []);
      } catch {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };

  const statusColor = (status: string) => {
    switch (status) {
      case 'shipped': return 'text-green-400';
      case 'label_ready': return 'text-yellow-400';
      case 'delivered': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const formatStatus = (s: string) => s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00ffaa]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-[#00ffaa]">Welcome</span>, {user?.name}
            </h1>
            <p className="text-gray-400 text-sm mt-1">{user?.email}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/track"
              className="px-4 py-2 border border-[#2a2a4e] rounded-lg hover:border-[#00ffaa] transition text-sm"
            >
              Track Order
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-[#1a1a2e] rounded-2xl border border-[#2a2a4e] overflow-hidden">
          <div className="p-6 border-b border-[#2a2a4e]">
            <h2 className="text-xl font-semibold text-[#00ffaa]">Your Orders</h2>
          </div>

          {orders.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-400 mb-4">No orders yet</p>
              <Link
                href="/shop/mens"
                className="inline-block px-6 py-3 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00dd99] transition"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-[#2a2a4e]">
              {orders.map((order) => (
                <div key={order.orderId} className="p-6 hover:bg-[#1f1f3a] transition">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-mono text-[#00ffaa] font-bold">{order.orderId}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {new Date(order.timestamp).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${statusColor(order.status)}`}>
                        {formatStatus(order.status)}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-sm">
                      {order.items.map(i => `${i.quantity}x ${i.productName}`).join(', ')}
                    </p>
                    {order.trackingNumber && (
                      <div className="text-right">
                        <p className="text-gray-500 text-xs">Tracking</p>
                        <p className="text-sm font-mono">{order.trackingNumber}</p>
                      </div>
                    )}
                    {order.labelUrl && (
                      <a
                        href={order.labelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 px-3 py-1 text-xs bg-[#00ffaa] text-[#0a0a1a] rounded-md hover:bg-[#00dd99] transition font-medium"
                      >
                        View Label
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <Link href="/shop/mens" className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4e] hover:border-[#00ffaa] transition text-center">
            <p className="text-2xl mb-2">🛍️</p>
            <p className="text-sm font-medium">Shop Products</p>
          </Link>
          <Link href="/track" className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4e] hover:border-[#00ffaa] transition text-center">
            <p className="text-2xl mb-2">📦</p>
            <p className="text-sm font-medium">Track Order</p>
          </Link>
          <Link href="/warranty" className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a4e] hover:border-[#00ffaa] transition text-center">
            <p className="text-2xl mb-2">🛡️</p>
            <p className="text-sm font-medium">Register Warranty</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
