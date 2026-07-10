import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import { Badge, Button } from '@odyssey/ui';
import type { NativeOffer } from '../lib/deals-data';

type NativeOfferCardProps = {
  offer: NativeOffer;
};

export function NativeOfferCard({ offer }: NativeOfferCardProps) {
  const ctaLabel =
    offer.vertical === 'hotels'
      ? 'Bekijk hotel'
      : offer.vertical === 'activiteiten'
        ? 'Meer info'
        : 'Bekijk aanbod';

  return (
    <article className="border-border bg-card flex h-full flex-col overflow-hidden rounded-xl border shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image
          src={offer.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        {offer.badge ? (
          <Badge className="absolute top-3 left-3" variant="secondary">
            {offer.badge}
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1">
          <h3 className="line-clamp-2 leading-snug font-semibold">{offer.title}</h3>
          <p className="text-muted-foreground text-sm">{offer.location}</p>
        </div>

        {offer.teaser ? (
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {offer.teaser}
          </p>
        ) : null}

        {offer.stars ? (
          <p className="text-muted-foreground flex items-center gap-1 text-xs">
            <span className="flex" role="img" aria-label={`${offer.stars} sterren`}>
              {Array.from({ length: offer.stars }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" aria-hidden="true" />
              ))}
            </span>
          </p>
        ) : null}

        {offer.duration ? <p className="text-muted-foreground text-xs">{offer.duration}</p> : null}

        {offer.carType ? <p className="text-muted-foreground text-xs">{offer.carType}</p> : null}

        <p className="text-muted-foreground text-sm">
          Vanaf <span className="text-foreground font-medium">€{offer.priceFrom}</span>{' '}
          {offer.priceLabel}
        </p>

        <p className="text-muted-foreground text-xs">via {offer.source}</p>

        <Button asChild variant="ghost" size="sm" className="mt-auto w-fit">
          <a href={offer.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">
            {ctaLabel}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </article>
  );
}
