export interface ProductVariant {
  id: string;
  name: string;
  color: string;
  available: boolean;
  image: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  level: "1x" | "2x" | "3x" | "6x";
  gender: "mens" | "womens" | "unisex";
  price: number;
  description: string;
  shortDescription: string;
  specs: ProductSpec[];
  images: string[];
  variants: ProductVariant[];
  badge?: string;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  // MEN'S PRODUCTS (10)
  {
    id: "mens-titanium-band-1x",
    name: "Men's Titanium Heal Ring 1X",
    level: "1x",
    gender: "mens",
    price: 79.99,
    description: "Our flagship men's wellness ring crafted from premium titanium. The 1X power level provides foundational support for energy, recovery, and daily performance. Lightweight and comfortable for all-day wear.",
    shortDescription: "Premium titanium wellness ring for daily energy and recovery",
    specs: [
      { label: "Material", value: "Medical-Grade Titanium" },
      { label: "Power Level", value: "1X (Foundational)" },
      { label: "Width", value: "8mm" },
      { label: "Weight", value: "12g" },
      { label: "Sizes", value: "7-13" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b3/mens-titanium-ring-1x-1.jpg",
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b3/mens-titanium-ring-1x-2.jpg",
    ],
    variants: [
      { id: "mtr1x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b3/mens-titanium-ring-1x-silver.jpg" },
      { id: "mtr1x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b3/mens-titanium-ring-1x-black.jpg" },
      { id: "mtr1x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b3/mens-titanium-ring-1x-gold.jpg" },
    ],
    badge: "Bestseller",
    rating: 4.8,
    reviewCount: 342,
  },
  {
    id: "mens-titanium-band-2x",
    name: "Men's Titanium Heal Ring 2X",
    level: "2x",
    gender: "mens",
    price: 119.99,
    description: "Enhanced with 2X power for improved energy flow and faster recovery. Perfect for active individuals seeking stronger wellness support throughout their day.",
    shortDescription: "Enhanced 2X titanium ring for active wellness support",
    specs: [
      { label: "Material", value: "Medical-Grade Titanium" },
      { label: "Power Level", value: "2X (Enhanced)" },
      { label: "Width", value: "8mm" },
      { label: "Weight", value: "12g" },
      { label: "Sizes", value: "7-13" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b4/mens-titanium-ring-2x-1.jpg",
    ],
    variants: [
      { id: "mtr2x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b4/mens-titanium-ring-2x-silver.jpg" },
      { id: "mtr2x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b4/mens-titanium-ring-2x-black.jpg" },
      { id: "mtr2x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b4/mens-titanium-ring-2x-gold.jpg" },
    ],
    badge: "Popular",
    rating: 4.9,
    reviewCount: 218,
  },
  {
    id: "mens-titanium-band-3x",
    name: "Men's Titanium Heal Ring 3X",
    level: "3x",
    gender: "mens",
    price: 159.99,
    description: "Our most popular performance ring with 3X power level. Designed for athletes and professionals who demand maximum energy, focus, and recovery support.",
    shortDescription: "3X power ring for peak athletic performance",
    specs: [
      { label: "Material", value: "Medical-Grade Titanium" },
      { label: "Power Level", value: "3X (Performance)" },
      { label: "Width", value: "8mm" },
      { label: "Weight", value: "12g" },
      { label: "Sizes", value: "7-13" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b5/mens-titanium-ring-3x-1.jpg",
    ],
    variants: [
      { id: "mtr3x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b5/mens-titanium-ring-3x-silver.jpg" },
      { id: "mtr3x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b5/mens-titanium-ring-3x-black.jpg" },
      { id: "mtr3x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b5/mens-titanium-ring-3x-gold.jpg" },
    ],
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 456,
  },
  {
    id: "mens-titanium-band-6x",
    name: "Men's Titanium Heal Ring 6X",
    level: "6x",
    gender: "mens",
    price: 249.99,
    description: "The ultimate wellness ring with maximum 6X power. For those who refuse to compromise on their performance and want the strongest energy support available.",
    shortDescription: "Maximum 6X power ring for ultimate performance",
    specs: [
      { label: "Material", value: "Medical-Grade Titanium" },
      { label: "Power Level", value: "6X (Maximum)" },
      { label: "Width", value: "8mm" },
      { label: "Weight", value: "12g" },
      { label: "Sizes", value: "7-13" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b6/mens-titanium-ring-6x-1.jpg",
    ],
    variants: [
      { id: "mtr6x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b6/mens-titanium-ring-6x-silver.jpg" },
      { id: "mtr6x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b6/mens-titanium-ring-6x-black.jpg" },
      { id: "mtr6x-gold", name: "Gold", color: "#d4af37", available: false, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2b6/mens-titanium-ring-6x-gold.jpg" },
    ],
    badge: "Premium",
    rating: 4.9,
    reviewCount: 127,
  },
  {
    id: "mens-cobra-bracelet-1x",
    name: "Men's Cobra Heal Bracelet 1X",
    level: "1x",
    gender: "mens",
    price: 89.99,
    description: "Stylish cobra weave design with integrated wellness technology. Provides foundational energy support while making a bold fashion statement.",
    shortDescription: "Cobra weave bracelet with foundational wellness power",
    specs: [
      { label: "Material", value: "Stainless Steel + Silicone" },
      { label: "Power Level", value: "1X (Foundational)" },
      { label: "Width", value: "12mm" },
      { label: "Length", value: "8.5 inches" },
      { label: "Clasp", value: "Magnetic" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c1/mens-cobra-bracelet-1x-1.jpg",
    ],
    variants: [
      { id: "mcb1x-black", name: "Black/Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c1/mens-cobra-bracelet-1x-black.jpg" },
      { id: "mcb1x-silver", name: "Silver/Black", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c1/mens-cobra-bracelet-1x-silver.jpg" },
      { id: "mcb1x-gold", name: "Gold/Black", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c1/mens-cobra-bracelet-1x-gold.jpg" },
    ],
    rating: 4.7,
    reviewCount: 189,
  },
  {
    id: "mens-cobra-bracelet-2x",
    name: "Men's Cobra Heal Bracelet 2X",
    level: "2x",
    gender: "mens",
    price: 129.99,
    description: "Enhanced cobra bracelet with 2X power output. Perfect for daily wear with stronger energy benefits and premium build quality.",
    shortDescription: "Enhanced 2X cobra bracelet for active lifestyles",
    specs: [
      { label: "Material", value: "Stainless Steel + Silicone" },
      { label: "Power Level", value: "2X (Enhanced)" },
      { label: "Width", value: "12mm" },
      { label: "Length", value: "8.5 inches" },
      { label: "Clasp", value: "Magnetic" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c2/mens-cobra-bracelet-2x-1.jpg",
    ],
    variants: [
      { id: "mcb2x-black", name: "Black/Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c2/mens-cobra-bracelet-2x-black.jpg" },
      { id: "mcb2x-silver", name: "Silver/Black", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c2/mens-cobra-bracelet-2x-silver.jpg" },
      { id: "mcb2x-gold", name: "Gold/Black", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c2/mens-cobra-bracelet-2x-gold.jpg" },
    ],
    rating: 4.8,
    reviewCount: 145,
  },
  {
    id: "mens-cobra-bracelet-3x",
    name: "Men's Cobra Heal Bracelet 3X",
    level: "3x",
    gender: "mens",
    price: 169.99,
    description: "High-performance cobra bracelet with 3X power. Features premium magnetic clasp and enhanced healing frequencies for serious wellness optimization.",
    shortDescription: "3X cobra bracelet for peak performance",
    specs: [
      { label: "Material", value: "Stainless Steel + Silicone" },
      { label: "Power Level", value: "3X (Performance)" },
      { label: "Width", value: "12mm" },
      { label: "Length", value: "8.5 inches" },
      { label: "Clasp", value: "Premium Magnetic" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c3/mens-cobra-bracelet-3x-1.jpg",
    ],
    variants: [
      { id: "mcb3x-black", name: "Black/Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c3/mens-cobra-bracelet-3x-black.jpg" },
      { id: "mcb3x-silver", name: "Silver/Black", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c3/mens-cobra-bracelet-3x-silver.jpg" },
      { id: "mcb3x-gold", name: "Gold/Black", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c3/mens-cobra-bracelet-3x-gold.jpg" },
    ],
    badge: "Popular",
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "mens-cobra-bracelet-6x",
    name: "Men's Cobra Heal Bracelet 6X",
    level: "6x",
    gender: "mens",
    price: 269.99,
    description: "Maximum power cobra bracelet with 6X output. The ultimate statement piece for those who demand the strongest wellness technology available.",
    shortDescription: "6X maximum power cobra bracelet",
    specs: [
      { label: "Material", value: "Stainless Steel + Silicone" },
      { label: "Power Level", value: "6X (Maximum)" },
      { label: "Width", value: "12mm" },
      { label: "Length", value: "8.5 inches" },
      { label: "Clasp", value: "Premium Magnetic" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c4/mens-cobra-bracelet-6x-1.jpg",
    ],
    variants: [
      { id: "mcb6x-black", name: "Black/Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c4/mens-cobra-bracelet-6x-black.jpg" },
      { id: "mcb6x-silver", name: "Silver/Black", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c4/mens-cobra-bracelet-6x-silver.jpg" },
      { id: "mcb6x-gold", name: "Gold/Black", color: "#d4af37", available: false, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2c4/mens-cobra-bracelet-6x-gold.jpg" },
    ],
    badge: "Limited",
    rating: 5.0,
    reviewCount: 67,
  },
  {
    id: "mens-guardian-pendant-1x",
    name: "Men's Guardian Heal Pendant 1X",
    level: "1x",
    gender: "mens",
    price: 99.99,
    description: "Elegant guardian pendant with foundational wellness frequencies. Crafted from premium stainless steel with a sleek, masculine design.",
    shortDescription: "Guardian pendant with foundational wellness power",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Power Level", value: "1X (Foundational)" },
      { label: "Diameter", value: "32mm" },
      { label: "Chain Length", value: "24 inches" },
      { label: "Finish", value: "Polished" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d1/mens-guardian-pendant-1x-1.jpg",
    ],
    variants: [
      { id: "mgp1x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d1/mens-guardian-pendant-1x-silver.jpg" },
      { id: "mgp1x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d1/mens-guardian-pendant-1x-black.jpg" },
      { id: "mgp1x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d1/mens-guardian-pendant-1x-gold.jpg" },
    ],
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: "mens-guardian-pendant-2x",
    name: "Men's Guardian Heal Pendant 2X",
    level: "2x",
    gender: "mens",
    price: 139.99,
    description: "Enhanced guardian pendant with 2X power for improved energy protection and daily wellness support. Premium build with superior finishing.",
    shortDescription: "2X enhanced guardian pendant for protection",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Power Level", value: "2X (Enhanced)" },
      { label: "Diameter", value: "32mm" },
      { label: "Chain Length", value: "24 inches" },
      { label: "Finish", value: "Polished" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d2/mens-guardian-pendant-2x-1.jpg",
    ],
    variants: [
      { id: "mgp2x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d2/mens-guardian-pendant-2x-silver.jpg" },
      { id: "mgp2x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d2/mens-guardian-pendant-2x-black.jpg" },
      { id: "mgp2x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2d2/mens-guardian-pendant-2x-gold.jpg" },
    ],
    rating: 4.7,
    reviewCount: 76,
  },

  // WOMEN'S PRODUCTS (10)
  {
    id: "womens-luna-ring-1x",
    name: "Women's Luna Heal Ring 1X",
    level: "1x",
    gender: "womens",
    price: 69.99,
    description: "Elegant women's wellness ring with delicate luna-inspired design. Provides foundational energy support with a feminine, lightweight aesthetic.",
    shortDescription: "Delicate luna ring with foundational wellness power",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Stainless Steel" },
      { label: "Power Level", value: "1X (Foundational)" },
      { label: "Width", value: "6mm" },
      { label: "Weight", value: "8g" },
      { label: "Sizes", value: "5-10" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e1/womens-luna-ring-1x-1.jpg",
    ],
    variants: [
      { id: "wlr1x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e1/womens-luna-ring-1x-rose.jpg" },
      { id: "wlr1x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e1/womens-luna-ring-1x-silver.jpg" },
      { id: "wlr1x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e1/womens-luna-ring-1x-gold.jpg" },
    ],
    badge: "New",
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: "womens-luna-ring-2x",
    name: "Women's Luna Heal Ring 2X",
    level: "2x",
    gender: "womens",
    price: 109.99,
    description: "Enhanced luna ring with 2X power for better energy flow and wellness support. Still delicate and feminine but with stronger benefits.",
    shortDescription: "2X enhanced luna ring for active women",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Stainless Steel" },
      { label: "Power Level", value: "2X (Enhanced)" },
      { label: "Width", value: "6mm" },
      { label: "Weight", value: "8g" },
      { label: "Sizes", value: "5-10" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e2/womens-luna-ring-2x-1.jpg",
    ],
    variants: [
      { id: "wlr2x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e2/womens-luna-ring-2x-rose.jpg" },
      { id: "wlr2x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e2/womens-luna-ring-2x-silver.jpg" },
      { id: "wlr2x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e2/womens-luna-ring-2x-gold.jpg" },
    ],
    rating: 4.9,
    reviewCount: 112,
  },
  {
    id: "womens-luna-ring-3x",
    name: "Women's Luna Heal Ring 3X",
    level: "3x",
    gender: "womens",
    price: 149.99,
    description: "High-performance luna ring with 3X power. Perfect for active women who want stronger wellness support without sacrificing elegance.",
    shortDescription: "3X performance luna ring for active lifestyles",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Stainless Steel" },
      { label: "Power Level", value: "3X (Performance)" },
      { label: "Width", value: "6mm" },
      { label: "Weight", value: "8g" },
      { label: "Sizes", value: "5-10" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e3/womens-luna-ring-3x-1.jpg",
    ],
    variants: [
      { id: "wlr3x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e3/womens-luna-ring-3x-rose.jpg" },
      { id: "wlr3x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e3/womens-luna-ring-3x-silver.jpg" },
      { id: "wlr3x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e3/womens-luna-ring-3x-gold.jpg" },
    ],
    badge: "Popular",
    rating: 4.9,
    reviewCount: 198,
  },
  {
    id: "womens-luna-ring-6x",
    name: "Women's Luna Heal Ring 6X",
    level: "6x",
    gender: "womens",
    price: 229.99,
    description: "Maximum power luna ring with 6X output. The ultimate wellness ring for women who demand the strongest energy support available.",
    shortDescription: "6X maximum power luna ring",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Stainless Steel" },
      { label: "Power Level", value: "6X (Maximum)" },
      { label: "Width", value: "6mm" },
      { label: "Weight", value: "8g" },
      { label: "Sizes", value: "5-10" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e4/womens-luna-ring-6x-1.jpg",
    ],
    variants: [
      { id: "wlr6x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e4/womens-luna-ring-6x-rose.jpg" },
      { id: "wlr6x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e4/womens-luna-ring-6x-silver.jpg" },
      { id: "wlr6x-gold", name: "Gold", color: "#d4af37", available: false, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2e4/womens-luna-ring-6x-gold.jpg" },
    ],
    badge: "Limited",
    rating: 5.0,
    reviewCount: 54,
  },
  {
    id: "womens-bracelet-1x",
    name: "Women's Aura Heal Bracelet 1X",
    level: "1x",
    gender: "womens",
    price: 79.99,
    description: "Delicate aura bracelet with elegant feminine design. Features foundational wellness frequencies perfect for everyday elegance and health support.",
    shortDescription: "Elegant aura bracelet with foundational power",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Steel" },
      { label: "Power Level", value: "1X (Foundational)" },
      { label: "Width", value: "4mm" },
      { label: "Length", value: "7 inches" },
      { label: "Clasp", value: "Lobster Claw" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f1/womens-aura-bracelet-1x-1.jpg",
    ],
    variants: [
      { id: "wab1x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f1/womens-aura-bracelet-1x-rose.jpg" },
      { id: "wab1x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f1/womens-aura-bracelet-1x-silver.jpg" },
      { id: "wab1x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f1/womens-aura-bracelet-1x-gold.jpg" },
    ],
    rating: 4.7,
    reviewCount: 234,
  },
  {
    id: "womens-bracelet-2x",
    name: "Women's Aura Heal Bracelet 2X",
    level: "2x",
    gender: "womens",
    price: 119.99,
    description: "Enhanced aura bracelet with 2X power. Combines elegant styling with stronger wellness benefits for the active modern woman.",
    shortDescription: "2X enhanced aura bracelet for active women",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Steel" },
      { label: "Power Level", value: "2X (Enhanced)" },
      { label: "Width", value: "4mm" },
      { label: "Length", value: "7 inches" },
      { label: "Clasp", value: "Lobster Claw" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f2/womens-aura-bracelet-2x-1.jpg",
    ],
    variants: [
      { id: "wab2x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f2/womens-aura-bracelet-2x-rose.jpg" },
      { id: "wab2x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f2/womens-aura-bracelet-2x-silver.jpg" },
      { id: "wab2x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f2/womens-aura-bracelet-2x-gold.jpg" },
    ],
    rating: 4.8,
    reviewCount: 167,
  },
  {
    id: "womens-bracelet-3x",
    name: "Women's Aura Heal Bracelet 3X",
    level: "3x",
    gender: "womens",
    price: 159.99,
    description: "High-performance aura bracelet with 3X power. Designed for women who want both luxury style and maximum wellness support.",
    shortDescription: "3X performance aura bracelet",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Steel" },
      { label: "Power Level", value: "3X (Performance)" },
      { label: "Width", value: "4mm" },
      { label: "Length", value: "7 inches" },
      { label: "Clasp", value: "Premium Lobster Claw" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f3/womens-aura-bracelet-3x-1.jpg",
    ],
    variants: [
      { id: "wab3x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f3/womens-aura-bracelet-3x-rose.jpg" },
      { id: "wab3x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f3/womens-aura-bracelet-3x-silver.jpg" },
      { id: "wab3x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f3/womens-aura-bracelet-3x-gold.jpg" },
    ],
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 289,
  },
  {
    id: "womens-bracelet-6x",
    name: "Women's Aura Heal Bracelet 6X",
    level: "6x",
    gender: "womens",
    price: 249.99,
    description: "Maximum power aura bracelet with 6X output. The most powerful women's wellness bracelet for those who want the ultimate in energy support.",
    shortDescription: "6X maximum power aura bracelet",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Steel" },
      { label: "Power Level", value: "6X (Maximum)" },
      { label: "Width", value: "4mm" },
      { label: "Length", value: "7 inches" },
      { label: "Clasp", value: "Premium Lobster Claw" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f4/womens-aura-bracelet-6x-1.jpg",
    ],
    variants: [
      { id: "wab6x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f4/womens-aura-bracelet-6x-rose.jpg" },
      { id: "wab6x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f4/womens-aura-bracelet-6x-silver.jpg" },
      { id: "wab6x-gold", name: "Gold", color: "#d4af37", available: false, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2f4/womens-aura-bracelet-6x-gold.jpg" },
    ],
    badge: "Premium",
    rating: 5.0,
    reviewCount: 89,
  },
  {
    id: "womens-pendant-1x",
    name: "Women's Grace Heal Pendant 1X",
    level: "1x",
    gender: "womens",
    price: 89.99,
    description: "Exquisite grace pendant with delicate floral-inspired design. Provides foundational wellness support with timeless feminine elegance.",
    shortDescription: "Grace pendant with foundational wellness power",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Steel" },
      { label: "Power Level", value: "1X (Foundational)" },
      { label: "Diameter", value: "28mm" },
      { label: "Chain Length", value: "18-20 inches" },
      { label: "Finish", value: "Polished" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g1/womens-grace-pendant-1x-1.jpg",
    ],
    variants: [
      { id: "wgp1x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g1/womens-grace-pendant-1x-rose.jpg" },
      { id: "wgp1x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g1/womens-grace-pendant-1x-silver.jpg" },
      { id: "wgp1x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g1/womens-grace-pendant-1x-gold.jpg" },
    ],
    badge: "New",
    rating: 4.7,
    reviewCount: 134,
  },
  {
    id: "womens-pendant-2x",
    name: "Women's Grace Heal Pendant 2X",
    level: "2x",
    gender: "womens",
    price: 129.99,
    description: "Enhanced grace pendant with 2X power for stronger energy support. Features the same elegant design with improved wellness benefits.",
    shortDescription: "2X enhanced grace pendant",
    specs: [
      { label: "Material", value: "Rose Gold-Plated Steel" },
      { label: "Power Level", value: "2X (Enhanced)" },
      { label: "Diameter", value: "28mm" },
      { label: "Chain Length", value: "18-20 inches" },
      { label: "Finish", value: "Polished" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g2/womens-grace-pendant-2x-1.jpg",
    ],
    variants: [
      { id: "wgp2x-rose", name: "Rose Gold", color: "#b76e79", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g2/womens-grace-pendant-2x-rose.jpg" },
      { id: "wgp2x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g2/womens-grace-pendant-2x-silver.jpg" },
      { id: "wgp2x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2g2/womens-grace-pendant-2x-gold.jpg" },
    ],
    rating: 4.8,
    reviewCount: 98,
  },

  // UNISEX PRODUCTS (4 - 2x, 3x, 6x)
  {
    id: "unisex-harmony-band-2x",
    name: "Harmony Heal Band 2X",
    level: "2x",
    gender: "unisex",
    price: 99.99,
    description: "Sleek unisex wellness band designed for everyone. The 2X power level provides balanced energy support suitable for any lifestyle.",
    shortDescription: "Unisex harmony band with 2X balanced power",
    specs: [
      { label: "Material", value: "Silicone + Stainless Steel" },
      { label: "Power Level", value: "2X (Enhanced)" },
      { label: "Width", value: "10mm" },
      { label: "Sizes", value: "S-XL" },
      { label: "Clasp", value: "Adjustable" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h1/unisex-harmony-band-2x-1.jpg",
    ],
    variants: [
      { id: "uhb2x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h1/unisex-harmony-band-2x-black.jpg" },
      { id: "uhb2x-white", name: "White", color: "#ffffff", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h1/unisex-harmony-band-2x-white.jpg" },
      { id: "uhb2x-gray", name: "Gray", color: "#808080", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h1/unisex-harmony-band-2x-gray.jpg" },
    ],
    rating: 4.6,
    reviewCount: 178,
  },
  {
    id: "unisex-harmony-band-3x",
    name: "Harmony Heal Band 3X",
    level: "3x",
    gender: "unisex",
    price: 139.99,
    description: "Enhanced unisex band with 3X power for those who need stronger wellness support. Sleek design works for any outfit or occasion.",
    shortDescription: "3X unisex harmony band for stronger support",
    specs: [
      { label: "Material", value: "Silicone + Stainless Steel" },
      { label: "Power Level", value: "3X (Performance)" },
      { label: "Width", value: "10mm" },
      { label: "Sizes", value: "S-XL" },
      { label: "Clasp", value: "Adjustable" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h2/unisex-harmony-band-3x-1.jpg",
    ],
    variants: [
      { id: "uhb3x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h2/unisex-harmony-band-3x-black.jpg" },
      { id: "uhb3x-white", name: "White", color: "#ffffff", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h2/unisex-harmony-band-3x-white.jpg" },
      { id: "uhb3x-gray", name: "Gray", color: "#808080", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h2/unisex-harmony-band-3x-gray.jpg" },
    ],
    badge: "Popular",
    rating: 4.8,
    reviewCount: 245,
  },
  {
    id: "unisex-harmony-band-6x",
    name: "Harmony Heal Band 6X",
    level: "6x",
    gender: "unisex",
    price: 199.99,
    description: "Maximum power unisex band with 6X output. The ultimate wellness band for those who demand the strongest energy support available.",
    shortDescription: "6X maximum power unisex band",
    specs: [
      { label: "Material", value: "Silicone + Stainless Steel" },
      { label: "Power Level", value: "6X (Maximum)" },
      { label: "Width", value: "10mm" },
      { label: "Sizes", value: "S-XL" },
      { label: "Clasp", value: "Premium Adjustable" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h3/unisex-harmony-band-6x-1.jpg",
    ],
    variants: [
      { id: "uhb6x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h3/unisex-harmony-band-6x-black.jpg" },
      { id: "uhb6x-white", name: "White", color: "#ffffff", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h3/unisex-harmony-band-6x-white.jpg" },
      { id: "uhb6x-gray", name: "Gray", color: "#808080", available: false, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h3/unisex-harmony-band-6x-gray.jpg" },
    ],
    badge: "Premium",
    rating: 4.9,
    reviewCount: 112,
  },
  {
    id: "unisex-omni-pendant-3x",
    name: "Omni Heal Pendant 3X",
    level: "3x",
    gender: "unisex",
    price: 149.99,
    description: "Versatile omni pendant designed for universal appeal. The 3X power provides balanced wellness support for anyone seeking improved energy.",
    shortDescription: "3X universal omni pendant",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Power Level", value: "3X (Performance)" },
      { label: "Diameter", value: "30mm" },
      { label: "Chain Length", value: "22 inches" },
      { label: "Finish", value: "Brushed" },
      { label: "Water Resistant", value: "Yes" },
    ],
    images: [
      "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h4/unisex-omni-pendant-3x-1.jpg",
    ],
    variants: [
      { id: "uop3x-black", name: "Black", color: "#1a1a1a", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h4/unisex-omni-pendant-3x-black.jpg" },
      { id: "uop3x-silver", name: "Silver", color: "#C0C0C0", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h4/unisex-omni-pendant-3x-silver.jpg" },
      { id: "uop3x-gold", name: "Gold", color: "#d4af37", available: true, image: "https://cdn.prod.leadconnectorhq.com/files/5f3e5c7a4c8b3d2e1a9b4c6d8e0f1a2h4/unisex-omni-pendant-3x-gold.jpg" },
    ],
    rating: 4.7,
    reviewCount: 156,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByLevel(level: "1x" | "2x" | "3x" | "6x"): Product[] {
  return products.filter((product) => product.level === level);
}

export function getProductsByGender(gender: "mens" | "womens" | "unisex"): Product[] {
  return products.filter((product) => product.gender === gender);
}

export function getProductsByGenderAndLevel(
  gender: "mens" | "womens" | "unisex",
  level: "1x" | "2x" | "3x" | "6x"
): Product[] {
  return products.filter((product) => product.gender === gender && product.level === level);
}
