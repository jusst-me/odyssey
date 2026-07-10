import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BedDouble, Car, MapPin, ShieldCheck, Ticket } from 'lucide-react';
import { NativeOfferCard } from '../../../components/native-offer-card';
import { Badge, Button } from '@odyssey/ui';
import {
  affiliateDisclosure,
  editorPicks,
  nativeOffers,
  offersByVertical,
} from '../../../lib/deals-data';

export const metadata: Metadata = {
  title: 'Deals',
  description:
    'Gecureerde hotels, activiteiten en autoverhuur voor Albanië — redactioneel geselecteerd, geen prijsvergelijker.',
};

const dealHubs = [
  {
    slug: 'hotels',
    href: '/deals/hotels',
    title: 'Hotels & verblijf',
    description: 'Van budget guesthouse tot boutique aan zee — max. redactionele selectie.',
    icon: BedDouble,
    count: offersByVertical('hotels').length,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    slug: 'activiteiten',
    href: '/deals/activiteiten',
    title: 'Activiteiten & tours',
    description: 'Tours, food walks en outdoor — GetYourGuide native in onze stijl.',
    icon: Ticket,
    count: offersByVertical('activiteiten').length,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
  },
  {
    slug: 'autoverhuur',
    href: '/deals/autoverhuur',
    title: 'Autoverhuur',
    description: 'Economy tot 4x4 — voor Riviera én bergwegen. Geen vergelijker-UI.',
    icon: Car,
    count: offersByVertical('autoverhuur').length,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
  },
] as const;

export default function DealsHubPage() {
  const hotelPick = editorPicks('hotels', 1)[0];
  const activityPick = editorPicks('activiteiten', 1)[0];

  return (
    <main>
      <section
        aria-labelledby="deals-heading"
        className="bg-muted border-border border-b py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-center">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
            Deals · Albanië
          </p>
          <h1 id="deals-heading" className="text-3xl md:text-4xl lg:text-5xl">
            Boeken via onze redactie
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hotels, tours en huurauto&apos;s — gepresenteerd als native content, niet als
            prijsvergelijker. Eerst inspiratie op onze guides, dan pas affiliate-links.
          </p>
          <p className="text-muted-foreground text-sm">
            {nativeOffers.length} curated offers in demo
          </p>
        </div>
      </section>

      {/* Vertical entry — wayfinding, not marketplace search */}
      <section aria-labelledby="hubs-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <h2 id="hubs-heading" className="sr-only">
            Deal-categorieën
          </h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {dealHubs.map((hub) => {
              const Icon = hub.icon;
              return (
                <li key={hub.slug}>
                  <Link
                    href={hub.href}
                    className="group border-border bg-card focus-visible:ring-ring block h-full overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={hub.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-3 p-5">
                      <Icon className="text-primary size-6" aria-hidden="true" />
                      <h3 className="text-xl font-semibold">{hub.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {hub.description}
                      </p>
                      <p className="text-muted-foreground text-xs">{hub.count} in selectie</p>
                      <span className="text-primary inline-flex items-center gap-1 text-sm font-medium">
                        Bekijk
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Cross-picks — editorial, max 1 per vertical */}
      {(hotelPick || activityPick) && (
        <section aria-labelledby="picks-heading" className="bg-card py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="space-y-1">
              <h2 id="picks-heading" className="text-2xl md:text-3xl">
                Redactie-keuzes deze maand
              </h2>
              <p className="text-muted-foreground text-sm">
                Handgeplukt — geen algorithmische &ldquo;beste deal&rdquo;-banner
              </p>
            </header>
            <ul className="grid gap-6 md:grid-cols-2">
              {hotelPick ? (
                <li>
                  <div className="space-y-3">
                    <Badge variant="secondary">Hotel</Badge>
                    <NativeOfferCard offer={hotelPick} />
                  </div>
                </li>
              ) : null}
              {activityPick ? (
                <li>
                  <div className="space-y-3">
                    <Badge variant="secondary">Activiteit</Badge>
                    <NativeOfferCard offer={activityPick} />
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </section>
      )}

      {/* Trust + disclosure */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold">Geen Booking.com-kloon</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We tonen geen kaart met 500 pins, geen datumkiezer in neon-oranje, geen &ldquo;LAST
              ROOM&rdquo;-timers. Feed-data uit Booking, GetYourGuide en TradeTracker wordt
              genormaliseerd naar rustige kaarten in onze huisstijl — met redactielabels waar het
              past.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
              <MapPin className="size-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold">Eerst de gids, dan de deal</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Op bestemming- en routepagina&apos;s verschijnen max. 3 native kaarten per sectie.
              Deze deals-hub is voor wie klaar is om te boeken — maar altijd met context uit onze
              content.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/bestemmingen">Bekijk bestemmingen eerst</Link>
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground mx-auto mt-10 max-w-3xl px-6 text-center text-xs leading-relaxed">
          {affiliateDisclosure}
        </p>
      </section>
    </main>
  );
}
