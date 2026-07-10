import { ExternalLink } from 'lucide-react';
import { Button } from '@odyssey/ui';
import type { NativeOffer } from '../lib/deals-data';

type ArticleAffiliateInlineProps = {
  offer: NativeOffer;
  context: string;
};

function ctaLabel(vertical: NativeOffer['vertical']): string {
  switch (vertical) {
    case 'hotels':
      return 'Bekijk hotel';
    case 'activiteiten':
      return 'Meer info';
    case 'autoverhuur':
      return 'Bekijk aanbod';
  }
}

export function ArticleAffiliateInline({ offer, context }: ArticleAffiliateInlineProps) {
  return (
    <aside className="space-y-3" aria-label="Redactionele affiliate-tip">
      <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
        Redactie-keuze · via {offer.source}
      </p>
      <p className="text-foreground text-sm leading-relaxed">{context}</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <dl className="text-muted-foreground space-y-0.5 text-sm">
          <div>
            <dt className="sr-only">Aanbod</dt>
            <dd className="text-foreground font-medium">{offer.title}</dd>
          </div>
          <div>
            <dt className="sr-only">Locatie en prijs</dt>
            <dd>
              {offer.location} · vanaf €{offer.priceFrom} {offer.priceLabel}
            </dd>
          </div>
        </dl>
        <Button asChild variant="outline" size="sm" className="w-full shrink-0 sm:w-auto">
          <a href={offer.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">
            {ctaLabel(offer.vertical)}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </aside>
  );
}
