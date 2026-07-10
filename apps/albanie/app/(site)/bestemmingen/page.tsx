import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Instagram, MapPin, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Badge, Button } from '@odyssey/ui';

// ---------------------------------------------------------------------------
// Placeholder data — replace with CMS queries when wiring up the page
// Maps to packages/cms/src/schema/types/location.ts
// ---------------------------------------------------------------------------

type LocationType = 'city' | 'beach' | 'region' | 'mountain' | 'lake' | 'river' | 'other';

const INSTAGRAM_URL = 'https://www.instagram.com/albanie_reizen/';

const locationTypeLabels: Record<LocationType, string> = {
  city: 'Stad',
  beach: 'Strand',
  region: 'Regio',
  mountain: 'Bergen',
  lake: 'Meer',
  river: 'Rivier',
  other: 'Overig',
};

const hubIntro = {
  eyebrow: 'Bestemmingen · Albanië',
  title: 'Waar wil je naartoe?',
  subtitle:
    'Van Ottomanse steden tot verborgen baaien — handgeplukt door onze redactie, niet alfabetisch gesorteerd.',
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80',
  imageAlt: 'Panorama over een historische Albanese stad',
  locationCount: 24,
  regionCount: 6,
  updatedLabel: 'Bijgewerkt juli 2026',
};

