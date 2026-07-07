'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@odyssey/ui';

import type { NavItem } from '@odyssey/cms';

interface SiteHeaderProps {
  items: NavItem[];
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

export function SiteHeader({ items, mobileMenuOpen, onMobileMenuToggle }: SiteHeaderProps) {
  return (
    <header className="border-border bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="h-18.5 mx-auto flex max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="bg-primary font-display text-primary-foreground flex size-9 items-center justify-center rounded-md text-lg font-bold">
            B
          </span>
          <span className="font-display text-lg font-bold leading-tight tracking-tight">
            BUKURA
            <small className="text-primary block text-[0.6rem] font-semibold uppercase tracking-[0.32em]">
              Albanië reisgids
            </small>
          </span>
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {items.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-56 gap-1 p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="hover:bg-secondary hover:text-primary block rounded-sm px-3 py-2 text-sm font-medium transition-colors"
                            >
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="bg-background font-display hover:bg-secondary hover:text-primary inline-flex h-9 items-center rounded-md px-3 py-2 text-sm font-semibold transition-colors"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            className="text-foreground hover:bg-secondary hover:text-primary inline-flex size-9 items-center justify-center rounded-md transition-colors"
            aria-label="Zoeken"
          >
            <Search className="size-5" />
          </button>

          <Button size="sm" className="hidden sm:inline-flex">
            Reisupdates
          </Button>

          <button
            type="button"
            className="text-foreground hover:bg-secondary hover:text-primary inline-flex size-9 items-center justify-center rounded-md transition-colors lg:hidden"
            aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            onClick={onMobileMenuToggle}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
