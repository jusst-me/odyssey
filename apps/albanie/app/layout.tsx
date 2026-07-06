import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

import { SiteFooter } from '@odyssey/ui';
import { topBarConfig, mainNavItems, footerLinks } from '../lib/navigation';
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
        <SiteFooter
          brand={{
            name: 'BUKURA',
            subtitle: 'Albanië reisgids',
            description:
              'Onafhankelijke Nederlandstalige reisgids over Albanië. Geschreven door reizigers die het land écht kennen — niet door een algoritme.',
          }}
          columns={[
            { title: 'Bestemmingen', links: footerLinks.bestemmingen },
            { title: 'Praktisch', links: footerLinks.praktisch },
            { title: 'Bukura', links: footerLinks.odyssey },
          ]}
          copyright="© 2026 Bukura Reisgids · Een onafhankelijk reisproject"
          affiliateDisclosure="Sommige links zijn affiliate-links. Jij betaalt niets extra; wij verdienen een kleine commissie."
        />
      </body>
    </html>
  );
}