const locations = [
  {
    slug: 'berat',
    name: 'Berat',
    locationType: 'city' as const,
    teaser: 'De stad van duizend ramen — UNESCO-werelderfgoed vol Ottomanse charme.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    featuredOnHub: true,
    editorsChoice: true,
  },
  {
    slug: 'tirana',
    name: 'Tirana',
    locationType: 'city' as const,
    teaser: 'Kleurrijke hoofdstad waar communistisch verleden en hippe cafécultuur samenkomen.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'gjirokaster',
    name: 'Gjirokastër',
    locationType: 'city' as const,
    teaser: 'Ste stad op de heuvel met een imposant kasteel en authentieke stenen huizen.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: true,
  },
  {
    slug: 'shkoder',
    name: 'Shkodër',
    locationType: 'city' as const,
    teaser: 'Poort naar het noorden — levendig stadscentrum aan het meer van Shkodra.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'ksamil',
    name: 'Ksamil',
    locationType: 'beach' as const,
    teaser: 'Kristalhelder water en eilandjes — de Caraïben van Europa, zonder jetlag.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: true,
  },
  {
    slug: 'saranda',
    name: 'Sarandë',
    locationType: 'beach' as const,
    teaser: 'Levendige kuststad met restaurants, stranden en Butrint op steenworp afstand.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'dhermi',
    name: 'Dhërmi',
    locationType: 'beach' as const,
    teaser: 'Rustiger kustdorp met turquoise baaien — favoriet onder locals.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'himara',
    name: 'Himarë',
    locationType: 'beach' as const,
    teaser: "Charmant kustplaatsje met authentieke taverna's en minder drukte dan Sarandë.",
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'riviera',
    name: 'Albanese Riviera',
    locationType: 'region' as const,
    teaser: 'De iconische kuststrook van Llogara tot Ksamil — perfect voor een roadtrip.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    featuredOnHub: false,
    editorsChoice: false,
    childLocations: ['Dhërmi', 'Himarë', 'Sarandë', 'Ksamil'],
  },
  {
    slug: 'albanese-alpen',
    name: 'Albanese Alpen',
    locationType: 'region' as const,
    teaser: 'Ruige bergen, diepe dalen en traditionele dorpen — avontuur op de Balkan.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    featuredOnHub: false,
    editorsChoice: false,
    childLocations: ['Theth', 'Valbona', 'Shkodër'],
  },
  {
    slug: 'theth',
    name: 'Theth',
    locationType: 'mountain' as const,
    teaser: 'Het meest iconische bergdorp — startpunt voor de beroemde Valbona-trek.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: true,
  },
  {
    slug: 'valbona',
    name: 'Valbona',
    locationType: 'mountain' as const,
    teaser: 'Adembenemend dal aan het einde van de klassieke meerdaagse wandeling.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'llogara',
    name: 'Llogara Pass',
    locationType: 'mountain' as const,
    teaser: 'Spectaculaire bergpas met uitzicht over de Riviera — een must op elke roadtrip.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'shkodra-meer',
    name: 'Meer van Shkodra',
    locationType: 'lake' as const,
    teaser: 'Grootste meer van de Balkan — ideaal voor vogels kijken en rustige dagen.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'ohrid',
    name: 'Lake Ohrid',
    locationType: 'lake' as const,
    teaser: 'Kristalhelder merenplateau op de grens — combineer Albanië met Noord-Macedonië.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
  {
    slug: 'vjosë',
    name: 'Vjosë-vallei',
    locationType: 'river' as const,
    teaser: 'Een van de laatste wilde rivieren van Europa — raften en natuur in één.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    featuredOnHub: false,
    editorsChoice: false,
  },
] as const;

type Location = (typeof locations)[number];

const chapters = [
  {
    id: 'city',
    title: 'Steden & cultuur',
    intro: 'Historische centra, levendige hoofdsteden en UNESCO-steden.',
    types: ['city'] as LocationType[],
  },
  {
    id: 'beach',
    title: 'Strand & kust',
    intro: 'Ionische baaien, turquoise water en dorpjes langs de kust.',
    types: ['beach'] as LocationType[],
  },
  {
    id: 'mountain',
    title: 'Bergen & trails',
    intro: 'Alpen, wandelingen en authentieke bergdorpen.',
    types: ['mountain'] as LocationType[],
  },
  {
    id: 'water',
    title: 'Meren & rivieren',
    intro: 'Natuur, rust en koelte — perfect na een hete kustdag.',
    types: ['lake', 'river'] as LocationType[],
  },
] as const;

const featuredLocation = locations.find((l) => l.featuredOnHub) ?? locations[0];

const regionLocations = locations.filter((l) => l.locationType === 'region');

const routeTeasers = [
  {
    slug: 'riviera-roadtrip',
    title: 'Albanese Riviera roadtrip',
    days: 5,
    stops: 8,
    stopPreview: ['Llogara', 'Dhërmi', 'Himara', 'Ksamil'],
  },
  {
    slug: 'bergen-theth-valbona',
    title: 'Theth naar Valbona trek',
    days: 3,
    stops: 4,
    stopPreview: ['Theth', 'Valbona', 'Shkodër'],
  },
  {
    slug: 'steden-cultuur',
    title: 'UNESCO-steden route',
    days: 4,
    stops: 5,
    stopPreview: ['Tirana', 'Berat', 'Gjirokastër'],
  },
];

const blogArticles = [
  {
    slug: '10-verborgen-stranden',
    title: '10 verborgen stranden langs de Albanese kust',
    category: 'Bestemmingen',
    date: '8 juli 2026',
    dateTime: '2026-07-08',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  },
  {
    slug: 'theth-wandelen',
    title: 'Wandelen in Theth: onze favoriete dagroutes',
    category: 'Tips',
    date: '1 juli 2026',
    dateTime: '2026-07-01',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
  {
    slug: 'berat-weekend',
    title: 'Berat in een weekend: onze route door de stad van duizend ramen',
    category: 'Lijstjes',
    date: '28 juni 2026',
    dateTime: '2026-06-28',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
];

const trustBlocks = [
  {
    icon: MapPin,
    title: 'Zelf bezocht',
    text: 'Elke plek op deze pagina is door ons team of betrouwbare locals gecheckt.',
  },
  {
    icon: ShieldCheck,
    title: 'Geen pay-to-play',
    text: 'Volgorde is redactioneel — geen gesponsorde plekken in dit overzicht.',
  },
  {
    icon: Users,
    title: 'Blijft actueel',
    text: 'We werken guides bij zodra routes, prijzen of tips veranderen.',
  },
];

const indexGroups = [
  { id: 'index-city', title: 'Steden', types: ['city'] as LocationType[] },
  { id: 'index-beach', title: 'Strand & kust', types: ['beach'] as LocationType[] },
  { id: 'index-region', title: "Regio's", types: ['region'] as LocationType[] },
  { id: 'index-mountain', title: 'Bergen', types: ['mountain'] as LocationType[] },
  { id: 'index-water', title: 'Meren & rivieren', types: ['lake', 'river'] as LocationType[] },
] as const;

function locationsByTypes(types: LocationType[], limit?: number): Location[] {
  const filtered = locations.filter((l) => types.includes(l.locationType));
  return limit ? filtered.slice(0, limit) : filtered;
}

function LocationCard({
  location,
  showEditorsChoice = true,
}: {
  location: Location;
  showEditorsChoice?: boolean;
}) {
  return (
    <Link
      href={`/bestemmingen/${location.slug}`}
      className="group border-border bg-card focus-visible:ring-ring block overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={location.image}
          alt=""
          fill
          sizes="(max-width: 768px) 280px, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge variant="secondary">{locationTypeLabels[location.locationType]}</Badge>
          {showEditorsChoice && location.editorsChoice ? (
            <Badge variant="outline" className="bg-card/90">
              Onze keuze
            </Badge>
          ) : null}
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold">{location.name}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">{location.teaser}</p>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BestemmingenPage() {
  return (
    <main>
      {/* SECTIE 1 — Hub-intro */}
      <section aria-labelledby="hub-heading" className="border-border border-b">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div className="space-y-5">
            <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
              {hubIntro.eyebrow}
            </p>
            <h1 id="hub-heading" className="text-3xl md:text-4xl lg:text-5xl">
              {hubIntro.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{hubIntro.subtitle}</p>
            <p className="text-muted-foreground text-sm">
              {hubIntro.locationCount} plekken · {hubIntro.regionCount} regio&apos;s ·{' '}
              {hubIntro.updatedLabel}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-[16/10]">
            <Image
              src={hubIntro.image}
              alt={hubIntro.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTIE 2 — Start hier: uitgelichte bestemming */}
      <section aria-labelledby="featured-heading" className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-primary mb-6 text-xs font-medium tracking-[0.2em] uppercase">
            Start hier
          </p>
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto md:min-h-[360px]">
              <Image
                src={featuredLocation.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  {locationTypeLabels[featuredLocation.locationType]}
                </Badge>
                <Badge variant="outline">Meest gezocht door onze lezers</Badge>
              </div>
              <h2 id="featured-heading" className="text-3xl md:text-4xl">
                {featuredLocation.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{featuredLocation.teaser}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nog niet zeker? Berat is onze favoriete instapbestemming: compact genoeg voor een
                weekend, rijk genoeg voor een week — en de perfecte mix van cultuur, eten en
                dagtrips.
              </p>
              <Button asChild size="lg">
                <Link href={`/bestemmingen/${featuredLocation.slug}`}>
                  Ontdek {featuredLocation.name}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 3 — Ontdek per type (redactionele chapters) */}
      {chapters.map((chapter, chapterIndex) => {
        const chapterLocations = locationsByTypes([...chapter.types], 4);
        if (chapterLocations.length === 0) return null;

        return (
          <section
            key={chapter.id}
            id={`chapter-${chapter.id}`}
            aria-labelledby={`chapter-${chapter.id}-heading`}
            className={
              chapterIndex % 2 === 0 ? 'bg-background py-12 md:py-16' : 'bg-card py-12 md:py-16'
            }
          >
            <div className="mx-auto max-w-6xl space-y-8 px-6">
              <header className="max-w-2xl space-y-2">
                <h2 id={`chapter-${chapter.id}-heading`} className="text-2xl md:text-3xl">
                  {chapter.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{chapter.intro}</p>
              </header>

              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {chapterLocations.map((location) => (
                  <li key={location.slug}>
                    <LocationCard location={location} />
                  </li>
                ))}
              </ul>

              <Link
                href={`#index-${chapter.id === 'water' ? 'water' : chapter.id}`}
                className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
              >
                Alle {chapter.title.toLowerCase()} bekijken
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        );
      })}

      {/* SECTIE 4 — Regio's in context */}
      {regionLocations.length > 0 ? (
        <section aria-labelledby="regions-heading" className="bg-muted py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="space-y-1">
              <h2 id="regions-heading" className="text-2xl md:text-3xl">
                Verken per regio
              </h2>
              <p className="text-muted-foreground text-sm">
                Combineer steden, stranden en natuur in één trip
              </p>
            </header>

            <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">
              {regionLocations.map((region) => (
                <li key={region.slug} className="w-[320px] shrink-0 snap-start md:w-auto">
                  <Link
                    href={`/bestemmingen/${region.slug}`}
                    className="group border-border bg-card focus-visible:ring-ring block overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={region.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 320px, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 left-3" variant="secondary">
                        Regio
                      </Badge>
                    </div>
                    <div className="space-y-3 p-5">
                      <h3 className="text-xl font-semibold">{region.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {region.teaser}
                      </p>
                      {'childLocations' in region && region.childLocations ? (
                        <p className="text-muted-foreground text-xs">
                          O.a. {region.childLocations.join(' · ')}
                        </p>
                      ) : null}
                      <span className="text-primary inline-flex items-center gap-1 text-sm font-medium">
                        Bekijk regio
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* SECTIE 5 — Routes-koppeling */}
      <section aria-labelledby="routes-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="mx-auto max-w-2xl space-y-2 text-center">
            <h2 id="routes-heading" className="text-2xl md:text-3xl">
              Meerdere plekken in één reis?
            </h2>
            <p className="text-muted-foreground text-sm">
              Onze redactie-routes verbinden de mooiste stops
            </p>
          </header>

          <ul className="grid gap-6 md:grid-cols-3">
            {routeTeasers.map((route) => (
              <li key={route.slug}>
                <Link
                  href={`/routes/${route.slug}`}
                  className="group border-border bg-card focus-visible:ring-ring block h-full rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <p className="text-muted-foreground mb-3 text-xs">
                    {route.days} dagen · {route.stops} stops
                  </p>
                  <h3 className="mb-3 text-lg font-semibold">{route.title}</h3>
                  <p className="text-muted-foreground mb-4 flex flex-wrap items-center gap-2 text-sm">
                    {route.stopPreview.map((stop, index) => (
                      <span key={stop} className="inline-flex items-center gap-2">
                        <span>{stop}</span>
                        {index < route.stopPreview.length - 1 ? (
                          <span
                            className="border-muted-foreground/40 w-4 border-t border-dashed"
                            aria-hidden="true"
                          />
                        ) : null}
                      </span>
                    ))}
                  </p>
                  <span className="text-primary inline-flex items-center gap-1 text-sm font-medium">
                    Bekijk route
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/routes"
              className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
            >
              Alle routes
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTIE 6 — Blog-koppeling */}
      <section aria-labelledby="blog-heading" className="bg-card py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1">
            <h2 id="blog-heading" className="text-2xl md:text-3xl">
              Lees eerst
            </h2>
            <p className="text-muted-foreground text-sm">
              Praktische tips en verhalen bij onze bestemmingen
            </p>
          </header>

          <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
            {blogArticles.map((article) => (
              <li key={article.slug} className="w-[300px] shrink-0 snap-start md:w-auto">
                <Link
                  href={`/blog/${article.slug}`}
                  className="group border-border bg-background focus-visible:ring-ring block overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 300px, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <Badge variant="ghost" className="px-0">
                      {article.category}
                    </Badge>
                    <h3 className="line-clamp-2 text-lg font-semibold">{article.title}</h3>
                    <time dateTime={article.dateTime} className="text-muted-foreground text-xs">
                      {article.date}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTIE 7 — Selectiecriteria */}
      <section aria-labelledby="trust-heading" className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <h2 id="trust-heading" className="text-center text-2xl md:text-3xl">
            Hoe we bestemmingen kiezen
          </h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {trustBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <li key={block.title} className="space-y-3 text-center">
                  <div className="bg-primary/10 text-primary mx-auto flex size-12 items-center justify-center rounded-full">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{block.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SECTIE 8 — Compacte index */}
      <section aria-labelledby="index-heading" className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <header className="space-y-1">
            <h2 id="index-heading" className="text-2xl md:text-3xl">
              Alle bestemmingen
            </h2>
            <p className="text-muted-foreground text-sm">Snel naar een specifieke plek</p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {indexGroups.map((group) => {
              const groupLocations = locationsByTypes([...group.types]);
              if (groupLocations.length === 0) return null;

              return (
                <div key={group.id} id={group.id}>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {groupLocations.map((location) => (
                      <li key={location.slug}>
                        <Link
                          href={`/bestemmingen/${location.slug}`}
                          className="text-primary hover:text-primary/80 focus-visible:ring-ring text-sm underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
                        >
                          {location.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTIE 9 — Zachte exit */}
      <section aria-labelledby="exit-heading" className="bg-brand-700 py-16 md:py-20">
        <div className="mx-auto max-w-xl space-y-6 px-6 text-center">
          <Sparkles className="text-brand-200 mx-auto size-6" aria-hidden="true" />
          <h2 id="exit-heading" className="text-brand-50 text-2xl md:text-3xl">
            Nog niet zeker waar je heen wilt?
          </h2>
          <p className="text-brand-100 text-sm leading-relaxed">
            Volg ons op Instagram voor dagelijkse inspiratie — of schrijf je in voor maandelijkse
            tips.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Volg ons op Instagram
                <Instagram className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-400 text-brand-50 hover:bg-brand-600/50 hover:text-brand-50"
            >
              <Link href="/#nieuwsbrief">
                Nieuwsbrief
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
