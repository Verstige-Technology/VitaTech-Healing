'use client';

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function UpgradePage() {
  const upgradePaths = [
    {
      from: '1X',
      to: '2X',
      priceDifference: '$100',
      benefits: [
        'Stronger pain relief for post-workout recovery',
        'Enhanced circulation during physical activity',
        'Reduced inflammation from minor strains',
        'Ideal for athletes and active individuals'
      ]
    },
    {
      from: '1X',
      to: '3X',
      priceDifference: '$200',
      benefits: [
        'Powerful pain management for joints and migraines',
        'Reduced long-term inflammation and nerve pain',
        'Deeper, restorative sleep support',
        'Trusted by therapists and high-level athletes'
      ]
    },
    {
      from: '2X',
      to: '3X',
      priceDifference: '$100',
      benefits: [
        'Advanced support for chronic pain conditions',
        'Enhanced arthritis and joint pain relief',
        'Superior nerve pain reduction',
        'Better sleep quality through body balance'
      ]
    },
    {
      from: '3X',
      to: '6X',
      priceDifference: '$250',
      benefits: [
        'Top-tier cellular regeneration support',
        'Maximum relief from inflammation and stress',
        'Hormonal balance and immunity enhancement',
        'Elite-level wellness optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0C0C21] to-[#188bf6] py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Upgrade Your Wellness</h1>
            <p className="text-xl text-gray-200">
              Ready to experience more? Move up to a higher power level and unlock enhanced benefits for your health journey.
            </p>
          </div>
        </section>

        {/* Why Upgrade */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">Why Upgrade?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Stronger Results', desc: 'Higher power levels deliver more intensive wellness support for chronic issues' },
                { title: 'Better Recovery', desc: 'Faster recovery times for athletes and those with active lifestyles' },
                { title: 'Lasting Investment', desc: 'One upgrade can mean fewer doctor visits and less reliance on medications' }
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-800 text-center">
                  <h3 className="text-xl font-bold text-[#00ffaa] mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upgrade Paths */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-white text-center">Available Upgrade Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upgradePaths.map((path, i) => (
                <div key={i} className="bg-[#0d0d20] rounded-2xl p-8 border border-gray-800">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-[#00ffaa]">{path.from}</span>
                    <span className="text-3xl text-gray-500">→</span>
                    <span className="text-3xl font-bold text-[#d4af37]">{path.to}</span>
                  </div>
                  <p className="text-center text-gray-400 mb-6">
                    Upgrade for just <span className="text-[#00ffaa] font-bold text-xl">{path.priceDifference}</span> more
                  </p>
                  <h4 className="text-lg font-bold text-white mb-4">What You'll Get:</h4>
                  <ul className="space-y-3">
                    {path.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-300">
                        <span className="text-[#00ffaa]">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/shop/3x"
                    className="mt-6 block text-center bg-[#00ffaa] text-[#0a0a1a] py-3 rounded-full font-bold hover:scale-105 transition"
                  >
                    Upgrade Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Power Levels Comparison */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">Power Level Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 text-[#00ffaa] font-bold">Feature</th>
                    <th className="text-center py-4 px-4 text-gray-400">1X</th>
                    <th className="text-center py-4 px-4 text-gray-400">2X</th>
                    <th className="text-center py-4 px-4 text-gray-400">3X</th>
                    <th className="text-center py-4 px-4 text-[#d4af37]">6X</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { feature: 'Pain Relief', values: ['Light', 'Moderate', 'Strong', 'Maximum'] },
                    { feature: 'Anti-Inflammation', values: ['Basic', 'Enhanced', 'Strong', 'Maximum'] },
                    { feature: 'Sleep Support', values: ['Good', 'Better', 'Strong', 'Elite'] },
                    { feature: 'EMF Protection', values: ['Basic', 'Enhanced', 'Strong', 'Maximum'] },
                    { feature: 'Energy Balance', values: ['Good', 'Better', 'Strong', 'Elite'] },
                    { feature: 'Ideal For', values: ['Daily wellness', 'Athletes', 'Chronic pain', 'Elite wellness'] }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-800">
                      <td className="py-4 px-4 font-medium text-white">{row.feature}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className={`py-4 px-4 text-center ${j === 3 ? 'text-[#d4af37] font-bold' : ''}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Upgrade Process */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">How to Upgrade</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Contact Us', desc: 'Reach out via email at sales@vitatechhealing.com or call 407-676-8612' },
                { step: '2', title: 'Provide Original Order', desc: 'Share your original order number from your current VitaTech product' },
                { step: '3', title: 'Select Your Upgrade', desc: 'Choose which power level you\'d like to upgrade to' },
                { step: '4', title: 'Pay Difference', desc: 'Pay only the price difference between your current and new level' },
                { step: '5', title: 'Receive New Product', desc: 'Get your upgraded VitaTech product shipped to your door' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center text-[#0a0a1a] font-bold text-xl flex-shrink-0">
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

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Can I upgrade from any level to any other level?',
                  a: 'Yes! You can upgrade from any power level to any higher level. Just contact us and we\'ll help you through the process.'
                },
                {
                  q: 'Do I need to return my old bracelet?',
                  a: 'Yes, for warranty and environmental reasons, we request that you return your original VitaTech product when upgrading.'
                },
                {
                  q: 'How long does the upgrade process take?',
                  a: 'Once we receive your return and payment, your new product will ship within 3-5 business days.'
                },
                {
                  q: 'Is there a limit to how many times I can upgrade?',
                  a: 'There\'s no limit! Many of our customers continue upgrading as their wellness needs evolve.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-bold text-[#00ffaa] mb-3">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#00ffaa] to-[#188bf6]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#0a0a1a]">Ready to Upgrade Your Wellness?</h2>
            <p className="text-xl text-[#0a0a1a]/80 mb-8">
              Contact us today to start your upgrade journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sales@vitatechhealing.com?subject=Upgrade%20Request" 
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
          <div className="container mx-auto max-w-4xl text-center text-gray-400">
            <p>© 2023 VitaTech Healing LLC. Hollywood, FL. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}