'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Hero Section with Video */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://media.istockphoto.com/id/2152316706/photo/senior-couple-playing-pickleball.jpg?s=612x612&w=0&k=20&c=_9WvmBXXF-3_0gQT3FUoLYZJD8S56qJ_gGJiB5v2eqE="
        >
          <source src="https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bc8c9f8c18875c2b6f199.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/60 via-transparent to-[#0a0a1a] z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#00ffaa]">Wellness</span> Jewelry
            <br />for Every Lifestyle
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of Tourmaline, Far Infrared, Germanium & Neodymium Magnets
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Perfect for active seniors, pickleball players, and everyday movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop/1x"
              className="px-8 py-4 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00dda0] transition"
            >
              SHOP NOW
            </Link>
            <Link
              href="/benefits"
              className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-[#0a0a1a] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Wellness Jewelry for Every Lifestyle */}
      <section className="py-20 px-4 bg-[#0a0a1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Wellness Jewelry for <span className="text-[#00ffaa]">Every Lifestyle</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Even if you don't struggle with pain, VitaTech Healing jewelry is designed to{' '}
                <strong className="text-white">enhance everyday performance, balance, and vitality</strong>.
                Just like investing in high-quality athletic shoes for better posture and support, our wellness
                jewelry is an <em className="text-[#d4af37]">investment in your health</em> that you carry with you every day.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-[#00ffaa]">✔</span> Supports circulation and oxygen flow for active lifestyles
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ffaa]">✔</span> Helps maintain balance, energy, and recovery after workouts
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ffaa]">✔</span> Stylish, lightweight, and designed for daily wear
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ffaa]">✔</span> Natural wellness boost — whether you're exercising, working, or relaxing
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/692f47e173043af1654e66e9.jpeg"
                alt="VitaTech Healing wellness jewelry display"
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Does the VitaTech Bracelet Work? */}
      <section className="py-20 px-4 bg-[#0d0d20]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            How Does the <span className="text-[#00ffaa]">VitaTech Bracelet</span> Work?
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Our bracelets combine four powerful technologies to promote wellness and balance in your daily life.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Tourmaline',
                desc: 'Naturally emits negative ions & far infrared energy. Similar to what you find in KT Tape® and recovery wraps, it helps relax muscles, improve oxygen flow, and reduce minor discomfort.',
                color: '#00ffaa',
              },
              {
                title: 'Far Infrared',
                desc: 'Promotes circulation and cellular recovery by gently penetrating tissues with soothing infrared waves, often used in infrared saunas and professional therapy devices.',
                color: '#d4af37',
              },
              {
                title: 'Germanium',
                desc: "Known for its ability to balance the body's energy flow and support stress resistance. Used in wellness devices for decades to counter modern-day fatigue and EMF exposure.",
                color: '#00ffaa',
              },
              {
                title: 'Neodymium Magnets',
                desc: 'Creates a localized magnetic field that may stimulate blood flow and support natural healing responses. Commonly used in athletic and recovery bands worldwide.',
                color: '#d4af37',
              },
            ].map((tech, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: tech.color }}>{tech.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm">
            This technology isn't new — it's been trusted by athletes, trainers, and therapists for years.{' '}
            <strong className="text-white">VitaTech Healing simply makes it wearable, accessible, and affordable for everyone.</strong>
          </p>
          <div className="text-center mt-6">
            <Link href="/benefits" className="text-[#00ffaa] hover:underline font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Natural Healing Technology Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#00ffaa]/10 to-[#d4af37]/10 border-y border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-[#00ffaa] text-sm tracking-widest uppercase mb-2">Natural Healing Technology</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Wear Wellness.<br />Live Fully.
          </h1>
        </div>
      </section>

      {/* Helping Thousands */}
      <section className="py-20 px-4 bg-[#0a0a1a]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Helping Thousands Break Free From Medications and Live Better Every Day
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            At VitaTech Healing, we've empowered thousands of people to reclaim their health naturally.
            Our wearable technology is designed to work with your body — improving circulation,
            boosting energy, and accelerating recovery — so you can enjoy life to the fullest.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Relief From Arthritis & Pain',
                desc: 'Infrared technology increases blood flow to ease stiffness and reduce discomfort, helping joints stay flexible and mobile.',
              },
              {
                title: 'Enhanced Circulation & Recovery',
                desc: 'Germanium naturally supports oxygen delivery to muscles, boosting endurance and accelerating recovery after daily activity or exercise.',
              },
              {
                title: 'Balance & Everyday Vitality',
                desc: 'Our bracelets help restore natural body balance, reduce stress, and support energy — giving you strength to move, perform, and live fully.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00ffaa] mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop/1x"
              className="px-8 py-4 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00dda0] transition inline-block"
            >
              DISCOVER YOUR LEVEL
            </Link>
          </div>
        </div>
      </section>

      {/* Pickleball Performance */}
      <section className="py-20 px-4 bg-[#0d0d20]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#d4af37] text-sm tracking-widest uppercase mb-2">Pickleball Performance & Recovery</p>
              <h2 className="text-4xl font-bold mb-6">Why Pickleball Athletes Choose VitaTech</h2>
              <div className="space-y-6">
                {[
                  { title: 'Relief for Elbow & Wrist', desc: 'Repetitive swings strain forearms and elbows. VitaTech bracelets target inflammation and improve blood flow to reduce strain.' },
                  { title: 'Faster Recovery', desc: 'Between-game recovery is critical. Germanium and infrared work together to reduce muscle fatigue and speed up healing.' },
                  { title: 'Improved Balance', desc: 'VitaTech supports proprioception and joint stability, helping you move more confidently on the court.' },
                  { title: 'Stress & EMF Support', desc: 'Modern courts are surrounded by EMF from devices. Germanium helps counter stress from environmental factors.' },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold text-[#00ffaa]">{item.title}</h3>
                    <p className="text-gray-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="/shop/1x" className="px-6 py-3 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00dda0] transition">
                  Shop Athlete Styles
                </Link>
                <Link href="/contact" className="px-6 py-3 border border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-[#0a0a1a] transition">
                  Talk to a Specialist
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://media.istockphoto.com/id/2223137693/photo/pickleball-player-suffering-shoulder-pain.jpg?s=612x612&w=0&k=20&c=Swgupis1UvmV8AZrrCYzbp5sAstuzvSC1kdNwhVew2s="
                alt="Pickleball Shoulder Pain"
                width={600}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shoulder Pain Section */}
      <section className="py-20 px-4 bg-[#0a0a1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="https://media.istockphoto.com/id/2152316706/photo/senior-couple-playing-pickleball.jpg?s=612x612&w=0&k=20&c=_9WvmBXXF-3_0gQT3FUoLYZJD8S56qJ_gGJiB5v2eqE="
                alt="Senior couple playing pickleball"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#d4af37] text-sm tracking-widest uppercase mb-2">Targeted Relief</p>
              <h2 className="text-4xl font-bold mb-6">Shoulder Pain Support for Pickleball Players</h2>
              <p className="text-gray-300 text-lg mb-6">
                Pickleball can strain shoulders due to repetitive swings and overhead shots. VitaTech Healing
                bracelets and bands are designed to relieve tension, improve circulation, and speed up recovery
                so you can get back in the game pain-free.
              </p>
              <Link href="/shop/2x" className="text-[#00ffaa] hover:underline font-medium">
                Explore Pain Relief Bracelets →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helping Seniors */}
      <section className="py-20 px-4 bg-[#0d0d20]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Helping Seniors Live Better, Naturally
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            At VitaTech Healing, we've had the privilege of helping thousands of older adults reduce their
            dependence on medications, restore balance, and improve overall well-being through natural and
            holistic solutions. Our focus has always been to empower seniors to not just live longer—but to
            live <em className="text-[#d4af37]">with more energy, vitality, and confidence</em> in their health.
          </p>
          <div className="relative mb-12">
            <Image
              src="https://lirp.cdn-website.com/08d31351/dms3rep/multi/opt/422410-1-worlds-biggest-retirement-community-the-villages-329b8c3c-1920w.jpg"
              alt="The Villages Retirement Community"
              width={1200}
              height={400}
              className="rounded-xl w-full object-cover h-64"
            />
          </div>
          <h3 className="text-2xl font-bold text-center mb-8">Targeted Support for Common Health Concerns</h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            VitaTech Healing products are designed to address the most common challenges seniors face —
            using advanced natural technologies like Far Infrared and Germanium to restore comfort and vitality.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Arthritis Relief', desc: 'Infrared therapy increases blood flow to stiff joints, while germanium helps reduce inflammation and improves mobility naturally.' },
              { title: 'Carpal Tunnel', desc: 'Magnetic therapy and tourmaline work together to relieve wrist pressure and support nerve function.' },
              { title: 'Knee Pain', desc: 'Germanium and infrared target knee inflammation and help restore joint flexibility for walking and daily activities.' },
              { title: 'Back Pain', desc: 'Tourmaline and magnetic therapy support spine alignment and reduce chronic back discomfort.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-[#00ffaa] mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Level CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#00ffaa]/10 via-transparent to-[#d4af37]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Find Your Power Level</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { level: '1X', price: '$199', desc: 'Entry wellness support' },
              { level: '2X', price: '$299', desc: 'Enhanced performance' },
              { level: '3X', price: '$399', desc: 'Advanced recovery' },
              { level: '6X', price: '$649', desc: 'Maximum potency' },
            ].map((item, i) => (
              <Link
                key={i}
                href={`/shop/${item.level.toLowerCase()}`}
                className="bg-white/[0.05] border border-white/20 rounded-xl p-6 hover:border-[#00ffaa] transition group"
              >
                <span className="text-3xl font-bold text-[#00ffaa] group-hover:scale-110 transition">{item.level}</span>
                <span className="text-[#d4af37] text-xl font-bold block mt-2">{item.price}</span>
                <span className="text-gray-400 text-sm">{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#0d0d20] border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#00ffaa] mb-4">VitaTech Healing</h3>
              <p className="text-gray-400 text-sm">
                Natural wellness technology designed to help you live better, naturally.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Shop</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/shop/1x" className="hover:text-[#00ffaa]">1X Level</Link></li>
                <li><Link href="/shop/2x" className="hover:text-[#00ffaa]">2X Level</Link></li>
                <li><Link href="/shop/3x" className="hover:text-[#00ffaa]">3X Level</Link></li>
                <li><Link href="/shop/6x" className="hover:text-[#00ffaa]">6X Level</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-[#00ffaa]">About</Link></li>
                <li><Link href="/benefits" className="hover:text-[#00ffaa]">Benefits</Link></li>
                <li><Link href="/reviews" className="hover:text-[#00ffaa]">Reviews</Link></li>
                <li><Link href="/warranty" className="hover:text-[#00ffaa]">Warranty</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/return-policy" className="hover:text-[#00ffaa]">Return Policy</Link></li>
                <li><Link href="/upgrade" className="hover:text-[#00ffaa]">Upgrade</Link></li>
                <li><Link href="/contact" className="hover:text-[#00ffaa]">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="https://stcdn.leadconnectorhq.com/funnel/icons/brand/instagram-brand.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="https://stcdn.leadconnectorhq.com/funnel/icons/brand/facebook-brand.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="https://stcdn.leadconnectorhq.com/funnel/icons/brand/linkedin-brand.svg" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} VitaTech Healing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}