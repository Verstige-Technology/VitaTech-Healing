'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, getProductsByLevel } from '@/lib/products';
import { useCart } from '@/lib/cart';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addItem, totalItems } = useCart();

  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Product Not Found</h1>
          <Link href="/shop/1x" className="text-[#00ffaa] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  if (!selectedVariantId && product.variants.length > 0) {
    const defaultVariant = product.variants.find(v => v.available) || product.variants[0];
    setSelectedVariantId(defaultVariant.id);
  }

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId);
  const levelColors: Record<string, string> = {
    '1x': '#00ffaa',
    '2x': '#d4af37',
    '3x': '#00ffaa',
    '6x': '#d4af37',
  };
  const levelColor = levelColors[product.level] || '#00ffaa';

  const relatedProducts = getProductsByLevel(product.level as '1x' | '2x' | '3x' | '6x')
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (selectedVariantId) {
      addItem(product, selectedVariantId, quantity);
    }
  };

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-400">({product.reviewCount} reviews)</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Breadcrumb */}
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/shop/${product.level}`} className="hover:text-white transition">
            Shop {product.level.toUpperCase()}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#00ffaa] text-[#0a0a1a] text-sm font-bold rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                      idx === selectedImageIndex ? 'border-[#00ffaa]' : 'border-transparent hover:border-white/30'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold border"
                style={{ color: levelColor, borderColor: levelColor, backgroundColor: `${levelColor}15` }}
              >
                {product.level.toUpperCase()} LEVEL
              </span>
              <span className="text-gray-400 text-sm capitalize">{product.gender}&apos;s Collection</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-white">{product.name}</h1>
            {renderStars(product.rating)}

            <div className="text-3xl font-bold text-[#00ffaa]">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-300 text-lg">{product.shortDescription}</p>

            {/* Variant Selector */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Select Color</h3>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariantId(variant.id)}
                    disabled={!variant.available}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                      selectedVariantId === variant.id
                        ? 'border-[#00ffaa] scale-110'
                        : variant.available
                        ? 'border-transparent hover:border-white/30'
                        : 'border-transparent opacity-40'
                    }`}
                    style={{ backgroundColor: variant.color }}
                    title={`${variant.name}${!variant.available ? ' (Unavailable)' : ''}`}
                  >
                    {selectedVariantId === variant.id && (
                      <svg className="absolute inset-0 m-auto w-5 h-5 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {!variant.available && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-0.5 bg-red-500 rotate-45" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {selectedVariant && (
                <p className="mt-2 text-sm text-gray-400">
                  Selected: <span className="text-white">{selectedVariant.name}</span>
                </p>
              )}
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-[#1a1a2e] border border-white/20 flex items-center justify-center hover:border-[#00ffaa] transition text-white"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-xl font-bold w-12 text-center text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-[#1a1a2e] border border-white/20 flex items-center justify-center hover:border-[#00ffaa] transition text-white"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#00ffaa] text-[#0a0a1a] font-bold text-lg rounded-xl hover:bg-[#00dd99] transition active:scale-95"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Description */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold mb-3 text-white">Description</h3>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Specs Table */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4 text-white">Specifications</h3>
              <div className="bg-[#1a1a2e] rounded-xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr key={spec.label} className={idx % 2 === 0 ? 'bg-[#1a1a2e]' : 'bg-[#1f1f35]'}>
                        <td className="px-5 py-3 text-gray-400 text-sm">{spec.label}</td>
                        <td className="px-5 py-3 text-white text-sm font-medium text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-white">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/product/${related.id}`}
                  className="group bg-[#1a1a2e] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00ffaa]/50 transition"
                >
                  <div className="relative aspect-square bg-[#0d0d20]">
                    <Image
                      src={related.images[0]}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white mb-1 text-sm">{related.name}</h3>
                    <p className="text-[#00ffaa] font-bold">${related.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Cart Toggle */}
      {totalItems > 0 && (
        <Link
          href="/cart"
          className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-3 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-full shadow-lg hover:bg-[#00dd99] transition z-50"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>{totalItems}</span>
        </Link>
      )}
    </div>
  );
}