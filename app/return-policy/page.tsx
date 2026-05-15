'use client';

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0C0C21] to-[#188bf6] py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Return Policy</h1>
            <p className="text-xl text-gray-200">
              We want you to be completely satisfied with your VitaTech purchase
            </p>
          </div>
        </section>

        {/* 30-Day Guarantee */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a1a2e] rounded-2xl p-10 border border-gray-800 mb-12">
              <h2 className="text-3xl font-bold text-[#00ffaa] mb-6">30-Day Satisfaction Guarantee</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We believe in the power of VitaTech Healing products to transform your wellness journey. That's why we offer a 30-day satisfaction guarantee on all purchases. If you're not completely satisfied with your VitaTech product within 30 days of delivery, we will gladly assist you with a return or exchange.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Your journey to better health should come with confidence. Try your VitaTech product, experience the benefits, and if it doesn't meet your expectations, we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">How to Return Your Order</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Contact Us', desc: 'Email us at sales@vitatechhealing.com or call 407-676-8612 within 30 days of delivery to initiate your return. Please include your order number and reason for return.' },
                { step: '2', title: 'Receive Return Authorization', desc: 'Our customer service team will review your request and provide you with a return authorization number and instructions within 2 business days.' },
                { step: '3', title: 'Ship Your Return', desc: 'Package your item securely and ship it back to us using the provided return label. Please ensure the product is in its original condition with all accessories.' },
                { step: '4', title: 'Refund Processing', desc: 'Once we receive and inspect your return, we will process your refund within 5-7 business days. The refund will be credited to your original payment method.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-[#00ffaa] rounded-full flex items-center justify-center text-[#0a0a1a] font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">Return Eligibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0d0d20] p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-[#00ffaa] mb-4">✓ Eligible for Return</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00ffaa]">•</span>
                    Product returned within 30 days of delivery
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00ffaa]">•</span>
                    Item in original condition with all tags attached
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00ffaa]">•</span>
                    Includes all original accessories and packaging
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00ffaa]">•</span>
                    Proof of purchase provided (order confirmation)
                  </li>
                </ul>
              </div>
              <div className="bg-[#0d0d20] p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-[#d4af37] mb-4">✗ Not Eligible for Return</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4af37]">•</span>
                    Returns requested after 30-day window
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4af37]">•</span>
                    Items showing signs of use or wear
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4af37]">•</span>
                    Products purchased from unauthorized sellers
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4af37]">•</span>
                    Items damaged by misuse or improper care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Details */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">Refund Details</h2>
            <div className="bg-[#0d0d20] rounded-2xl p-8 border border-gray-800">
              <ul className="space-y-4">
                {[
                  { title: 'Processing Time', desc: 'Refunds are processed within 5-7 business days after we receive and inspect your returned item.' },
                  { title: 'Payment Method', desc: 'Refunds are credited to your original payment method (credit card, PayPal, etc.).' },
                  { title: 'Shipping Costs', desc: 'Original shipping charges are non-refundable. Return shipping costs are the responsibility of the customer unless the return is due to our error.' },
                  { title: 'Partial Refunds', desc: 'Items returned after 30 days, or items that are damaged, used, or missing parts may be subject to a partial refund at our discretion.' }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-2 pb-4 border-b border-gray-800 last:border-0">
                    <span className="text-lg font-bold text-[#00ffaa]">{item.title}</span>
                    <span className="text-gray-400">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Exchanges */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a1a2e] rounded-2xl p-10 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Exchanges</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Need a different size, color, or power level? We offer hassle-free exchanges for your VitaTech products. Simply contact us within 30 days of delivery and let us know what you'd like to exchange for. We'll help you process the exchange and ship your new item promptly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Exchanges are subject to availability. If the item you want is not available, we will help you find an alternative or process a refund.
              </p>
            </div>
          </div>
        </section>

        {/* Damaged or Defective Items */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-[#0C0C21] to-[#188bf6] rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-6">Damaged or Defective Items</h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                If you receive a damaged or defective VitaTech product, please contact us immediately. We take pride in the quality of our products, but if something is wrong, we'll make it right.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                For damaged or defective items, we will provide a full refund or replacement at no additional cost to you. Please provide photos of the damage when contacting us to expedite your case.
              </p>
              <a 
                href="mailto:sales@vitatechhealing.com?subject=Damaged%20Product" 
                className="inline-block bg-white text-[#0C0C21] px-8 py-4 rounded-full font-bold hover:scale-105 transition"
              >
                Report Damaged Item
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Questions About Returns?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our customer service team is here to help. Reach out to us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sales@vitatechhealing.com?subject=Return%20Inquiry" 
                className="px-8 py-4 bg-[#00ffaa] text-[#0a0a1a] rounded-full font-bold hover:scale-105 transition"
              >
                Email Us
              </a>
              <a 
                href="tel:4076768612" 
                className="px-8 py-4 bg-[#1a1a2e] text-white rounded-full font-bold hover:scale-105 transition border border-gray-700"
              >
                Call 407-676-8612
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0E182C] py-12 px-4 mt-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div>
                <h4 className="text-[#00ffaa] font-bold mb-5">FOLLOW US</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/vitatechhealing/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Instagram</a>
                  <a href="https://www.linkedin.com/company/vitatech-healing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">LinkedIn</a>
                  <a href="https://www.facebook.com/people/VitaTech-Healing/100090656043446/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Facebook</a>
                </div>
              </div>
              <div>
                <h4 className="text-[#00ffaa] font-bold mb-5">COMPANY</h4>
                <ul className="space-y-3">
                  <li><Link href="/ambassador-getstarted" className="text-gray-300 hover:text-white transition">AMBASSADOR</Link></li>
                  <li><Link href="/affiliate-getstarted" className="text-gray-300 hover:text-white transition">AFFILIATE</Link></li>
                  <li><Link href="/" className="text-gray-300 hover:text-white transition">CAREERS</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition">ABOUT</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#00ffaa] font-bold mb-5">CUSTOMER CARE</h4>
                <ul className="space-y-3">
                  <li><a href="tel:4076768612" className="text-gray-300 hover:text-white transition">CONTACT US</a></li>
                  <li><a href="mailto:sales@vitatechhealing.com" className="text-gray-300 hover:text-white transition">SUPPORT</a></li>
                  <li><Link href="/warranty" className="text-gray-300 hover:text-white transition">WARRANTY</Link></li>
                  <li><Link href="/" className="text-gray-300 hover:text-white transition">EVENTS</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#00ffaa] font-bold mb-5">LEGAL</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-300 hover:text-white transition">TERMS OF USE</Link></li>
                  <li><Link href="/" className="text-gray-300 hover:text-white transition">PRIVACY POLICY</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
              <p>Copyright 2023. Vitatech Healing LLC. Hollywood, FL. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}