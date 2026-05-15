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
    id: "6924e2c3a6fefe10ea530700",
    name: "6x Level Elite - Black",
    price: "$649.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530700.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530701",
    name: "6x Level Elite - Gold",
    price: "$649.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530701.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530702",
    name: "6x Level Elite - Silver",
    price: "$649.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530702.jpeg",
    available: false,
  },
  {
    id: "6924e2c3a6fefe10ea530703",
    name: "6x Level Elite - Rose Gold",
    price: "$649.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530703.jpeg",
    available: true,
  },
];

export default function Shop6xPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bdbadf72c1c00befbfd27.jpeg"
          alt="VitaTech 6x Level"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[#d4af37] text-sm tracking-widest uppercase mb-2">Maximum Potency</p>
          <h1 className="text-5xl font-bold mb-2">
            6x Power Level <span className="text-[#d4af37]">Collection</span>
          </h1>
          <p className="text-gray-300">Six times the tourmaline — our most powerful wellness technology ever created</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop/mens" className="hover:text-white transition">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-white">6x Level</span>
        </nav>

        {/* Premium Banner */}
        <div className="bg-gradient-to-r from-[#d4af37]/10 via-[#0a0a1a] to-[#00ffaa]/10 rounded-xl p-8 mb-12 border border-[#d4af37]/30">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-[#d4af37] text-sm tracking-widest uppercase mb-2">Maximum Potency</p>
              <h2 className="text-2xl font-bold mb-2">6x Power Level — Elite Performance</h2>
              <p className="text-gray-400 max-w-xl">
                Six times the tourmaline concentration of our 1x. The ultimate in wellness technology —
                engineered for professional athletes, chronic conditions, and those who accept nothing but the best.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Tourmaline (6x)', 'Far Infrared (Max+)', 'Germanium (Elite)', 'Neodymium Magnets (x2)'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-sm text-[#d4af37]">
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
              className="group bg-[#1a1a2e] rounded-xl overflow-hidden border border-gray-800 hover:border-[#d4af37]/50 transition"
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
                <p className="text-gray-500 text-sm mb-3">6x Power Level</p>
                <p className="text-[#d4af37] font-bold text-lg">
                  {product.available ? product.price : "—"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6x vs others comparison */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why 6x Is Different</h2>
          <div className="bg-[#1a1a2e] rounded-xl p-8 border border-[#d4af37]/30">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { level: '1x', tourmaline: '1x', ideal: 'Newcomers' },
                { level: '2x', tourmaline: '2x', ideal: 'Active lifestyle' },
                { level: '3x', tourmaline: '3x', ideal: 'Advanced recovery' },
                { level: '6x', tourmaline: '6x', ideal: 'Maximum performance' },
              ].map((item) => (
                <div key={item.level} className={item.level === '6x' ? 'text-[#d4af37]' : 'text-gray-400'}>
                  <div className="text-3xl font-bold mb-1">{item.level}</div>
                  <div className="text-sm">{item.tourmaline} tourmaline</div>
                  <div className="text-xs mt-1 opacity-60">For: {item.ideal}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/upgrade" className="text-[#d4af37] hover:underline">
              Ready to upgrade from a lower level? View upgrade options →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}