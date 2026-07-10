import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buildDealsHref, type DealRegion } from '../lib/deals-data';

type DealsPaginationProps = {
  basePath: string;
  currentPage: number;
  totalPages: number;
  region?: DealRegion | 'all';
};

export function DealsPagination({
  basePath,
  currentPage,
  totalPages,
  region = 'all',
}: DealsPaginationProps) {
  if (totalPages <= 1) return null;

  const prevHref = currentPage > 1 ? buildDealsHref(basePath, currentPage - 1, region) : null;
  const nextHref =
    currentPage < totalPages ? buildDealsHref(basePath, currentPage + 1, region) : null;

  return (
    <nav aria-label="Paginering" className="flex flex-wrap items-center justify-center gap-4 pt-4">
      {prevHref ? (
        <Link
          href={prevHref}
          className="border-border bg-card hover:bg-muted focus-visible:ring-ring inline-flex items-center gap-1 rounded-md border px-4 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          Vorige
        </Link>
      ) : (
        <span className="border-border text-muted-foreground inline-flex cursor-not-allowed items-center gap-1 rounded-md border px-4 py-2 text-sm opacity-50">
          <ChevronLeft className="size-4" aria-hidden="true" />
          Vorige
        </span>
      )}

      <p className="text-muted-foreground text-sm">
        Pagina {currentPage} van {totalPages}
      </p>

      {nextHref ? (
        <Link
          href={nextHref}
          className="border-border bg-card hover:bg-muted focus-visible:ring-ring inline-flex items-center gap-1 rounded-md border px-4 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Volgende
          <ChevronRight className="size-4" aria-hidden="true" />
        </Link>
      ) : (
        <span className="border-border text-muted-foreground inline-flex cursor-not-allowed items-center gap-1 rounded-md border px-4 py-2 text-sm opacity-50">
          Volgende
          <ChevronRight className="size-4" aria-hidden="true" />
        </span>
      )}
    </nav>
  );
}
