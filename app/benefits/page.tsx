'use client';

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0C0C21] to-[#188bf6] py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Wellness Jewelry for Every Lifestyle</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Even if you don't struggle with pain, VitaTech Healing jewelry is designed to <strong>enhance everyday performance, balance, and vitality</strong>. Just like investing in high-quality athletic shoes for better posture and support, our wellness jewelry is an <em>investment in your health</em> that you carry with you every day.
            </p>
          </div>
        </section>

        {/* Quick Benefits */}
        <section className="py-12 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <ul className="space-y-4">
              {[
                'Supports circulation and oxygen flow for active lifestyles',
                'Helps maintain balance, energy, and recovery after workouts',
                'Stylish, lightweight, and designed for daily wear',
                'Natural wellness boost — whether you\'re exercising, working, or relaxing'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-300">
                  <span className="text-[#00ffaa] text-xl">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-white">How Does the VitaTech Bracelet Work?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              The VitaTech Healing Bracelet uses the same breakthrough technology trusted in athletic recovery tools, physical therapy, and wellness devices — now made <strong className="text-white">affordable and wearable every day</strong>. Each element works together to help balance energy, support circulation, and speed up recovery.
            </p>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Natural Healing Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Tourmaline',
                  description: 'Naturally emits negative ions & far infrared energy. Similar to what you find in <strong>KT Tape® and recovery wraps</strong>, it helps relax muscles, improve oxygen flow, and reduce minor discomfort.',
                  color: '#00ffaa'
                },
                {
                  title: 'Far Infrared',
                  description: 'Promotes <strong>circulation and cellular recovery</strong> by gently penetrating tissues with soothing infrared waves, often used in infrared saunas and professional therapy devices.',
                  color: '#00ffaa'
                },
                {
                  title: 'Germanium',
                  description: 'Known for its ability to <strong>balance the body\'s energy flow</strong> and support stress resistance. Used in wellness devices for decades to counter modern-day fatigue and EMF exposure.',
                  color: '#00ffaa'
                },
                {
                  title: 'Neodymium Magnets',
                  description: 'Creates a localized magnetic field that may <strong>stimulate blood flow</strong> and support natural healing responses. Commonly used in athletic and recovery bands worldwide.',
                  color: '#00ffaa'
                }
              ].map((tech, i) => (
                <div key={i} className="bg-[#0d0d20] p-8 rounded-xl border border-gray-800">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: tech.color }}>{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: tech.description }} />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8 italic">
              This technology isn't new — it's been trusted by athletes, trainers, and therapists for years. VitaTech Healing simply makes it wearable, accessible, and affordable for everyone.
            </p>
          </div>
        </section>

        {/* Live Fully Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Wear Wellness. Live Fully.</h2>
            <h3 className="text-2xl text-[#00ffaa] mb-6">Helping Thousands Break Free From Medications and Live Better Every Day</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              At VitaTech Healing, we've empowered thousands of people to reclaim their health naturally. Our wearable technology is designed to work with your body — improving circulation, boosting energy, and accelerating recovery — so you can enjoy life to the fullest.
            </p>
          </div>
        </section>

        {/* Condition Support Grid */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Relief From Arthritis & Pain',
                  description: 'Infrared technology increases blood flow to ease stiffness and reduce discomfort, helping joints stay flexible and mobile.'
                },
                {
                  title: 'Enhanced Circulation & Recovery',
                  description: 'Germanium naturally supports oxygen delivery to muscles, boosting endurance and accelerating recovery after daily activity or exercise.'
                },
                {
                  title: 'Balance & Everyday Vitality',
                  description: 'Our bracelets help restore natural body balance, reduce stress, and support energy — giving you strength to move, perform, and live fully.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#0d0d20] p-6 rounded-xl border border-gray-800">
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sport Series */}
        <section className="py-16 px-4 border-l-4 border-[#FF6240] bg-[#1a1a2e] ml-4 mr-4 rounded-r-xl">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-white">VITATECH SPORT SERIES</h2>
            <h2 className="text-2xl text-[#00ffaa] mb-6">Pickleball Performance & Recovery</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Powered by tourmaline, far infrared, germanium, and neodymium magnets — VitaTech Healing technology helps reduce joint pain, boost balance, and speed up recovery so you can play harder, longer.
            </p>
            <h3 className="text-xl font-bold text-white mb-6">Why Pickleball Athletes Choose VitaTech</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Relief for Elbow & Wrist', desc: 'Supports joints under repetitive stress — great for "pickleball elbow."' },
                { title: 'Faster Recovery', desc: 'Far infrared and mineral frequencies encourage circulation post-match.' },
                { title: 'Improved Balance', desc: 'Stay centered at the NVZ, move quicker, and play with stability.' },
                { title: 'Stress & EMF Support', desc: 'Helps balance your body\'s energy against modern stressors.' }
              ].map((item, i) => (
                <div key={i} className="bg-[#0d0d20] p-5 rounded-xl border border-gray-800">
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shoulder Pain Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Shoulder Pain Support for Pickleball Players</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Pickleball can strain shoulders due to repetitive swings and overhead shots. VitaTech Healing bracelets and bands are designed to relieve tension, improve circulation, and speed up recovery so you can get back in the game pain-free.
            </p>
          </div>
        </section>

        {/* Senior Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#FB6542] to-[#FFBB00]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Helping Seniors Live Better, Naturally</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              At VitaTech Healing, we've had the privilege of helping thousands of older adults reduce their dependence on medications, restore balance, and improve overall well-being through natural and holistic solutions.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Our focus has always been to empower seniors to not just live longer—but to live better, with more energy, vitality, and confidence in their health.
            </p>
          </div>
        </section>

        {/* Target Conditions */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Targeted Support for Common Health Concerns</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              VitaTech Healing products are designed to address the most common challenges seniors face — using advanced natural technologies like infrared therapy and germanium infusion to restore comfort and vitality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Arthritis Relief', desc: 'Infrared therapy increases blood flow to stiff joints, while germanium helps reduce inflammation and improves mobility naturally.' },
                { title: 'Carpal Tunnel', desc: 'Promotes circulation in the wrists and hands, easing numbness and supporting nerve health for daily comfort.' },
                { title: 'Knee Pain', desc: 'Infrared energy penetrates deep into knee joints, reducing stiffness, improving flexibility, and restoring confidence in movement.' },
                { title: 'Back Pain', desc: 'By stimulating circulation and oxygen delivery, our solutions relieve tension in the back and support healthier posture and mobility.' },
                { title: 'Joint Support', desc: 'Germanium helps supply more oxygen to muscles and joints, reducing fatigue and keeping you active longer with less discomfort.' }
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-[#00ffaa] mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Does It Help With */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-white">What does it help with?</h2>
            <ul className="space-y-4">
              {['HEADACHES & MIGRAINES', 'BACK PAIN & FEET PAIN', 'ARTHRITIS & INFLAMMATION', 'HIP PAIN & SCIATICA', 'JOINT & NERVE PAIN'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-300">
                  <span className="text-[#00ffaa] text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Golf Section */}
        <section className="py-16 px-4 border-l-4 border-[#FF6240] bg-[#1a1a2e] ml-4 mr-4 rounded-r-xl">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-white">Golf Performance & Recovery</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Optimize your game with enhanced flexibility, endurance, and recovery. VitaTech Healing's mineral-infused technology supports joint mobility, reduces inflammation, and helps your body recover faster — so you can swing smoother, walk longer, and play your best round.
            </p>
            <h3 className="text-xl font-bold text-white mb-6">Why Golfers Choose VitaTech Healing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Enhanced Flexibility', desc: 'Supports full range of motion for smooth swings and improved form.' },
                { title: 'Joint & Muscle Support', desc: 'Helps protect knees, shoulders, and back during long walks and repeated swings.' },
                { title: 'Stamina & Endurance', desc: 'Mineral frequencies promote circulation and sustained energy for consistent performance.' },
                { title: 'Faster Recovery', desc: 'Reduces soreness and aids in post-round recovery for quicker turnaround between sessions.' }
              ].map((item, i) => (
                <div key={i} className="bg-[#0d0d20] p-5 rounded-xl border border-gray-800">
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menopause Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Menopause Relief & Wellness</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Menopause can bring hot flashes, night sweats, and disrupted sleep. While traditional medications like hormone replacement therapy carry side effects, many women seek natural solutions. VitaTech Healing's 3X Level Bracelets help support your body, reduce discomfort, and improve overall wellness naturally.
            </p>
            <h3 className="text-xl font-bold text-[#00ffaa] mb-6">Why Women Choose VitaTech Healing</h3>
            <ul className="space-y-4">
              {[
                'Reduces hot flashes and night sweats naturally.',
                'Improves sleep quality and promotes relaxation.',
                'Supports overall wellness and energy balance.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-300">
                  <span className="text-[#00ffaa] text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-[#0C0C21]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Choose Your Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  level: '1X',
                  name: 'ESSENTIAL LEVEL',
                  desc: 'Light support for daily balance & energy',
                  price: '$199',
                  features: [
                    'Enhances natural energy and focus throughout the day',
                    'Promotes emotional balance and reduces minor stress',
                    'Supports light pain relief from everyday tension',
                    'Improves overall wellness through negative ion exposure',
                    'Great for first-time users or youth seeking gentle support'
                  ]
                },
                {
                  level: '2X',
                  name: 'ACTIVE LEVEL',
                  desc: 'Built for movers, gym-goers, and daily performance',
                  price: '$299',
                  features: [
                    'Accelerates muscle recovery and reduces post-workout soreness',
                    'Increases circulation and oxygen flow during physical activity',
                    'Provides stronger pain relief than standard wellness wear',
                    'Helps reduce inflammation from minor injuries or strains',
                    'Ideal for athletes, runners, gym enthusiasts'
                  ]
                },
                {
                  level: '3X',
                  name: 'PERFORMANCE LEVEL',
                  desc: 'Advanced support for chronic pain and high-performance recovery',
                  price: '$399',
                  features: [
                    'Powerful pain management for joints, back, and migraines',
                    'Assists in reducing long-term inflammation and nerve pain',
                    'Supports deeper, restorative sleep through body balance',
                    'Ideal for chronic pain conditions, arthritis, or injuries',
                    'Trusted by therapists and high-level athletes for recovery'
                  ]
                },
                {
                  level: '6X',
                  name: 'VITAL-CORE LEVEL',
                  desc: 'Our most advanced bracelet for full-spectrum vitality & protection',
                  price: '$649',
                  features: [
                    'Delivers top-tier support for advanced cellular regeneration and recovery.',
                    'Maximum relief from inflammation, stress, and EMF exposure',
                    'Supports hormonal balance and immunity enhancement',
                    'Enhances focus, energy, and physical alignment',
                    'Designed for those seeking elite-level wellness optimization'
                  ]
                }
              ].map((tier, i) => (
                <div key={i} className="bg-white text-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#188bf6] mb-2">{tier.level} - {tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.desc}</p>
                  <p className="text-3xl font-bold text-[#00ffaa] mb-6">{tier.price}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[#00ffaa]">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gray-800/50 p-6 rounded-lg text-sm text-gray-400">
              <strong className="text-gray-300">Disclaimer:</strong> VitaTech Healing products are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Always consult a healthcare professional before beginning any new wellness program or supplement.
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