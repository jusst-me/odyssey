import * as React from 'react';
import { cn } from '../lib/utils';

export interface TopBarLink {
  label: string;
  href: string;
}

export interface TopBarProps extends React.ComponentProps<'div'> {
  tagline: string;
  links?: TopBarLink[];
}

function TopBar({ tagline, links, className, ...props }: TopBarProps) {
  return (
    <div
      data-slot="top-bar"
      className={cn('bg-foreground text-background text-xs font-medium tracking-wide', className)}
      {...props}
    >
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="truncate">{tagline}</span>
        {links && links.length > 0 && (
          <nav aria-label="Secundaire navigatie" className="hidden gap-4 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-85 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

export { TopBar };
