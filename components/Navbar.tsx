'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { products } from '@/lib/products';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const { totalItems } = useCart();

  const levels = ['1x', '2x', '3x', '6x'];
  const genders = ['mens', 'womens', 'unisex'];

  return (
    <nav className="bg-[#0d0d20] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00ffaa] to-[#d4af37] flex items-center justify-center">
                <span className="text-[#0d0d20] font-bold text-sm">V</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                VitaTech <span className="text-[#00ffaa]">Healing</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link
              href="/"
              className="text-white hover:text-[#00ffaa] transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <button className="text-white hover:text-[#00ffaa] transition-colors duration-200 font-medium flex items-center gap-1">
                Shop
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isShopDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isShopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-[#1a1a30] border border-white/10 rounded-lg shadow-xl py-2">
                  <div className="px-4 py-2 border-b border-white/10">
                    <p className="text-xs font-semibold text-[#00ffaa] uppercase tracking-wider">
                      By Power Level
                    </p>
                  </div>
                  {levels.map((level) => (
                    <Link
                      key={level}
                      href={`/shop?level=${level}`}
                      className="block px-4 py-2 text-white hover:bg-white/5 hover:text-[#00ffaa] transition-colors"
                    >
                      <span className="capitalize">{level.toUpperCase()}</span>
                      <span className="ml-2 text-sm text-white/60">
                        {level === '1x' && '(Foundational)'}
                        {level === '2x' && '(Enhanced)'}
                        {level === '3x' && '(Performance)'}
                        {level === '6x' && '(Maximum)'}
                      </span>
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-b border-white/10 mt-1">
                    <p className="text-xs font-semibold text-[#00ffaa] uppercase tracking-wider">
                      By Gender
                    </p>
                  </div>
                  {genders.map((gender) => (
                    <Link
                      key={gender}
                      href={`/shop?gender=${gender}`}
                      className="block px-4 py-2 text-white hover:bg-white/5 hover:text-[#00ffaa] transition-colors capitalize"
                    >
                      {gender === 'unisex' ? 'Unisex' : gender === 'mens' ? "Men's" : "Women's"}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
            >
              <button className="text-white hover:text-[#00ffaa] transition-colors duration-200 font-medium flex items-center gap-1">
                More
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMoreDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMoreDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-[#1a1a30] border border-white/10 rounded-lg shadow-xl py-2">
                  <Link
                    href="/benefits"
                    className="block px-4 py-2 text-white hover:bg-white/5 hover:text-[#00ffaa] transition-colors"
                  >
                    Benefits
                  </Link>
                  <Link
                    href="/reviews"
                    className="block px-4 py-2 text-white hover:bg-white/5 hover:text-[#00ffaa] transition-colors"
                  >
                    Reviews
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-white hover:bg-white/5 hover:text-[#00ffaa] transition-colors"
                  >
                    About Us
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Login & Cart */}
          <div className="flex items-center gap-4">
            {/* Login Button */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-[#00ffaa]/30 text-[#00ffaa] rounded-lg hover:bg-[#00ffaa]/10 transition-colors duration-200 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Login
            </button>

            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative p-2 text-white hover:text-[#00ffaa] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#00ffaa] text-[#0d0d20] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white hover:text-[#00ffaa] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d20] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg"
            >
              Home
            </Link>

            {/* Mobile Shop Section */}
            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-[#00ffaa] uppercase tracking-wider mb-2">
                Shop by Power Level
              </p>
              {levels.map((level) => (
                <Link
                  key={level}
                  href={`/shop?level=${level}`}
                  className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg capitalize"
                >
                  {level.toUpperCase()} - {level === '1x' && 'Foundational'}
                  {level === '2x' && 'Enhanced'}
                  {level === '3x' && 'Performance'}
                  {level === '6x' && 'Maximum'}
                </Link>
              ))}
              <p className="text-xs font-semibold text-[#00ffaa] uppercase tracking-wider mt-4 mb-2">
                Shop by Gender
              </p>
              {genders.map((gender) => (
                <Link
                  key={gender}
                  href={`/shop?gender=${gender}`}
                  className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg capitalize"
                >
                  {gender === 'unisex' ? 'Unisex' : gender === 'mens' ? "Men's" : "Women's"}
                </Link>
              ))}
            </div>

            {/* Mobile More Section */}
            <div className="border-t border-white/10 pt-2 px-3 py-2">
              <p className="text-xs font-semibold text-[#00ffaa] uppercase tracking-wider mb-2">
                More
              </p>
              <Link href="/benefits" className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg">
                Benefits
              </Link>
              <Link href="/reviews" className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg">
                Reviews
              </Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:bg-white/5 rounded-lg">
                About Us
              </Link>
            </div>

            {/* Mobile Login */}
            <div className="border-t border-white/10 pt-2 px-3 py-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-[#00ffaa]/30 text-[#00ffaa] rounded-lg hover:bg-[#00ffaa]/10 transition-colors font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
