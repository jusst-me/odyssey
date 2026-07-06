import * as React from 'react';
import { cn } from '../lib/utils';

export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SiteFooterProps extends React.ComponentProps<'footer'> {
  brand: {
    name: string;
    subtitle: string;
    description: string;
  };
  columns: FooterLinkColumn[];
  /** Shown in the bottom bar alongside the copyright. */
  affiliateDisclosure?: string;
  copyright: string;
  /** Optional newsletter CTA rendered below the brand blurb. */
  newsletterSlot?: React.ReactNode;
}

function SiteFooter({
  brand,
  columns,
  affiliateDisclosure,
  copyright,
  newsletterSlot,
  className,
  ...props
}: SiteFooterProps) {
  return (
    <footer
      data-slot="site-footer"
      className={cn('bg-foreground text-neutral-200', className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-primary font-display text-primary-foreground flex size-9 items-center justify-center rounded-md text-lg font-bold">
                {brand.name.charAt(0)}
              </span>
              <span className="font-display text-card text-lg font-bold leading-tight tracking-tight">
                {brand.name}
                <small className="text-primary block text-[0.6rem] font-semibold uppercase tracking-[0.32em]">
                  {brand.subtitle}
                </small>
              </span>
            </div>
            <p className="max-w-[34ch] text-sm leading-relaxed text-neutral-200">
              {brand.description}
            </p>
            {newsletterSlot && <div className="mt-6">{newsletterSlot}</div>}
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-card mb-4 text-xs font-semibold uppercase tracking-[0.16em]">
                {col.title}
              </h4>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-display hover:text-accent inline-block py-1 text-sm font-medium text-neutral-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="font-display mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-200">
          <span>{copyright}</span>
          {affiliateDisclosure && <span className="max-w-prose">{affiliateDisclosure}</span>}
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
