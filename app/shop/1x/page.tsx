import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  available: boolean;
}

const products: Product[] = [
  {
    id: "680bb7054af0d966a4efc3ee",
    name: "1x Level Classic - Black",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bb7054af0d966a4efc3ee.jpeg",
    available: false,
  },
  {
    id: "680bba94f8c188856fb69cef",
    name: "1x Level Classic - Black / Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba94f8c188856fb69cef.jpeg",
    available: false,
  },
  {
    id: "680bba943ea396f114f67ac6",
    name: "1x Level Classic - Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba943ea396f114f67ac6.jpeg",
    available: false,
  },
  {
    id: "6925155c8e9593cb57189e1f",
    name: "1x Level Classic - Rose Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6925155c8e9593cb57189e1f.jpeg",
    available: false,
  },
  {
    id: "680bba944af0d90f1befd78d",
    name: "1x Level Classic - Silver",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba944af0d90f1befd78d.jpeg",
    available: true,
  },
  {
    id: "680bba9493758cb654ce2bf4",
    name: "1x Level Classic - Silver / Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba9493758cb654ce2bf4.jpeg",
    available: true,
  },
  {
    id: "692516a5e7b0944fa354a170",
    name: "1x Level Classic - Silver / Rose Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/692516a5e7b0944fa354a170.jpeg",
    available: false,
  },
  {
    id: "692513c4e7b094dd095136e0",
    name: "1x Level Classic - Silver / Black",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/692513c4e7b094dd095136e0.jpeg",
    available: true,
  },
];

export default function Shop1xPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Hero */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bdbadf72c1c00befbfd27.jpeg"
          alt="VitaTech 1x Level"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-5xl font-bold mb-2">
            1x Power Level <span className="text-[#00ffaa]">Collection</span>
          </h1>
          <p className="text-gray-300">Entry-level wellness support — Tourmaline, Far Infrared, Germanium & Neodymium Magnets</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop/mens" className="hover:text-white transition">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-white">1x Level</span>
        </nav>

        {/* Level Info Banner */}
        <div className="bg-[#1a1a2e] rounded-xl p-8 mb-12 border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">1x Power Level — Your Foundation</h2>
              <p className="text-gray-400 max-w-xl">
                Our 1x Level bracelets are the perfect entry point into VitaTech wellness technology.
                All four technologies working in harmony to support circulation, balance, and everyday vitality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Tourmaline', 'Far Infrared', 'Germanium', 'Neodymium Magnets'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-[#00ffaa]/10 border border-[#00ffaa]/30 rounded-full text-sm text-[#00ffaa]">
                  ✓ {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-[#1a1a2e] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00ffaa]/50 transition"
            >
              <div className="relative aspect-square bg-[#0d0d20]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                {!product.available && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-yellow-500 font-medium bg-[#0a0a1a] px-3 py-1 rounded-full text-sm">
                      Currently unavailable
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-white mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3">1x Power Level</p>
                <p className="text-[#00ffaa] font-bold text-lg">
                  {product.available ? product.price : "—"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Tech Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes 1x Level Different?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-[#00ffaa] mb-3">Same Core Technology</h3>
              <p className="text-gray-400">
                Every VitaTech bracelet — regardless of power level — uses the same four technologies:
                Tourmaline, Far Infrared, Germanium, and Neodymium Magnets. The difference is the
                concentration and precision of placement.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-[#00ffaa] mb-3">Perfect for Newcomers</h3>
              <p className="text-gray-400">
                Start your wellness journey with 1x. Many customers begin here and upgrade after
                experiencing the benefits firsthand. There's no pressure to start at the highest level.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-[#00ffaa] mb-3">Upgrade Anytime</h3>
              <p className="text-gray-400">
                Changed your mind? Use our <Link href="/upgrade" className="text-[#d4af37] hover:underline">upgrade program</Link> to
                exchange your 1x for a 2x, 3x, or 6x — and only pay the difference.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-[#00ffaa] mb-3">30-Day Guarantee</h3>
              <p className="text-gray-400">
                Not satisfied? Return within 30 days for a full refund. We stand behind every product
                with our <Link href="/warranty" className="text-[#d4af37] hover:underline">Limited Lifetime Warranty</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}