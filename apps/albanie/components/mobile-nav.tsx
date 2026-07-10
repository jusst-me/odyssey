'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@odyssey/ui';

import type { NavItem } from '@odyssey/cms';

interface MobileNavProps {
  items: NavItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ items, open, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-80 overflow-y-auto p-0" showCloseButton>
        <SheetTitle className="sr-only">Navigatiemenu</SheetTitle>
        <div className="flex h-18.5 items-center px-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => onOpenChange(false)}>
            <span className="bg-primary font-display text-primary-foreground flex size-9 items-center justify-center rounded-md text-lg font-bold">
              B
            </span>
            <span className="font-display text-lg leading-tight font-bold tracking-tight">
              BUKURA
              <small className="text-primary block text-[0.6rem] font-semibold tracking-[0.32em] uppercase">
                Albanië reisgids
              </small>
            </span>
          </Link>
        </div>

        <nav aria-label="Mobiel navigatiemenu" className="border-border border-t px-2 py-3">
          <Accordion type="multiple" className="w-full">
            {items.map((item) =>
              item.children ? (
                <AccordionItem key={item.href} value={item.href} className="border-b-0">
                  <AccordionTrigger className="font-display px-3 py-3 text-sm font-semibold hover:no-underline [&>svg]:hidden">
                    <span className="flex w-full items-center justify-between">
                      {item.label}
                      <ChevronDown className="text-muted-foreground size-4 shrink-0 transition-transform duration-200" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-1">
                    <ul className="space-y-0.5 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose asChild>
                            <Link
                              href={child.href}
                              className="text-muted-foreground hover:bg-secondary hover:text-foreground block rounded-md px-3 py-2 text-sm font-medium transition-colors"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.href} className="border-b-0">
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="font-display hover:text-primary flex items-center px-3 py-3 text-sm font-semibold transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </div>
              ),
            )}
          </Accordion>
        </nav>

        <div className="border-border mt-auto border-t p-4">
          <SheetClose asChild>
            <Button className="w-full" size="sm">
              Reisupdates
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
