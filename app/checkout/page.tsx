'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

// US States for dropdown
const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];

// Bracelet size options
const BRACELET_SIZES = ['5 1/2', '6 1/2', '7 1/2', '8 1/2', '9'];

// Mock cart items for demo (now with optional size)
interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

const mockCartItems: CartItemType[] = [
  { id: '1', name: 'VitaCore Pro', price: 79.99, quantity: 2 },
  { id: '2', name: 'Immune Support', price: 34.99, quantity: 1 },
];

export default function CheckoutPage() {
  const router = useRouter();
  const paymentsDivRef = useRef<HTMLDivElement>(null);
  const cardFormRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    // Customer fields
    fullName: '',
    email: '',
    phone: '',
    // Shipping address
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    // Order info
    braceletSize: '',
    orderNotes: '',
  });
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [sizeError, setSizeError] = useState<string | null>(null);

  const total = mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Load Square Web Payments SDK script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    script.onerror = () => {
      setError('Failed to load payment SDK');
      setIsLoading(false);
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Initialize Square payments
  useEffect(() => {
    if (!scriptLoaded) return;

    const initializePayments = async () => {
      try {
        const payments = (window as any).Square?.payments(
          process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID || 'sandbox-sq0idb-placeholder',
          process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID || 'placeholder-location-id'
        );

        if (!payments) {
          throw new Error('Square payments not initialized');
        }

        const card = await payments.card();
        await card.attach(paymentsDivRef.current!);

        cardFormRef.current = card;
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to initialize Square:', err);
        setError('Failed to initialize payment form');
        setIsLoading(false);
      }
    };

    initializePayments();
  }, [scriptLoaded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'braceletSize') {
      setSizeError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cardFormRef.current) {
      setError('Payment form not initialized');
      return;
    }

    // Validate bracelet size (required)
    if (!formData.braceletSize) {
      setSizeError('Please select a bracelet size');
      return;
    }

    // Validate form
    if (!formData.fullName || !formData.email || !formData.addressLine1 || !formData.city || !formData.state || !formData.zipCode) {
      setError('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Get payment token from Square
      const result = await cardFormRef.current.tokenize();

      if (result.status === 'OK') {
        const response = await fetch('/api/square/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cartItems: mockCartItems.map(item => ({ ...item, size: formData.braceletSize })),
            shippingAddress: {
              name: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              line1: formData.addressLine1,
              line2: formData.addressLine2,
              city: formData.city,
              state: formData.state,
              zip: formData.zipCode,
              country: formData.country,
            },
            braceletSize: formData.braceletSize,
            orderNotes: formData.orderNotes,
            paymentToken: result.token,
            total,
          }),
        });

        const data = await response.json();

        if (data.success) {
          router.push(`/order-confirmation/${data.orderId}`);
        } else {
          setError(data.error || 'Payment failed');
        }
      } else {
        setError(result.errors?.[0]?.message || 'Tokenization failed');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Payment processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#00ffaa] mb-2">Checkout</h1>
          <p className="text-gray-400">Complete your order securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#2a2a4e]">
            <h2 className="text-2xl font-semibold mb-6 text-[#00ffaa]">
              Contact & Shipping
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border-t border-[#2a2a4e] pt-6 mt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Shipping Address</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors"
                      placeholder="123 Main St"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors"
                      placeholder="Apt 4, Suite 100 (optional)"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        State *
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white focus:outline-none focus:border-[#00ffaa] transition-colors"
                      >
                        <option value="">Select...</option>
                        {US_STATES.map((s) => (
                          <option key={s.code} value={s.code}>
                            {s.code}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        ZIP *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors"
                        placeholder="10001"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white focus:outline-none focus:border-[#00ffaa] transition-colors"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Mexico">Mexico</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Bracelet Size */}
              <div className="border-t border-[#2a2a4e] pt-6 mt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Product Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Bracelet Size <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="braceletSize"
                    value={formData.braceletSize}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 bg-[#0a0a1a] border rounded-lg text-white focus:outline-none transition-colors ${
                      sizeError ? 'border-red-500 focus:border-red-500' : 'border-[#2a2a4e] focus:border-[#00ffaa]'
                    }`}
                  >
                    <option value="">Select size...</option>
                    {BRACELET_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  {sizeError && (
                    <p className="text-red-400 text-sm mt-1">{sizeError}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    All bracelets in your order will be made to this size
                  </p>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Order Notes
                  </label>
                  <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffaa] transition-colors resize-none"
                    placeholder="Special instructions for your order (optional)"
                  />
                </div>
              </div>

              {/* Square Card Form */}
              <div className="border-t border-[#2a2a4e] pt-6 mt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Payment</h3>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Card Information *
                </label>
                <div
                  ref={paymentsDivRef}
                  id="card-container"
                  className="w-full px-4 py-3 bg-[#0a0a1a] border border-[#2a2a4e] rounded-lg min-h-[48px]"
                >
                  {isLoading && (
                    <div className="flex items-center justify-center py-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#00ffaa]"></div>
                      <span className="ml-2 text-gray-400">Loading payment form...</span>
                    </div>
                  )}
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing || isLoading}
                className="w-full py-4 px-6 bg-[#00ffaa] hover:bg-[#00dd99] disabled:bg-gray-600 disabled:cursor-not-allowed text-[#0a0a1a] font-bold rounded-lg transition-colors shadow-lg shadow-[#00ffaa]/20"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0a0a1a] mr-2"></div>
                    Processing...
                  </span>
                ) : (
                  `Pay $${total.toFixed(2)}`
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#2a2a4e] h-fit">
            <h2 className="text-2xl font-semibold mb-6 text-[#00ffaa]">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {mockCartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3 border-b border-[#2a2a4e]"
                >
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    {formData.braceletSize && (
                      <p className="text-[#00ffaa] text-xs">Size: {formData.braceletSize}</p>
                    )}
                  </div>
                  <p className="text-white font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#2a2a4e] pt-4 space-y-3">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-[#00ffaa]">FREE</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-[#2a2a4e]">
                <span>Total</span>
                <span className="text-[#00ffaa]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#0a0a1a] rounded-lg border border-[#2a2a4e]">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg
                  className="w-5 h-5 text-[#00ffaa]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Secure payment powered by Square</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}