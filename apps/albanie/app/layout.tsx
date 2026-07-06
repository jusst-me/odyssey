import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

import { topBarConfig, mainNavItems } from '../lib/navigation';
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
      <body>
        <LayoutShell topBar={topBarConfig} navItems={mainNavItems}>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
