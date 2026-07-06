'use client';

import { useState } from 'react';
import { TopBar } from '@odyssey/ui';
import type { TopBarLink } from '@odyssey/ui';

import { SiteHeader } from './site-header';
import { MobileNav } from './mobile-nav';
import type { NavItem } from '../lib/navigation';

interface LayoutShellProps {
  topBar: { tagline: string; links: TopBarLink[] };
  navItems: NavItem[];
  children: React.ReactNode;
}

export function LayoutShell({ topBar, navItems, children }: LayoutShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <TopBar tagline={topBar.tagline} links={topBar.links} />
      <SiteHeader items={navItems} onMobileMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav items={navItems} open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
      {children}
    </>
  );
}
