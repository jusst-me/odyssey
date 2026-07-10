import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Star,
  Wallet,
} from 'lucide-react';
import { Badge, Button } from '@odyssey/ui';

// ---------------------------------------------------------------------------
// Placeholder data — replace with CMS queries when wiring up the page
// Maps to packages/cms/src/schema/types/location.ts
// ---------------------------------------------------------------------------

type LocationType = 'city' | 'beach' | 'region' | 'mountain' | 'lake' | 'river' | 'other';

const locationTypeLabels: Record<LocationType, string> = {
  city: 'Stad',
  beach: 'Strand',
  region: 'Regio',
  mountain: 'Bergen',
  lake: 'Meer',
  river: 'Rivier',
  other: 'Overig',
};

type Highlight = {
  title: string;
  teaser: string;
  image: string;
};

type EditorialSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

type HotelDeal = {
  name: string;
  location: string;
  stars: number;
  priceFrom: number;
  badge?: string;
  image: string;
  affiliateUrl: string;
};

type LocationDetail = {
  slug: string;
  name: string;
  locationType: LocationType;
  teaser: string;
  heroImage: string;
  heroImageAlt: string;
  updatedLabel: string;
  readTime: string;
  atAGlance: {
    idealDuration: string;
    bestSeason: string;
    budget: string;
    vibe: string;
  };
  lead: string;
  sections: EditorialSection[];
  highlights: Highlight[];
  relatedRoutes: { slug: string; title: string; days: number }[];
  relatedArticles: {
    slug: string;
    title: string;
    category: string;
    date: string;
    dateTime: string;
  }[];
  hotels: HotelDeal[];
  nearby: {
    slug: string;
    name: string;
    locationType: LocationType;
    teaser: string;
    image: string;
  }[];
};

