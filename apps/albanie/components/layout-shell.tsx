'use client';

import { useState } from 'react';
import { TopBar, SiteFooter } from '@odyssey/ui';
import type { TopBarLink, FooterLinkColumn } from '@odyssey/ui';

import { SiteHeader } from './site-header';
import { MobileNav } from './mobile-nav';
import type { NavItem } from '../lib/navigation';

interface LayoutShellProps {
  topBar: { tagline: string; links: TopBarLink[] };
  navItems: NavItem[];
  footer: {
    brand: { name: string; subtitle: string; description: string };
    columns: FooterLinkColumn[];
    copyright: string;
    affiliateDisclosure?: string;
  };
  children: React.ReactNode;
}

export function LayoutShell({ topBar, navItems, footer, children }: LayoutShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <TopBar tagline={topBar.tagline} links={topBar.links} />
      <SiteHeader
        items={navItems}
        mobileMenuOpen={mobileNavOpen}
        onMobileMenuToggle={() => setMobileNavOpen((prev) => !prev)}
      />
      <MobileNav items={navItems} open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
      {children}
      <SiteFooter
        brand={footer.brand}
        columns={footer.columns}
        copyright={footer.copyright}
        affiliateDisclosure={footer.affiliateDisclosure}
      />
    </>
  );
}
