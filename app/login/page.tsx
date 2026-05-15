'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const body = isLogin
      ? { email: form.email, password: form.password }
      : { name: form.name, email: form.email, password: form.password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (data.success) {
        router.push('/dashboard');
        router.refresh();
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold">
            <span className="text-[#00ffaa]">Vita</span>Tech
          </Link>
          <p className="text-gray-400 mt-2">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#2a2a4e]">
          {/* Tab toggle */}
          <div className="flex gap-2 mb-8">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                isLogin ? 'bg-[#00ffaa] text-[#0a0a1a]' : 'bg-[#0a0a1a] text-gray-400 border border-[#2a2a4e]'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                !isLogin ? 'bg-[#00ffaa] text-[#0a0a1a]' : 'bg-[#0a0a1a] text-gray-400 border border-[#2a2a4e]'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required={!isLogin}
                  className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa]"
                  placeholder="Jane Smith"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa]"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa]"
                placeholder="••••••••"
              />
              {!isLogin && <p className="text-gray-500 text-xs mt-1">Minimum 8 characters</p>}
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00ffaa] hover:bg-[#00dd99] disabled:bg-gray-600 disabled:cursor-not-allowed text-[#0a0a1a] font-bold rounded-lg transition shadow-lg shadow-[#00ffaa]/20"
            >
              {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Want to track an order without an account?{' '}
          <Link href="/track" className="text-[#00ffaa] hover:underline">
            Track here
          </Link>
        </p>
      </div>
    </div>
  );
}
