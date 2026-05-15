import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
  available: boolean;
}

const products: Product[] = [
  {
    id: "68070c2f025aa955dc4e994f",
    name: "1x Level Classic - Black",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bb7054af0d966a4efc3ee.jpeg",
    href: "/product-details/product/68070c2f025aa955dc4e994f",
    available: false,
  },
  {
    id: "680ac34b63f47ef6424dc47c",
    name: "1x Level Classic - Black / Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba94f8c188856fb69cef.jpeg",
    href: "/product-details/product/680ac34b63f47ef6424dc47c",
    available: false,
  },
  {
    id: "680ac1eac1149f741b19dcba",
    name: "1x Level Classic - Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba943ea396f114f67ac6.jpeg",
    href: "/product-details/product/680ac1eac1149f741b19dcba",
    available: false,
  },
  {
    id: "692515759c7302efbe65cbe0",
    name: "1x Level Classic - Rose Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6925155c8e9593cb57189e1f.jpeg",
    href: "/product-details/product/692515759c7302efbe65cbe0",
    available: false,
  },
  {
    id: "680ac263a557fc80b2a38ff0",
    name: "1x Level Classic - Silver",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba944af0d90f1befd78d.jpeg",
    href: "/product-details/product/680ac263a557fc80b2a38ff0",
    available: true,
  },
  {
    id: "680ac304a557fc42e9a3903a",
    name: "1x Level Classic - Silver / Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/680bba9493758cb654ce2bf4.jpeg",
    href: "/product-details/product/680ac304a557fc42e9a3903a",
    available: true,
  },
  {
    id: "69251722f24779eaa1a777e6",
    name: "1x Level Classic - Silver / Rose Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/692516a5e7b0944fa354a170.jpeg",
    href: "/product-details/product/69251722f24779eaa1a777e6",
    available: false,
  },
  {
    id: "692513db5e9766edf33fb377",
    name: "1x Level Classic - Silver / Black",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/692513c4e7b094dd095136e0.jpeg",
    href: "/product-details/product/692513db5e9766edf33fb377",
    available: true,
  },
  {
    id: "680ac3756d8a8552132c23e9",
    name: "1x Level Heart - Black",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924fc63a6fefe90a262aade.jpeg",
    href: "/product-details/product/680ac3756d8a8552132c23e9",
    available: true,
  },
  {
    id: "6924fcde9c7302580961b2a9",
    name: "1x Level Heart - Gold",
    price: "$199.99",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/555cPqlZh4po0jGHqsnl/media/6924fc634580ec56b69f6958.jpeg",
    href: "/product-details/product/6924fcde9c7302580961b2a9",
    available: false,
  },
];

export default function WomensPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">
              VitaTech Healing
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-300 hover:text-white transition">
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition flex items-center gap-1">
                  Shop
                  <span></span>
                </button>
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition">
                More
              </a>
            </div>
            <button className="p-2 text-gray-300 hover:text-white transition">
              <span className="text-xl">🛒</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Filter:</span>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition flex items-center gap-2">
                Availability
                <span>▾</span>
              </button>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition flex items-center gap-2">
                Price
                <span>▾</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Sort:</span>
              <select className="bg-gray-800 text-white px-4 py-2 rounded text-sm border border-gray-700 focus:outline-none focus:border-yellow-500">
                <option>Featured</option>
                <option>Date, Old to New</option>
                <option>Date, New to Old</option>
                <option>Level, Low - High</option>
                <option>Level, High - Low</option>
                <option>Price, Low to High</option>
                <option>Price, High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Women's Collection</h1>
        <p className="text-gray-400 mb-8">58 Products</p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group block bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition"
            >
              <div className="relative aspect-square bg-gray-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                {!product.available && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-yellow-500 font-medium">
                      Currently unavailable
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-white mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm">1x Level</p>
                <p className="text-yellow-500 font-bold mt-2">
                  {product.available ? product.price : "—"}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            disabled
            className="px-4 py-2 bg-gray-800 text-gray-400 rounded cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-gray-400">
            Page 1 / 6
          </span>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition">
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Facebook
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Ambassador
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">CUSTOMER CARE</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-center mt-12">
            Copyright 2023. Vitatech Healing LLC. Hollywood, FL. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}