'use client';

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0C0C21] to-[#188bf6] py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              After years of dedicated research and innovation, VitaTech Healing has perfected the natural synergy that helps the body perform and feel its best. We specialize in seamlessly integrating Tourmaline, Far Infrared, Neodymium Magnets, and Germanium technology into our jewelry, creating products that are both functional and fashionable.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Backed by scientific recognition, our designs are crafted to balance energy levels, enhance oxygen flow from muscles to the brain, improve REM sleep and boost blood circulation naturally.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At VitaTech Healing, we work closely with leading manufacturers to rigorously test and analyze every product. Our commitment ensures that each piece not only delivers tangible health benefits but also meets the highest standards of style and durability.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Driven by continuous innovation, we evolve our designs to reflect the latest advancements in holistic wellness and wearable technology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              To uphold our promise of excellence, VitaTech Healing has built a world-class customer service team dedicated to providing personalized care and ensuring complete customer satisfaction at every step.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 px-4 bg-[#1a1a2e]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Meet the Founder</h2>
            <div className="bg-[#0d0d20] rounded-2xl p-10 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#00ffaa] mb-2">Julylan Johnson</h3>
                  <p className="text-[#d4af37] font-medium mb-6">CEO/Founder</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/vitatechhealing/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#1a1a2e] rounded-full text-sm text-white hover:text-[#00ffaa] transition"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/vitatech-healing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#1a1a2e] rounded-full text-sm text-white hover:text-[#00ffaa] transition"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="flex-[2]">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Julylan Johnson is the visionary founder of VitaTech Healing, where technology and natural wellness converge to create life-changing solutions. With a background rooted in entrepreneurship and a passion for innovation, Julylan discovered this breakthrough wearable technology while seeking ways to help people live healthier, medication-free lives.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Guided by the belief that health should be both natural and accessible, he has dedicated himself to integrating cutting-edge advancements with holistic healing practices. His mission is to empower individuals of all ages—from athletes to seniors managing chronic pain—with natural minerals and frequency healing that restore balance, vitality, and long-term wellness.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Through VitaTech Healing, Julylan continues to pioneer a movement that not only supports pain relief and performance but also inspires communities to embrace a more active, fulfilling lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a2e] p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00ffaa] mb-4">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We continuously evolve our designs to reflect the latest advancements in holistic wellness and wearable technology, ensuring our products remain at the forefront of natural healing solutions.
                </p>
              </div>
              <div className="bg-[#1a1a2e] p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00ffaa] mb-4">Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every product undergoes rigorous testing and analysis through our partnerships with leading manufacturers, meeting the highest standards of style and durability.
                </p>
              </div>
              <div className="bg-[#1a1a2e] p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00ffaa] mb-4">Accessibility</h3>
                <p className="text-gray-300 leading-relaxed">
                  We believe health should be natural and accessible to everyone, transforming breakthrough technology into affordable, wearable wellness solutions.
                </p>
              </div>
              <div className="bg-[#1a1a2e] p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00ffaa] mb-4">Community</h3>
                <p className="text-gray-300 leading-relaxed">
                  True wellness extends beyond products—it's about people, connection, and creating healthier communities through education and shared experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0E182C] py-16 px-4 mt-20">
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