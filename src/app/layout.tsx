import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Digital Chautari | Creative Technology Studio in Kathmandu, Nepal',
  description:
    'Digital Chautari is a premier creative technology company in Kathmandu, Nepal delivering cutting-edge digital experiences, software products, and engineering solutions.',
  keywords: [
    'Digital Chautari',
    'Creative Technology',
    'Kathmandu Nepal',
    'Web Development',
    'Software Solutions',
  ],
  authors: [{ name: 'Digital Chautari' }],
  metadataBase: new URL('https://digitalchautari.com.np'),
  openGraph: {
    title: 'Digital Chautari | Creative Technology Studio',
    description:
      'Creative Technology Company based in Kathmandu, Nepal — crafting high-impact digital solutions.',
    siteName: 'Digital Chautari',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
