'use client';

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0C0C21] to-[#188bf6] py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Warranty</h1>
            <p className="text-xl text-gray-200">Our commitment to quality and your peace of mind</p>
          </div>
        </section>

        {/* Warranty Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a1a2e] rounded-2xl p-10 border border-gray-800 mb-12">
              <h2 className="text-3xl font-bold text-[#00ffaa] mb-6">Limited Lifetime Warranty</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                VitaTech Healing stands behind the quality and durability of our products. All VitaTech Healing bracelets and wellness jewelry are covered by our Limited Lifetime Warranty against manufacturing defects in materials and craftsmanship.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This warranty is valid for the original purchaser only and is non-transferable. It covers the functional components of your VitaTech product including clasps, links, and embedded technology elements under normal use.
              </p>
            </div>
          </div>
        </section>

        {/* What's Covered */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">What's Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Manufacturing Defects', desc: 'Defects in materials or workmanship at time of manufacture' },
                { title: 'Clasp & Buckle Issues', desc: 'Structural failures in closures and fastening mechanisms' },
                { title: 'Link Separations', desc: 'Breaking or separating of bracelet links under normal use' },
                { title: 'Technology Elements', desc: 'Issues with embedded tourmaline, magnets, or germanium components' }
              ].map((item, i) => (
                <div key={i} className="bg-[#0d0d20] p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-[#00ffaa] mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Not Covered */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">What's Not Covered</h2>
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                {[
                  'Normal wear and tear including scratches, fading, or discoloration',
                  'Damage from misuse, abuse, or improper handling',
                  'Unauthorized modifications or repairs',
                  'Loss or theft of product',
                  'Damage from exposure to extreme chemicals, temperatures, or conditions',
                  'Cosmetic damage that does not affect functionality',
                  'Products purchased from unauthorized resellers'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <span className="text-[#d4af37] text-xl">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">How to File a Warranty Claim</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Contact Us', desc: 'Reach out to our customer service team via email at sales@vitatechhealing.com or call 407-676-8612 with your order number and description of the issue.' },
                { step: '2', title: 'Provide Documentation', desc: 'Submit photos or video of the defect to help us assess the situation quickly.' },
                { step: '3', title: 'Review & Approval', desc: 'Our team will review your claim and notify you of approval within 3-5 business days.' },
                { step: '4', title: 'Resolution', desc: 'Approved warranty claims will receive a replacement product or repair at no additional cost to you.' }
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

        {/* Additional Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a1a2e] rounded-2xl p-10 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Important Notes</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffaa]">✓</span>
                  Warranty claims must be submitted within 30 days of discovering the defect
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffaa]">✓</span>
                  Replacement products may be of equal or greater value based on availability
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffaa]">✓</span>
                  We reserve the right to inspect returned products before approving warranty claims
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffaa]">✓</span>
                  This warranty does not affect your statutory rights as a consumer
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#00ffaa] to-[#188bf6]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#0a0a1a]">Questions About Your Warranty?</h2>
            <p className="text-xl text-[#0a0a1a]/80 mb-8">
              Our customer service team is here to help with any questions about your coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sales@vitatechhealing.com" 
                className="px-8 py-4 bg-[#0a0a1a] text-white rounded-full font-bold hover:scale-105 transition"
              >
                Email Us
              </a>
              <a 
                href="tel:4076768612" 
                className="px-8 py-4 bg-white text-[#0a0a1a] rounded-full font-bold hover:scale-105 transition"
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