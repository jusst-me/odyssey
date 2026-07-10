import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Lightbulb, MapPin } from 'lucide-react';
import { Badge } from '@odyssey/ui';
import { ArticleAffiliateInline } from './article-affiliate-inline';
import { ArticleCommerceBlock } from './article-commerce-block';
import { getOfferById } from '../lib/deals-data';
import type { ListicleData, ListicleItem } from '../lib/article-data';

type ListicleSectionProps = {
  data: ListicleData;
};

/**
 * Mobile quick-pick — replaces wide table + sticky jump nav on small screens.
 * Each row is tappable, shows scan-friendly facts, zero horizontal overflow.
 */
function ListicleMobileQuickPick({ items }: { items: ListicleItem[] }) {
  return (
    <nav aria-label="Snel naar een strand" className="lg:hidden">
      <h3 className="mb-3 text-sm font-semibold">Snel naar…</h3>
      <ol className="border-border divide-border divide-y overflow-hidden rounded-xl border">
        {items.map((item) => (
          <li key={item.slug}>
            <a
              href={`#${item.slug}`}
              className="hover:bg-muted/50 focus-visible:ring-ring flex items-center gap-3 px-4 py-3 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <span
                className="bg-brand-700 text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums"
                aria-hidden="true"
              >
                {item.rank}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">{item.name}</span>
                <span className="text-muted-foreground block truncate text-xs">
                  {item.access} · {item.crowd} · {item.region}
                </span>
              </span>
              <ChevronRight className="text-muted-foreground size-4 shrink-0" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Desktop comparison table — hidden on mobile to prevent horizontal scroll. */
function ListicleOverviewTable({ items }: { items: ListicleItem[] }) {
  return (
    <div className="hidden lg:block">
      <h3 className="mb-3 text-sm font-semibold">Overzicht</h3>
      <div className="border-border overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Overzicht van alle stranden in deze lijst</caption>
          <thead>
            <tr className="bg-muted/60 border-border border-b">
              <th scope="col" className="px-4 py-3 font-semibold">
                #
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Strand
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Toegang
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Drukte
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Regio
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.slug} className="border-border border-b last:border-b-0">
                <td className="text-muted-foreground px-4 py-3 tabular-nums">{item.rank}</td>
                <td className="px-4 py-3">
                  <a
                    href={`#${item.slug}`}
                    className="text-brand-700 hover:text-brand-800 font-medium underline-offset-4 hover:underline"
                  >
                    {item.name}
                  </a>
                </td>
                <td className="text-muted-foreground px-4 py-3">{item.access}</td>
                <td className="text-muted-foreground px-4 py-3">{item.crowd}</td>
                <td className="text-muted-foreground px-4 py-3">{item.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RouteStrip({ stops }: { stops: string[] }) {
  const routeLabel = stops.join(' → ');

  return (
    <>
      {/* Mobile — single text line, no chip overflow */}
      <div
        className="border-border bg-muted/40 space-y-1 rounded-xl border px-4 py-3 lg:hidden"
        aria-label="Route van noord naar zuid langs de kust"
      >
        <p className="text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-wide uppercase">
          <MapPin className="text-brand-700 size-4 shrink-0" aria-hidden="true" />
          SH8 · noord → zuid
        </p>
        <p className="text-foreground text-sm leading-relaxed">{routeLabel}</p>
      </div>

      {/* Desktop — visual chip trail */}
      <div
        className="border-border bg-muted/40 hidden flex-wrap items-center gap-2 rounded-xl border px-4 py-3 lg:flex"
        aria-label="Route van noord naar zuid langs de kust"
      >
        <MapPin className="text-brand-700 size-4 shrink-0" aria-hidden="true" />
        <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          SH8 · noord → zuid
        </span>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {stops.map((stop, index) => (
            <li key={stop} className="flex items-center gap-1.5">
              <span className="bg-background border-border rounded-full border px-2.5 py-0.5 font-medium">
                {stop}
              </span>
              {index < stops.length - 1 ? (
                <ArrowRight className="text-muted-foreground size-3.5" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

function PlanningLinks({ links }: { links: ListicleData['planningLinks'] }) {
  return (
    <nav aria-label="Plan je trip — deals en boeken" className="space-y-3">
      <h3 className="text-sm font-semibold">Plan je trip</h3>
      <ul className="grid gap-2 sm:grid-cols-3 sm:gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group border-border bg-card hover:border-brand-300 focus-visible:ring-ring flex h-full items-center justify-between gap-2 rounded-xl border px-4 py-3 shadow-sm transition-colors hover:shadow-md focus-visible:ring-2 focus-visible:outline-none sm:block sm:p-4"
            >
              <span>
                <span className="group-hover:text-brand-700 block font-semibold">{link.label}</span>
                <span className="text-muted-foreground mt-0.5 hidden text-sm leading-relaxed sm:block">
                  {link.description}
                </span>
              </span>
              <ChevronRight
                className="text-muted-foreground size-4 shrink-0 sm:hidden"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function EditorTip({ text }: { text: string }) {
  return (
    <aside
      className="border-accent-300 bg-accent-50 flex gap-3 rounded-xl border p-4 md:p-5"
      aria-label="Redactietip"
    >
      <Lightbulb className="text-accent-600 mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div className="min-w-0 space-y-1">
        <p className="text-accent-900 text-sm font-semibold">Redactietip</p>
        <p className="text-accent-950/90 text-sm leading-relaxed">{text}</p>
      </div>
    </aside>
  );
}

function ListicleItemCard({ item }: { item: ListicleItem }) {
  const affiliateOffer =
    item.affiliateOfferId && item.affiliateContext
      ? getOfferById(item.affiliateOfferId)
      : undefined;

  return (
    <article id={item.slug} className="scroll-mt-28" aria-labelledby={`${item.slug}-heading`}>
      <div className="border-border bg-card overflow-hidden rounded-xl border shadow-sm">
        <div className="relative aspect-[16/9] w-full lg:aspect-[2/1]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-cover"
          />
          <span
            className="bg-brand-700 text-primary-foreground absolute top-4 left-4 flex size-10 items-center justify-center rounded-full text-lg font-bold tabular-nums shadow-sm"
            aria-hidden="true"
          >
            {item.rank}
          </span>
        </div>

        <div className="space-y-4 p-5 md:p-6">
          <header className="space-y-2">
            <h3 id={`${item.slug}-heading`} className="text-xl md:text-2xl">
              {item.name}
            </h3>
            <p className="text-foreground leading-snug font-medium">{item.hook}</p>
          </header>

          <p className="text-muted-foreground leading-relaxed">{item.description}</p>

          <dl
            className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 lg:hidden"
            aria-label="Kenmerken"
          >
            <div className="bg-muted/50 rounded-lg px-3 py-2">
              <dt className="text-muted-foreground text-xs">Toegang</dt>
              <dd className="font-medium">{item.access}</dd>
            </div>
            <div className="bg-muted/50 rounded-lg px-3 py-2">
              <dt className="text-muted-foreground text-xs">Drukte</dt>
              <dd className="font-medium">{item.crowd}</dd>
            </div>
            <div className="bg-muted/50 col-span-2 rounded-lg px-3 py-2 sm:col-span-1">
              <dt className="text-muted-foreground text-xs">Regio</dt>
              <dd className="font-medium">{item.region}</dd>
            </div>
          </dl>

          <ul className="hidden flex-wrap gap-2 lg:flex" aria-label="Kenmerken">
            {item.facts.map((fact) => (
              <li key={fact.label}>
                <Badge variant="secondary" className="font-normal">
                  {fact.label}: {fact.value}
                </Badge>
              </li>
            ))}
          </ul>

          {item.locationSlug ? (
            <Link
              href={`/bestemmingen/${item.locationSlug}`}
              className="text-brand-700 hover:text-brand-800 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              Meer over {item.region}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {affiliateOffer && item.affiliateContext ? (
          <div className="border-border bg-muted/30 border-t px-5 py-4 md:px-6 md:py-5">
            <ArticleAffiliateInline offer={affiliateOffer} context={item.affiliateContext} />
          </div>
        ) : null}
      </div>

      {item.editorTip ? (
        <div className="mt-4">
          <EditorTip text={item.editorTip} />
        </div>
      ) : null}
    </article>
  );
}

export function ListicleSection({ data }: ListicleSectionProps) {
  const commerceInsertAfter = data.commerce?.insertAfterRank;

  return (
    <section id={data.id} className="min-w-0 scroll-mt-24 space-y-8 overflow-x-clip">
      <header className="space-y-3">
        <h2 className="text-2xl md:text-3xl">{data.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{data.intro}</p>
      </header>

      <RouteStrip stops={data.routeStops} />
      <ListicleMobileQuickPick items={data.items} />
      <ListicleOverviewTable items={data.items} />
      <PlanningLinks links={data.planningLinks} />

      <div className="space-y-10 md:space-y-12 lg:relative">
        <div
          className="bg-border absolute top-0 bottom-0 left-5 hidden w-px lg:block"
          aria-hidden="true"
        />

        {data.items.map((item) => (
          <div key={item.slug} className="space-y-10 lg:pl-10">
            <span
              className="bg-brand-600 border-background absolute top-8 left-[1.125rem] hidden size-3 rounded-full border-2 lg:block"
              aria-hidden="true"
            />
            <ListicleItemCard item={item} />

            {data.commerce && item.rank === commerceInsertAfter ? (
              <ArticleCommerceBlock block={data.commerce} />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
