import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buildArchiveHref } from '../lib/blog-data';

type BlogPaginationProps = {
  basePath: string;
  currentPage: number;
  totalPages: number;
};

export function BlogPagination({ basePath, currentPage, totalPages }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const prevHref = currentPage > 1 ? buildArchiveHref(basePath, currentPage - 1) : null;
  const nextHref = currentPage < totalPages ? buildArchiveHref(basePath, currentPage + 1) : null;

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
