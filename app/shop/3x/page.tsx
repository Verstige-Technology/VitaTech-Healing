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
    id: "6924e2c3a6fefe10ea530600",
    name: "3x Level Signature - Black",
    price: "$399.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530600.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530601",
    name: "3x Level Signature - Gold",
    price: "$399.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530601.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530602",
    name: "3x Level Signature - Silver",
    price: "$399.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530602.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530603",
    name: "3x Level Signature - Rose Gold",
    price: "$399.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530603.jpeg",
    available: false,
  },
  {
    id: "6924e2c3a6fefe10ea530604",
    name: "3x Level Signature - Black / Gold",
    price: "$399.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530604.jpeg",
    available: true,
  },
  {
    id: "6924e2c3a6fefe10ea530605",
    name: "3x Level Signature - Silver / Gold",
    price: "$399.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924e2c3a6fefe10ea530605.jpeg",
    available: true,
  },
];

export default function Shop3xPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bdadabd1f167b30040ee8.png"
          alt="VitaTech 3x Level"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-5xl font-bold mb-2">
            3x Power Level <span className="text-[#00ffaa]">Collection</span>
          </h1>
          <p className="text-gray-300">Advanced recovery — triple the tourmaline, maximum far infrared penetration</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop/mens" className="hover:text-white transition">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-white">3x Level</span>
        </nav>

        <div className="bg-[#1a1a2e] rounded-xl p-8 mb-12 border border-[#00ffaa]/30">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">3x Power Level — Advanced Recovery</h2>
              <p className="text-gray-400 max-w-xl">
                Triple the tourmaline concentration and maximum far infrared output. Built for serious athletes,
                chronic pain sufferers, and anyone who needs the strongest non-prescription support available.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Tourmaline (3x)', 'Far Infrared (Max)', 'Germanium (Enhanced)', 'Neodymium Magnets'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-[#00ffaa]/10 border border-[#00ffaa]/30 rounded-full text-sm text-[#00ffaa]">
                  ✓ {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

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
                <p className="text-gray-500 text-sm mb-3">3x Power Level</p>
                <p className="text-[#00ffaa] font-bold text-lg">
                  {product.available ? product.price : "—"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#1a1a2e] rounded-xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center">The Most Powerful VitaTech bracelet</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            The 3x Level is our most powerful standard bracelet. If you want the absolute maximum concentration
            we offer, explore the <Link href="/shop/6x" className="text-[#d4af37] hover:underline">6x Level</Link>.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/upgrade" className="px-6 py-3 bg-[#00ffaa] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00dda0] transition">
              Upgrade to 3x
            </Link>
            <Link href="/warranty" className="px-6 py-3 border border-gray-600 text-gray-300 font-bold rounded-lg hover:border-white transition">
              View Warranty
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}