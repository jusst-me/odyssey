import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { DealsPagination } from '../../../../components/deals-pagination';
import { NativeOfferCard } from '../../../../components/native-offer-card';
import {
  affiliateDisclosure,
  buildDealsHref,
  dealRegions,
  editorPicks,
  offersByVerticalAndRegion,
  paginateOffers,
  parseDealsPageParam,
  parseRegionParam,
} from '../../../../lib/deals-data';

type PageProps = {
  searchParams: Promise<{ regio?: string; pagina?: string }>;
};

export const metadata: Metadata = {
  title: 'Hotels & verblijf',
  description:
    'Gecureerde hotels en guesthouses in Albanië — redactioneel geselecteerd via Booking.com feeds.',
};

export default async function DealsHotelsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const region = parseRegionParam(params.regio);
  const page = parseDealsPageParam(params.pagina);
  const basePath = '/deals/hotels';

  const filtered = offersByVerticalAndRegion('hotels', region);
  const picks = editorPicks('hotels').filter(
    (p) => region === 'all' || p.region === region || p.region === 'overal',
  );
  const listing = paginateOffers(
    filtered.filter((o) => !o.editorsPick || page > 1),
    page,
  );

  return (
    <main>
      <section
        aria-labelledby="hotels-heading"
        className="bg-sun-50 border-border border-b py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl space-y-5 px-6">
          <Link
            href="/deals"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Alle deals
          </Link>
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
            Accommodatie · Booking.com feed
          </p>
          <h1 id="hotels-heading" className="text-3xl md:text-4xl">
            Hotels &amp; verblijf
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Gecureerde verblijven in onze stijl — geen fullscreen zoekwidget, geen prijsalarm. Data
            uit XML-feeds, presentatie door onze redactie.
          </p>
        </div>
      </section>

      {/* Region chips — light filter, not Booking map */}
      <section
        aria-labelledby="region-filter"
        className="bg-background border-border border-b py-6"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="region-filter" className="sr-only">
            Filter op regio
          </h2>
          <ul className="flex flex-wrap gap-2">
            {dealRegions.map((r) => {
              const active = (region === 'all' && r.id === 'overal') || region === r.id;
              const href = r.id === 'overal' ? basePath : buildDealsHref(basePath, 1, r.id);
              return (
                <li key={r.id}>
                  <Link
                    href={href}
                    className={
                      active
                        ? 'bg-primary text-primary-foreground inline-flex rounded-full px-4 py-1.5 text-sm font-medium'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80 inline-flex rounded-full px-4 py-1.5 text-sm font-medium'
                    }
                  >
                    {r.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {page === 1 && picks.length > 0 ? (
        <section aria-labelledby="editor-picks-heading" className="bg-background py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="space-y-1">
              <h2 id="editor-picks-heading" className="text-2xl md:text-3xl">
                Onze selectie
              </h2>
              <p className="text-muted-foreground text-sm">
                Max. één &ldquo;Onze keuze&rdquo; per rij — redactioneel, niet gesponsord
              </p>
            </header>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {picks.map((offer) => (
                <li key={offer.id}>
                  <NativeOfferCard offer={offer} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="listing-heading" className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1">
            <h2 id="listing-heading" className="text-2xl md:text-3xl">
              Alle verblijven
            </h2>
            <p className="text-muted-foreground text-sm">
              {listing.totalItems} resultaten · pagina {listing.currentPage} van{' '}
              {listing.totalPages}
            </p>
          </header>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listing.items.map((offer) => (
              <li key={offer.id}>
                <NativeOfferCard offer={offer} />
              </li>
            ))}
          </ul>
          <DealsPagination
            basePath={basePath}
            currentPage={listing.currentPage}
            totalPages={listing.totalPages}
            region={region}
          />
          <p className="text-muted-foreground text-center text-xs leading-relaxed">
            {affiliateDisclosure}
          </p>
        </div>
      </section>
    </main>
  );
}
