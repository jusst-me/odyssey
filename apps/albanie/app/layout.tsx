import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

import { topBarConfig, mainNavItems, footerConfig } from '../lib/navigation';
import { LayoutShell } from '../components/layout-shell';

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
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <LayoutShell topBar={topBarConfig} navItems={mainNavItems} footer={footerConfig}>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
