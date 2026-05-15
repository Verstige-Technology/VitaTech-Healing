'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            <span className="text-[#00ffaa]">Vita</span>Tech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/login" className="text-gray-300 hover:text-white transition">
              Login
            </Link>

            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
                className="text-gray-300 hover:text-white transition flex items-center gap-1"
              >
                Shop
                <span className="text-xs">▼</span>
              </button>
              {shopOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <Link href="/shop/mens" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    Men's
                  </Link>
                  <Link href="/shop/womens" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    Women's
                  </Link>
                  <hr className="my-2 border-gray-700" />
                  <Link href="/shop/1x" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    1x Power Level
                  </Link>
                  <Link href="/shop/2x" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    2x Power Level
                  </Link>
                  <Link href="/shop/3x" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    3x Power Level
                  </Link>
                  <Link href="/shop/6x" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    6x Power Level
                  </Link>
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
                className="text-gray-300 hover:text-white transition flex items-center gap-1"
              >
                More
                <span className="text-xs">▼</span>
              </button>
              {moreOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2"
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                >
                  <Link href="/benefits" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    Benefits
                  </Link>
                  <Link href="/reviews" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    Reviews
                  </Link>
                  <Link href="/about" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    About
                  </Link>
                  <Link href="/warranty" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    Warranty
                  </Link>
                  <Link href="/upgrade" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    Upgrade
                  </Link>
                  <Link href="/return-policy" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition">
                    Return Policy
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Cart Icon */}
          <button className="relative p-2 text-gray-300 hover:text-white transition">
            <span className="text-xl">🛒</span>
            <span className="absolute top-0 right-0 w-5 h-5 bg-[#d4af37] text-black text-xs font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}