import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NativeOfferCard } from './native-offer-card';
import { affiliateDisclosure, getOfferById, type NativeOffer } from '../lib/deals-data';
import type { ListicleCommerceBlock } from '../lib/article-data';

type ArticleCommerceBlockProps = {
  block: ListicleCommerceBlock;
};

export function ArticleCommerceBlock({ block }: ArticleCommerceBlockProps) {
  const offers = block.offerIds
    .map((id) => getOfferById(id))
    .filter((offer): offer is NativeOffer => offer !== undefined);

  if (offers.length === 0) return null;

  return (
    <aside
      id="plan-je-trip"
      className="border-border bg-muted/30 scroll-mt-28 space-y-6 rounded-xl border p-5 md:p-8"
      aria-labelledby="commerce-block-heading"
    >
      <header className="space-y-2">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Boeken via onze redactie
        </p>
        <h3 id="commerce-block-heading" className="text-xl md:text-2xl">
          {block.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{block.intro}</p>
      </header>

      <ul className="grid gap-4 md:grid-cols-3">
        {offers.map((offer) => (
          <li key={offer.id}>
            <NativeOfferCard offer={offer} />
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground text-xs leading-relaxed">{affiliateDisclosure}</p>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link
          href="/deals/hotels?regio=riviera"
          className="text-brand-700 hover:text-brand-800 inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
        >
          Alle hotels Riviera
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/deals/autoverhuur"
          className="text-brand-700 hover:text-brand-800 inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
        >
          Auto huren
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/deals"
          className="text-brand-700 hover:text-brand-800 inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
        >
          Alle deals
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
