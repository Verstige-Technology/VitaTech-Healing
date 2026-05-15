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
    id: "692490bea6fefec2dc3fd546",
    name: "2x Level Butterfly - Silver / Black",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/692490bea6fefec2dc3fd546.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea53051f",
    name: "2x Level Diamond - Black",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea53051f.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530520",
    name: "2x Level Diamond - Silver",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530520.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530521",
    name: "2x Level Diamond - Gold",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530521.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530522",
    name: "2x Level Diamond - Rose Gold",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530522.jpeg",
    available: false,
  },
  {
    id: "6924e2c3a6fefe10ea530523",
    name: "2x Level Butterfly - Gold",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530523.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530524",
    name: "2x Level Butterfly - Rose Gold",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530524.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530525",
    name: "2x Level Butterfly - Silver / Gold",
    price: "$299.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530525.jpeg",
    available: true,
  },
];

export default function Shop2xPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Hero */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bd96ef72c1c6b7bfbfa2f.png"
          alt="VitaTech 2x Level"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-5xl font-bold mb-2">
            2x Power Level <span className="text-[#d4af37]">Collection</span>
          </h1>
          <p className="text-gray-300">Enhanced performance — double the tourmaline concentration of 1x</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop/mens" className="hover:text-white transition">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-white">2x Level</span>
        </nav>

        {/* Level Info Banner */}
        <div className="bg-[#1a1a2e] rounded-xl p-8 mb-12 border border-[#d4af37]/30">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">2x Power Level — Enhanced Performance</h2>
              <p className="text-gray-400 max-w-xl">
                2x delivers double the tourmaline concentration of our 1x level. More negative ions,
                more far infrared energy, and stronger support for athletes and active individuals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Tourmaline (2x)', 'Far Infrared', 'Germanium', 'Neodymium Magnets'].map((tech) => (
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
                <p className="text-gray-500 text-sm mb-3">2x Power Level</p>
                <p className="text-[#d4af37] font-bold text-lg">
                  {product.available ? product.price : "—"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose 2x Over 1x?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">2x Tourmaline</h3>
              <p className="text-gray-400 text-sm">
                Double the negative ion emission for faster recovery and stronger energy support throughout the day.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800 text-center">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold text-white mb-2">For Active Lifestyles</h3>
              <p className="text-gray-400 text-sm">
                Designed for athletes, fitness enthusiasts, and anyone with an active daily routine who needs more support.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800 text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-2">Easy Upgrade Path</h3>
              <p className="text-gray-400 text-sm">
                Already own a 1x? <Link href="/upgrade" className="text-[#d4af37] hover:underline">Upgrade to 2x</Link> and only pay the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}