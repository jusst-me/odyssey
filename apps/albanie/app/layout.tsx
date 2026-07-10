import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Albanië reisgids',
    template: '%s · Albanië reisgids',
  },
  description:
    'Onafhankelijke Nederlandstalige reisgids voor Albanië — bestemmingen, praktische tips en de beste reisdeals.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
