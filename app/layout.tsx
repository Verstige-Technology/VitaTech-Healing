import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart';
import Navbar from '@/components/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VitaTech Healing',
  description:
    'Natural wellness jewelry with Tourmaline, Far Infrared, Germanium & Neodymium Magnets. Experience better health and performance with VitaTech healing bracelets.',
  keywords: [
    'wellness jewelry',
    'tourmaline bracelet',
    'far infrared bracelet',
    'Germanium jewelry',
    'magnetic bracelet',
    'health bracelet',
    'VitaTech',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-[#0a0a1a] text-white min-h-screen font-montserrat`}>
        <CartProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}