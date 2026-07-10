import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { NativeOfferCard } from '../../../../components/native-offer-card';
import { Button } from '@odyssey/ui';
import { affiliateDisclosure, editorPicks, offersByVertical } from '../../../../lib/deals-data';

export const metadata: Metadata = {
  title: 'Autoverhuur',
  description:
    "Huurauto's in Albanië via TradeTracker feeds — redactionele selectie, geen vergelijkingssite.",
};

export default function DealsCarRentalPage() {
  const cars = offersByVertical('autoverhuur');
  const picks = editorPicks('autoverhuur');

  return (
    <main>
      <section
        aria-labelledby="cars-heading"
        className="bg-muted border-border border-b py-12 md:py-16"
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
            Vervoer · TradeTracker feed
          </p>
          <h1 id="cars-heading" className="text-3xl md:text-4xl">
            Autoverhuur
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Compact voor Tirana, SUV voor bergen — feed-data als rustige kaarten. Geen
            vergelijker-met-20-filters; wel onze tips over verzekering en wegen.
          </p>
        </div>
      </section>

      {/* Editorial context — gids first */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          <h2 className="text-xl font-semibold">Voordat je boekt</h2>
          <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>Check all-risk dekking en deposit — Albanese wegen zijn onvoorspelbaar.</li>
            <li>Voor Theth/Valbona: SUV of 4x4 aanbevolen; geen groot busje op smalle passes.</li>
            <li>
              Luchthaven Tirana (TIA) is de meest voorkomende pickup — boek minimaal 24u vooruit in
              juli.
            </li>
          </ul>
          <Button asChild variant="outline" size="sm">
            <Link href="/vervoer/auto-huren">
              Lees onze autohuur-gids
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {picks.length > 0 ? (
        <section aria-labelledby="car-picks-heading" className="bg-card py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="space-y-1">
              <h2 id="car-picks-heading" className="text-2xl md:text-3xl">
                Onze instapkeuzes
              </h2>
              <p className="text-muted-foreground text-sm">Economy, SUV en gezin — per use-case</p>
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

      <section aria-labelledby="all-cars-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1">
            <h2 id="all-cars-heading" className="text-2xl md:text-3xl">
              Alle huurauto&apos;s
            </h2>
            <p className="text-muted-foreground text-sm">
              {cars.length} voertuigen in demo-selectie
            </p>
          </header>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((offer) => (
              <li key={offer.id}>
                <NativeOfferCard offer={offer} />
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-center text-xs leading-relaxed">
            {affiliateDisclosure}
          </p>
        </div>
      </section>
    </main>
  );
}
