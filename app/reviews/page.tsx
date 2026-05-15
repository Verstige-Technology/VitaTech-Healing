'use client';

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function ReviewsPage() {
  const testimonials = [
    {
      title: 'A Skeptic Turned Believer',
      text: 'I was very skeptical about these kinds of products, but after trying one of VitaTech Healing\'s bracelets, I was blown away. When I tested my balance with and without the bracelet, the difference was undeniable—I was incredibly steady while wearing it and noticeably off-balance without it. I even had the test repeated several times to be sure, and the results were consistent.\n\nOn top of that, my first two nights of sleep with the bracelet were some of the best I\'ve had in years. I woke up feeling truly refreshed. As someone who doesn\'t usually believe in things like this, I\'m genuinely impressed and would recommend giving it a try.',
      author: '- Nick Labo'
    },
    {
      title: 'As someone who battles extreme fibromyalgia...',
      text: '...I am no stranger to constant pain and balance issues, often relying on a scooter for mobility. When I approached the booth and held onto the bracelet, something extraordinary happened. The excruciating pain in my right foot vanished, and for the first time in a long while, I felt confident enough to attempt walking a short distance. To my amazement, I was able to walk a block down and back without experiencing any pain or balance problems.',
      author: '- Steve Treague'
    },
    {
      title: 'After years of athletics...',
      text: '...my knees and joints definitely gave me a daily reminder of the years of running and jumping around. I worried how long I would be mobile, able move around, or even keep up with my kids… I\'m a fan of facts and proof. And the facts are I am living proof, that a pain free life is possible! Due to my bracelet not only am I pain free, but am now in the best shape of my life, due to my very active gym life. My only complaint is, that I wish I would\'ve found it sooner.',
      author: '- Elijah Frazier'
    }
  ];

  const locations = [
    {
      name: 'Miami: CityPlace Doral Store',
      description: 'Experience VitaTech Healing at our new kiosk in City Place Doral! Explore our collection of energy-infused wellness jewelry designed to naturally boost circulation, reduce pain, improve sleep, and protect against EMF exposure.'
    },
    {
      name: 'Orlando: Downtown Farmers Market',
      description: 'Visit VitaTech Healing every Sunday at the Downtown Orlando Farmers Market! Discover our full line of energy-infused wellness jewelry and learn how natural healing technologies like tourmaline, far infrared, and magnetic therapy support your health.'
    },
    {
      name: 'Lake Mary: Farmers Market',
      description: 'Join us every Saturday at the Lake Mary Farmers Market and experience the VitaTech Healing difference! Our booth features innovative wellness jewelry to enhance circulation, reduce pain, improve sleep, and protect against EMF exposure.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0C0C21] to-[#188bf6] py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">TESTIMONIALS</h1>
            <p className="text-xl text-gray-200">What others are saying</p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white text-gray-900 p-10 rounded-2xl relative shadow-xl">
                  <span className="text-8xl text-[#00ffaa] absolute top-4 left-6 leading-none">"</span>
                  <h3 className="text-xl font-bold text-[#0E182C] mb-4 pt-8">{t.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">{t.text}</p>
                  <p className="font-bold text-[#188bf6]">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a1a2e] p-10 rounded-2xl border-l-4 border-[#00ffaa] border border-gray-800">
              <p className="text-2xl font-bold text-white mb-4">"A life changing boost!"</p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                "I bought a 1X Power Bracelet for my 64year old uncle, and the difference it has made in his mobility has been truly incredible."
              </p>
              <p className="font-bold text-[#00ffaa]">- Lou Soto</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#FB6542] to-[#FFBB00]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Experience the VitaTech Difference</h2>
            <p className="text-xl text-white/90 mb-6">
              Join thousands of satisfied customers who have transformed their lives with natural wellness technology.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-[#0C0C21] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Shop Now
            </Link>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Rooted in Community, Driven by Wellness</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              At VitaTech Healing, we believe true wellness extends beyond products—it's about people, connection, and creating healthier communities. You'll often find us at local markets, wellness fairs, and community events, sharing knowledge and helping others discover natural solutions. Our jewelry isn't just for pain relief—it's a statement of living actively, investing in health, and supporting a lifestyle where wellness and community thrive together.
            </p>
            
            <h3 className="text-2xl font-bold text-[#00ffaa] mb-6">Visit Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((loc, i) => (
                <div key={i} className="bg-gray-800/50 p-6 rounded-xl">
                  <strong className="text-white block mb-3">{loc.name}</strong>
                  <p className="text-gray-400 text-sm">{loc.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center italic text-gray-400 mt-10">
              "Wellness is more than an individual choice—it's a collective movement. We're here to inspire, educate, and walk alongside our community in living healthier, fuller lives."
            </p>
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