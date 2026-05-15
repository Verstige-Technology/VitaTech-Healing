'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems, isLoaded } = useCart();

  const estimatedShipping = totalItems > 0 ? 9.99 : 0;
  const total = totalPrice + estimatedShipping;

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#00ffaa]">Loading cart...</div>
      </div>
    );
  }

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#1a1a2e] flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">
            Looks like you haven&apos;t added any products to your cart yet. Start shopping to find something you&apos;ll love.
          </p>
          <Link
            href="/shop/1x"
            className="inline-block px-8 py-4 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-xl hover:bg-[#00dd99] transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-400">{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const variant = item.product.variants.find(v => v.id === item.variantId);
              const itemTotal = item.product.price * item.quantity;

              return (
                <div
                  key={`${item.product.id}-${item.variantId}`}
                  className="bg-[#1a1a2e] rounded-xl p-4 border border-white/10"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 bg-[#0d0d20] rounded-lg overflow-hidden">
                      <Image
                        src={variant?.image || item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href={`/product/${item.product.id}`}
                            className="font-bold text-white hover:text-[#00ffaa] transition"
                          >
                            {item.product.name}
                          </Link>
                          {variant && (
                            <p className="text-sm text-gray-400 mt-1">
                              Color: {variant.name}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variantId)}
                          className="text-gray-500 hover:text-red-500 transition p-1"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variantId, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg bg-[#0d0d20] border border-white/20 flex items-center justify-center hover:border-[#00ffaa] transition"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variantId, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg bg-[#0d0d20] border border-white/20 flex items-center justify-center hover:border-[#00ffaa] transition"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-[#00ffaa] font-bold">${itemTotal.toFixed(2)}</p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-gray-500">${item.product.price.toFixed(2)} each</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Continue Shopping */}
            <Link
              href="/shop/1x"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mt-4"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-white/10 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Estimated Shipping</span>
                  <span>${estimatedShipping.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#00ffaa]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                className="w-full mt-6 py-4 bg-[#00ffaa] text-[#0a0a1a] font-bold text-lg rounded-xl hover:bg-[#00dd99] transition active:scale-95"
              >
                Checkout — ${total.toFixed(2)}
              </button>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Free shipping on orders over $150</p>
                <p className="mt-1">30-day money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}