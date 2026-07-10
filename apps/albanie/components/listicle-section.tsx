import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Lightbulb, MapPin } from 'lucide-react';
import { Badge } from '@odyssey/ui';
import { ArticleAffiliateInline } from './article-affiliate-inline';
import { ArticleCommerceBlock } from './article-commerce-block';
import { getOfferById } from '../lib/deals-data';
import type { ListicleData, ListicleItem } from '../lib/article-data';

type ListicleSectionProps = {
  data: ListicleData;
};

function ListicleJumpNav({ items }: { items: ListicleItem[] }) {
  return (
    <nav
      aria-label="Spring naar strand in de lijst"
      className="border-border bg-background/95 supports-backdrop-filter:bg-background/80 sticky top-20 z-10 -mx-1 overflow-x-auto border-y px-1 py-3 backdrop-blur"
    >
      <ol className="flex min-w-max gap-1.5">
        {items.map((item) => (
          <li key={item.slug}>
            <a
              href={`#${item.slug}`}
              className="bg-muted text-foreground hover:bg-brand-100 focus-visible:ring-ring inline-flex size-9 items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {item.rank}
              <span className="sr-only">. {item.name}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ListicleOverviewTable({ items }: { items: ListicleItem[] }) {
  return (
    <div className="border-border overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[540px] text-left text-sm">
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
  );
}

function RouteStrip({ stops }: { stops: string[] }) {
  return (
    <div
      className="border-border bg-muted/40 flex flex-wrap items-center gap-2 rounded-xl border px-4 py-3"
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
  );
}

function PlanningLinks({ links }: { links: ListicleData['planningLinks'] }) {
  return (
    <nav aria-label="Plan je trip — deals en boeken" className="grid gap-3 sm:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group border-border bg-card hover:border-brand-300 focus-visible:ring-ring block rounded-xl border p-4 shadow-sm transition-colors hover:shadow-md focus-visible:ring-2 focus-visible:outline-none"
        >
          <p className="group-hover:text-brand-700 mb-1 font-semibold">{link.label}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
        </Link>
      ))}
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
      <div className="space-y-1">
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
        <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
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

          <ul className="flex flex-wrap gap-2" aria-label="Kenmerken">
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
    <section id={data.id} className="scroll-mt-24 space-y-8">
      <header className="space-y-3">
        <h2 className="text-2xl md:text-3xl">{data.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{data.intro}</p>
      </header>

      <RouteStrip stops={data.routeStops} />
      <PlanningLinks links={data.planningLinks} />
      <ListicleOverviewTable items={data.items} />
      <ListicleJumpNav items={data.items} />

      <div className="relative space-y-10 md:space-y-12">
        <div
          className="bg-border absolute top-0 bottom-0 left-4 hidden w-px md:left-5 lg:block"
          aria-hidden="true"
        />

        {data.items.map((item) => (
          <div key={item.slug} className="relative space-y-10 lg:pl-10">
            <span
              className="bg-brand-600 border-background absolute top-8 left-3 hidden size-3 rounded-full border-2 lg:block"
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
