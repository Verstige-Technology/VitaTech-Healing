import { products } from '@/lib/products';
import ProductDetail from './ProductDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  return <ProductDetail productId={id} />;
}