const locationDetails: Record<string, LocationDetail> = {
  tirana: {
    slug: 'tirana',
    name: 'Tirana',
    locationType: 'city',
    teaser: 'Kleurrijke hoofdstad waar communistisch verleden en hippe cafécultuur samenkomen.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    heroImageAlt: 'Kleurrijk stadsbeeld van Tirana met gebouwen en palmen',
    updatedLabel: 'Bijgewerkt juli 2026',
    readTime: '12 min lezen',
    atAGlance: {
      idealDuration: '2–3 dagen',
      bestSeason: 'Apr–jun & sep–okt',
      budget: '€35–55 p/d',
      vibe: 'Urban · levendig · culinair',
    },
    lead: 'Tirana verrast. Geen klassieke Europese hoofdstad met grote monumenten, wel een stad die in turbo tempo verandert — van grijs communistisch erfgoed naar kleurrijke boulevardes, specialty coffee en een nachtleven dat steeds volwassener wordt.',
    sections: [
      {
        id: 'waarom',
        title: 'Waarom Tirana?',
        paragraphs: [
          'De meeste reizigers zien Tirana als doorreispunt naar de kust of bergen. Onterecht: de stad is de beste plek om Albanië te begrijpen — het verleden, de energie en de manier waarop locals het land moderniseren zonder hun roots te verliezen.',
          'Plan minstens een weekend. Eén dag voor het centrum en musea, één avond in Blloku, en een halve dag voor Dajti als je frisse lucht wilt. Combineer het met Berat of Shkodër voor een sterke stedentrip.',
        ],
      },
      {
        id: 'highlights',
        title: 'Niet missen',
        paragraphs: [
          'Focus op een handvol plekken in plaats van alles af te vinken. Tirana beloont langzaam reizen: de mooiste momenten zitten vaak in een café aan het Skanderbegplein of een spontane stop bij een bakker in de side streets.',
        ],
      },
      {
        id: 'wijken',
        title: 'Wijken & buurten',
        paragraphs: [
          'Het centrum rond Skanderbeg is compact en loopbaar — start hier altijd. Blloku was ooit de elite-wijk van de partij-top; nu vol met restaurants, bars en jonge Albanese ondernemers. Voor een rustiger sfeer: de zuidelijke lanen richting Pazari i Ri (de nieuwe markt).',
          'Vermijd de indruk dat je “alle highlights in één dag” moet zien. Tirana werkt beter als basis-camp dan als checklist.',
        ],
      },
      {
        id: 'eten',
        title: 'Eten & drinken',
        paragraphs: [
          'Albanese keuken in Tirana is heartier dan aan de kust: tave kosi, byrek en gegrild vlees in informele taverna’s. Probeer ook de nieuwe generatie restaurants in Blloku — vaak fusion met lokale producten.',
          'Koffie is een serieuze zaak. Specialty coffee bars zijn overal; perfect voor een rustige ochtendstart voordat je musea intrekt.',
        ],
      },
      {
        id: 'praktisch',
        title: 'Praktisch in Tirana',
        paragraphs: [
          'Vliegveld TIA ligt ~20 minuten buiten de stad. Taxi’s zijn goedkoop; gebruik een vaste prijs of app indien beschikbaar. In het centrum kun je bijna alles lopen; voor Dajti neem je de cable car.',
          'Contant geld is nog handig voor kleine winkels en markten, maar restaurants accepteren vaak kaart. Engels gaat in tourist zones goed; een paar woorden Albanees wordt gewaardeerd.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Skanderbegplein',
        teaser: 'Het kloppend hart — omringd door museum, moskee en pastelgekleurde gebouwen.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      },
      {
        title: "Bunk'Art 2",
        teaser: 'Ondergronds museum in een voormalige bunker — indrukwekkend Cold War-verhaal.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      },
      {
        title: 'Mount Dajti',
        teaser: 'Kabelbaan naar het plateau — panoramisch uitzicht over stad en kustlijn.',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
      },
      {
        title: 'Blloku',
        teaser: 'De hipste wijk — restaurants, bars en de nieuwe Albanese stads-cultuur.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      },
    ],
    relatedRoutes: [
      { slug: 'steden-cultuur', title: 'UNESCO-steden route', days: 4 },
      { slug: 'tirana-weekend', title: 'Tirana weekend escape', days: 3 },
    ],
    relatedArticles: [
      {
        slug: 'tirana-food-guide',
        title: 'Waar eten in Tirana: 8 adressen buiten de toeristengordel',
        category: 'Tips',
        date: '6 juli 2026',
        dateTime: '2026-07-06',
      },
      {
        slug: 'tirana-dagtrip-dajti',
        title: 'Dajti in een halve dag: kabelbaan, picknick en uitzicht',
        category: 'Praktisch',
        date: '22 juni 2026',
        dateTime: '2026-06-22',
      },
    ],
    hotels: [
      {
        name: 'Hotel Plaza Tirana',
        location: 'Centrum, Tirana',
        stars: 4,
        priceFrom: 72,
        badge: 'Onze keuze',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
        affiliateUrl: 'https://example.com/affiliate/plaza-tirana',
      },
      {
        name: 'Boutique Hotel Blloku',
        location: 'Blloku, Tirana',
        stars: 3,
        priceFrom: 58,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        affiliateUrl: 'https://example.com/affiliate/blloku-boutique',
      },
      {
        name: 'Guesthouse near Pazari',
        location: 'Pazari i Ri, Tirana',
        stars: 3,
        priceFrom: 42,
        badge: 'Budget tip',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
        affiliateUrl: 'https://example.com/affiliate/pazari-guesthouse',
      },
    ],
    nearby: [
      {
        slug: 'berat',
        name: 'Berat',
        locationType: 'city',
        teaser: 'UNESCO-stad op 2 uur rijden — perfect als dagtrip of verlenging.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      },
      {
        slug: 'shkoder',
        name: 'Shkodër',
        locationType: 'city',
        teaser: 'Noordelijke poort — combineer met het meer en de bergen.',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      },
      {
        slug: 'saranda',
        name: 'Sarandë',
        locationType: 'beach',
        teaser: 'Kuststad op 4 uur rijden — combineer stedentrip met strand.',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
      },
    ],
  },
};

/** Minimal fallback for hub slugs without a full editorial page yet. */
const locationStubs: Record<
  string,
  Pick<LocationDetail, 'slug' | 'name' | 'locationType' | 'teaser' | 'heroImage' | 'heroImageAlt'>
> = {
  berat: {
    slug: 'berat',
    name: 'Berat',
    locationType: 'city',
    teaser: 'De stad van duizend ramen — UNESCO-werelderfgoed vol Ottomanse charme.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
    heroImageAlt: 'Historische huizen in Berat',
  },
  ksamil: {
    slug: 'ksamil',
    name: 'Ksamil',
    locationType: 'beach',
    teaser: 'Kristalhelder water en eilandjes — de Caraïben van Europa.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    heroImageAlt: 'Turquoise water bij Ksamil',
  },
  theth: {
    slug: 'theth',
    name: 'Theth',
    locationType: 'mountain',
    teaser: 'Iconisch bergdorp in de Albanese Alpen.',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    heroImageAlt: 'Berglandschap bij Theth',
  },
};

function resolveLocation(slug: string): LocationDetail | null {
  if (locationDetails[slug]) return locationDetails[slug];
  const stub = locationStubs[slug];
  if (!stub) return null;

  return {
    ...stub,
    updatedLabel: 'Bijgewerkt juli 2026',
    readTime: '6 min lezen',
    atAGlance: {
      idealDuration: '1–2 dagen',
      bestSeason: 'Mei–sep',
      budget: '€30–50 p/d',
      vibe: 'Redactionele guide volgt',
    },
    lead: stub.teaser,
    sections: [
      {
        id: 'overview',
        title: `Over ${stub.name}`,
        paragraphs: [
          stub.teaser,
          'De volledige redactionele guide voor deze bestemming wordt binnenkort aangevuld. Bekijk intussen onze routes en blog voor gerelateerde tips.',
        ],
      },
    ],
    highlights: [],
    relatedRoutes: [],
    relatedArticles: [],
    hotels: [],
    nearby: [],
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const location = resolveLocation(slug);
  if (!location) return { title: 'Bestemming niet gevonden' };

  return {
    title: `${location.name} — Reisgids Albanië`,
    description: location.teaser,
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = resolveLocation(slug);
  if (!location) notFound();

  const isFullGuide = Boolean(locationDetails[slug]);

  return (
    <main>
      {/* SECTIE 1 — Hero */}
      <section aria-labelledby="location-heading" className="relative min-h-[45vh] md:min-h-[50vh]">
        <Image
          src={location.heroImage}
          alt={location.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/20"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-[45vh] max-w-6xl flex-col justify-end px-6 pt-24 pb-10 md:min-h-[50vh] md:pb-12">
          <nav aria-label="Broodkruimel" className="mb-6">
            <ol className="text-primary-foreground/80 flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link
                  href="/bestemmingen"
                  className="hover:text-primary-foreground focus-visible:ring-ring inline-flex items-center gap-1 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Bestemmingen
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground font-medium">{location.name}</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{locationTypeLabels[location.locationType]}</Badge>
              {isFullGuide ? <Badge variant="outline">Redactionele guide</Badge> : null}
            </div>
            <h1 id="location-heading" className="text-primary-foreground text-4xl md:text-5xl">
              {location.name}
            </h1>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">{location.lead}</p>
            <p className="text-primary-foreground/70 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {location.readTime}
              </span>
              <span>{location.updatedLabel}</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTIE 2 — At a glance */}
      <section aria-labelledby="glance-heading" className="border-border bg-muted border-b py-8">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="glance-heading" className="sr-only">
            In het kort
          </h2>
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="space-y-1">
              <dt className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase">
                <Clock className="size-3.5" aria-hidden="true" />
                Ideale duur
              </dt>
              <dd className="text-sm font-medium">{location.atAGlance.idealDuration}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase">
                <Calendar className="size-3.5" aria-hidden="true" />
                Beste seizoen
              </dt>
              <dd className="text-sm font-medium">{location.atAGlance.bestSeason}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase">
                <Wallet className="size-3.5" aria-hidden="true" />
                Budget
              </dt>
              <dd className="text-sm font-medium">{location.atAGlance.budget}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase">
                <MapPin className="size-3.5" aria-hidden="true" />
                Sfeer
              </dt>
              <dd className="text-sm font-medium">{location.atAGlance.vibe}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SECTIE 3 — Editorial body + sidebar */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <article className="min-w-0 space-y-12">
            {location.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.id === 'highlights' && location.highlights.length > 0 ? (
                  <ul className="grid gap-4 pt-2 sm:grid-cols-2">
                    {location.highlights.map((highlight) => (
                      <li
                        key={highlight.title}
                        className="border-border bg-card overflow-hidden rounded-xl border shadow-sm"
                      >
                        <div className="relative aspect-[3/2]">
                          <Image
                            src={highlight.image}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1 p-4">
                          <h3 className="font-semibold">{highlight.title}</h3>
                          <p className="text-muted-foreground text-sm">{highlight.teaser}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </article>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {location.sections.length > 1 ? (
              <nav
                aria-labelledby="onpage-nav"
                className="border-border bg-card rounded-xl border p-5"
              >
                <h2 id="onpage-nav" className="mb-3 text-sm font-semibold">
                  Op deze pagina
                </h2>
                <ul className="space-y-2">
                  {location.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-primary hover:text-primary/80 focus-visible:ring-ring text-sm underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            {location.relatedRoutes.length > 0 ? (
              <div className="border-border bg-card space-y-3 rounded-xl border p-5">
                <h2 className="text-sm font-semibold">Combineer met een route</h2>
                <ul className="space-y-3">
                  {location.relatedRoutes.map((route) => (
                    <li key={route.slug}>
                      <Link
                        href={`/routes/${route.slug}`}
                        className="group focus-visible:ring-ring block focus-visible:ring-2 focus-visible:outline-none"
                      >
                        <p className="text-muted-foreground text-xs">{route.days} dagen</p>
                        <p className="group-hover:text-primary text-sm font-medium">
                          {route.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/routes"
                  className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium"
                >
                  Alle routes
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            ) : null}

            <div className="border-border bg-muted rounded-xl border p-5">
              <p className="text-muted-foreground text-xs leading-relaxed">
                Deze guide is redactioneel — geen gesponsorde plekken in de tekst. Affiliate-links
                (hotels) staan apart en zijn transparant gemarkeerd.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTIE 4 — Blog-koppeling */}
      {location.relatedArticles.length > 0 ? (
        <section aria-labelledby="articles-heading" className="bg-card py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="space-y-1">
              <h2 id="articles-heading" className="text-2xl md:text-3xl">
                Meer over {location.name}
              </h2>
              <p className="text-muted-foreground text-sm">Tips en verhalen uit onze blog</p>
            </header>
            <ul className="grid gap-4 md:grid-cols-2">
              {location.relatedArticles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group border-border bg-background focus-visible:ring-ring block rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <Badge variant="ghost" className="mb-2 px-0">
                      {article.category}
                    </Badge>
                    <h3 className="group-hover:text-primary mb-2 text-lg font-semibold">
                      {article.title}
                    </h3>
                    <time dateTime={article.dateTime} className="text-muted-foreground text-xs">
                      {article.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* SECTIE 5 — Hotels (soft affiliate) */}
      {location.hotels.length > 0 ? (
        <section aria-labelledby="hotels-heading" className="bg-sun-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="space-y-1">
              <h2 id="hotels-heading" className="text-2xl md:text-3xl">
                Waar te verblijven in {location.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                Gecureerd door onze redactie — geen algoritme
              </p>
            </header>
            <ul className="grid gap-6 md:grid-cols-3">
              {location.hotels.map((hotel) => (
                <li key={hotel.name}>
                  <article className="border-border bg-card flex h-full flex-col overflow-hidden rounded-xl border shadow-sm">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={hotel.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      {hotel.badge ? (
                        <Badge className="absolute top-3 left-3" variant="secondary">
                          {hotel.badge}
                        </Badge>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div>
                        <h3 className="font-semibold">{hotel.name}</h3>
                        <p className="text-muted-foreground text-sm">{hotel.location}</p>
                      </div>
                      <p className="text-muted-foreground flex items-center gap-1 text-xs">
                        <span className="flex" aria-label={`${hotel.stars} sterren`}>
                          {Array.from({ length: hotel.stars }).map((_, i) => (
                            <Star key={i} className="size-3 fill-current" aria-hidden="true" />
                          ))}
                        </span>
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Vanaf{' '}
                        <span className="text-foreground font-medium">€{hotel.priceFrom}</span> per
                        nacht
                      </p>
                      <Button asChild variant="ghost" size="sm" className="mt-auto w-fit">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                        >
                          Bekijk hotel
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            <Link
              href="/deals/hotels"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              Meer hotels bekijken
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      ) : null}

      {/* SECTIE 6 — Nabijgelegen bestemmingen */}
      {location.nearby.length > 0 ? (
        <section aria-labelledby="nearby-heading" className="bg-background py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="space-y-1">
              <h2 id="nearby-heading" className="text-2xl md:text-3xl">
                In de buurt
              </h2>
              <p className="text-muted-foreground text-sm">
                Combineer {location.name} met deze plekken
              </p>
            </header>
            <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
              {location.nearby.map((place) => (
                <li key={place.slug} className="w-[280px] shrink-0 snap-start md:w-auto">
                  <Link
                    href={`/bestemmingen/${place.slug}`}
                    className="group border-border bg-card focus-visible:ring-ring block overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={place.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 280px, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 left-3" variant="secondary">
                        {locationTypeLabels[place.locationType]}
                      </Badge>
                    </div>
                    <div className="space-y-2 p-4">
                      <h3 className="text-lg font-semibold">{place.name}</h3>
                      <p className="text-muted-foreground line-clamp-2 text-sm">{place.teaser}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* SECTIE 7 — Exit */}
      <section aria-labelledby="exit-heading" className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-2xl space-y-6 px-6 text-center">
          <h2 id="exit-heading" className="text-2xl md:text-3xl">
            Verder ontdekken
          </h2>
          <p className="text-muted-foreground text-sm">
            Terug naar het overzicht of bekijk routes die {location.name} combineren met andere
            highlights.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link href="/bestemmingen">
                <ArrowLeft aria-hidden="true" />
                Alle bestemmingen
              </Link>
            </Button>
            <Button asChild>
              <Link href="/routes">
                Bekijk routes
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
