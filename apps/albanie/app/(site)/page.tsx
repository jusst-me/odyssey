import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  ExternalLink,
  Instagram,
  MapPin,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  Users,
} from 'lucide-react';
import { Badge, Button, Input } from '@odyssey/ui';

// ---------------------------------------------------------------------------
// Placeholder data — replace with CMS / feed queries when wiring up the page
// ---------------------------------------------------------------------------

const INSTAGRAM_HANDLE = 'albanie_reizen';
const INSTAGRAM_URL = 'https://www.instagram.com/albanie_reizen/';
const INSTAGRAM_FOLLOWERS = '48K';
const INSTAGRAM_COUNTRIES = 12;

const hero = {
  eyebrow: 'Reisgids Albanië',
  title: 'Ontdek Albanië zoals wij het zien',
  subtitle:
    'Persoonlijke tips, routes en verborgen plekken — samengesteld door onze redactie, niet door een algoritme.',
  image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80',
  imageAlt: 'Uitzicht over de Albanese kust bij zonsondergang',
  updatedLabel: 'Bijgewerkt juli 2026',
};

const instagramPosts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    alt: 'Kleurrijke huizen in Berat',
    location: 'Berat',
    href: '/bestemmingen/berat',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    alt: 'Turquoise water bij Ksamil',
    location: 'Ksamil',
    href: '/bestemmingen/ksamil',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    alt: 'Berglandschap in Theth',
    location: 'Theth',
    href: '/bestemmingen/theth',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    alt: 'Historisch centrum van Gjirokastër',
    location: 'Gjirokastër',
    href: '/bestemmingen/gjirokaster',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    alt: 'Meer bij Shkodër',
    location: null,
    href: INSTAGRAM_URL,
    external: true,
  },
];

const wayfindingTiles = [
  {
    title: 'Bestemmingen',
    description: 'Steden, stranden en natuur — alles op één plek',
    href: '/bestemmingen',
    icon: MapPinned,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&q=80',
  },
  {
    title: 'Routes',
    description: 'Dagtrips en meerdaagse routes van onze redactie',
    href: '/routes',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80',
  },
  {
    title: 'Blog',
    description: 'Tips, lijstjes en verhalen uit het land',
    href: '/blog',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80',
  },
  {
    title: 'Deals',
    description: 'Gecureerde hotels, activiteiten en autoverhuur',
    href: '/deals',
    icon: Tag,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
  },
];

const featuredDestinations = [
  {
    slug: 'berat',
    name: 'Berat',
    type: 'Stad' as const,
    teaser: 'De stad van duizend ramen — UNESCO-werelderfgoed vol Ottomanse charme.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    editorsChoice: true,
  },
  {
    slug: 'ksamil',
    name: 'Ksamil',
    type: 'Strand' as const,
    teaser: 'Kristalhelder water en eilandjes — de Caraïben van Europa, zonder jetlag.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    editorsChoice: true,
  },
  {
    slug: 'theth',
    name: 'Theth',
    type: 'Natuur' as const,
    teaser: 'Ruige bergen, watervallen en traditionele guesthouses in het Albanese Alpengebied.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    editorsChoice: false,
  },
  {
    slug: 'tirana',
    name: 'Tirana',
    type: 'Stad' as const,
    teaser: 'Kleurrijke hoofdstad waar communistisch verleden en hippe cafécultuur samenkomen.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    editorsChoice: false,
  },
];

const featuredRoute = {
  slug: 'riviera-roadtrip',
  title: 'Albanese Riviera roadtrip',
  days: 5,
  stops: 8,
  difficulty: 'Gemiddeld' as const,
  intro:
    'Van Llogara Pass tot de Ionische kust — deze route combineert adembenemende uitzichten met authentieke dorpjes. Ideaal voor koppels en vriendengroepen die flexibel willen reizen. Beste seizoen: mei–september.',
  image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
  stopPreview: ['Llogara', 'Dhërmi', 'Himara', 'Porto Palermo'],
};

const blogArticles = [
  {
    slug: '10-verborgen-stranden',
    title: '10 verborgen stranden langs de Albanese kust',
    category: 'Lijstjes',
    date: '8 juli 2026',
    dateTime: '2026-07-08',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  },
  {
    slug: 'geld-omwisselen-albanie',
    title: 'Geld omwisselen in Albanië: wat je moet weten',
    category: 'Praktisch',
    date: '5 juli 2026',
    dateTime: '2026-07-05',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  },
  {
    slug: 'theth-wandelen',
    title: 'Wandelen in Theth: onze favoriete dagroutes',
    category: 'Tips',
    date: '1 juli 2026',
    dateTime: '2026-07-01',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
];

const blogCategories = ['Alle', 'Tips', 'Lijstjes', 'Praktisch'] as const;

const hotelDeals = [
  {
    name: 'Hotel Butrinti',
    location: 'Sarandë, Albanië',
    stars: 4,
    priceFrom: 89,
    badge: 'Onze Keuze' as const,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/hotel-butrinti',
  },
  {
    name: 'Guesthouse Theth',
    location: 'Theth, Albanië',
    stars: 3,
    priceFrom: 45,
    badge: null,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/guesthouse-theth',
  },
  {
    name: 'Hotel Berati',
    location: 'Berat, Albanië',
    stars: 3,
    priceFrom: 62,
    badge: 'Budget Tip' as const,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/hotel-berati',
  },
];

const activityDeals = [
  {
    title: 'Boottocht naar Blue Eye & Gjirokastër',
    duration: '8 uur',
    priceFrom: 65,
    badge: 'Populair' as const,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/blue-eye-tour',
  },
  {
    title: 'Kajakken bij Ksamil-eilanden',
    duration: '3 uur',
    priceFrom: 35,
    badge: null,
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/ksamil-kayak',
  },
  {
    title: 'Food tour door Tirana',
    duration: '4 uur',
    priceFrom: 49,
    badge: 'Tip van de redactie' as const,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/tirana-food',
  },
];

const trustBlocks = [
  {
    icon: MapPin,
    title: 'Echt getest',
    text: 'Alles wat we aanbevelen hebben we zelf bezocht of gecheckt met locals.',
  },
  {
    icon: ShieldCheck,
    title: 'Geen gesponsorde rankings',
    text: 'Affiliate-links zijn transparant — onze volgorde is redactioneel.',
  },
  {
    icon: Users,
    title: 'Instagram-community',
    text: `${INSTAGRAM_FOLLOWERS} reizigers inspireren we dagelijks met echte beelden uit Albanië.`,
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <main>
      {/* SECTIE 1 — Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative flex min-h-[70vh] items-end md:min-h-[75vh]"
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-neutral-950/10"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-16 md:pb-20">
          <div className="max-w-2xl space-y-6 text-left">
            <p className="text-primary-foreground/80 text-xs font-medium tracking-[0.2em] uppercase">
              {hero.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl"
            >
              {hero.title}
            </h1>
            <p className="text-primary-foreground/90 max-w-xl text-lg leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" variant="accent">
                <Link href="/bestemmingen">
                  Bekijk bestemmingen
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Link
                href="/routes"
                className="text-primary-foreground hover:text-primary-foreground/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none"
              >
                Bekijk onze routes
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <Badge
          variant="secondary"
          className="absolute right-6 bottom-24 z-10 hidden bg-neutral-950/60 text-neutral-50 backdrop-blur-sm sm:inline-flex md:bottom-28"
        >
          {hero.updatedLabel}
        </Badge>
        <a
          href="#instagram"
          className="text-primary-foreground/70 hover:text-primary-foreground focus-visible:ring-ring absolute bottom-6 left-1/2 z-10 -translate-x-1/2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none"
          aria-label="Scroll naar volgende sectie"
        >
          <ChevronDown className="size-6 animate-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* SECTIE 2 — Instagram social proof */}
      <section
        id="instagram"
        aria-labelledby="instagram-heading"
        className="bg-muted py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-2 text-center md:text-left">
            <h2 id="instagram-heading" className="text-2xl md:text-3xl">
              Volg ons op Instagram —{' '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
              >
                @{INSTAGRAM_HANDLE}
              </a>
            </h2>
            <p className="text-muted-foreground text-sm">
              {INSTAGRAM_FOLLOWERS} volgers · {INSTAGRAM_COUNTRIES} landen ontdekt
            </p>
          </header>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {instagramPosts.map((post) => (
              <li key={post.id}>
                <a
                  href={post.external ? post.href : post.href}
                  {...(post.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group focus-visible:ring-ring relative block aspect-square overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {post.location ? (
                    <span className="absolute inset-x-0 bottom-0 bg-neutral-950/70 px-3 py-2 text-xs font-medium text-neutral-50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      {post.location}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center md:text-left">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
            >
              Meer inspiratie op Instagram
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTIE 3 — Wayfinding */}
      <section aria-labelledby="wayfinding-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <h2 id="wayfinding-heading" className="text-2xl md:text-3xl">
            Waar ben je naar op zoek?
          </h2>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {wayfindingTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <li key={tile.href}>
                  <Link
                    href={tile.href}
                    className="group border-border bg-card focus-visible:ring-ring relative flex h-full flex-col overflow-hidden rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <div className="absolute inset-0 opacity-20" aria-hidden="true">
                      <Image
                        src={tile.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="scale-110 object-cover blur-sm"
                      />
                    </div>
                    <div className="relative flex flex-1 flex-col gap-3">
                      <Icon className="text-primary size-6" aria-hidden="true" />
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">{tile.title}</h3>
                        <p className="text-muted-foreground text-sm leading-snug">
                          {tile.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="text-muted-foreground mt-auto size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SECTIE 4 — Uitgelichte bestemmingen */}
      <section aria-labelledby="destinations-heading" className="bg-card py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1">
            <h2 id="destinations-heading" className="text-2xl md:text-3xl">
              Onze favoriete plekken
            </h2>
            <p className="text-muted-foreground text-sm">
              Handgeplukt door de redactie — niet gesponsord
            </p>
          </header>

          <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
            {featuredDestinations.map((destination) => (
              <li key={destination.slug} className="w-[280px] shrink-0 snap-start md:w-auto">
                <Link
                  href={`/bestemmingen/${destination.slug}`}
                  className="group border-border bg-background focus-visible:ring-ring block overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={destination.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 280px, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">{destination.type}</Badge>
                      {destination.editorsChoice ? (
                        <Badge variant="outline" className="bg-card/90">
                          Onze Keuze
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {destination.teaser}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/bestemmingen"
            className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
          >
            Alle bestemmingen bekijken
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* SECTIE 5 — Uitgelichte route */}
      <section aria-labelledby="route-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="route-heading" className="mb-8 text-2xl md:mb-10 md:text-3xl">
            Route van de week
          </h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto md:min-h-[420px]">
              <Image
                src={featuredRoute.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-5">
              <p className="text-muted-foreground text-sm">
                {featuredRoute.days} dagen · {featuredRoute.stops} stops · Moeilijkheid:{' '}
                {featuredRoute.difficulty.toLowerCase()}
              </p>
              <h3 className="text-3xl">{featuredRoute.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{featuredRoute.intro}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {featuredRoute.stopPreview.map((stop, index) => (
                  <span key={stop} className="inline-flex items-center gap-2">
                    <span className="font-medium">{stop}</span>
                    {index < featuredRoute.stopPreview.length - 1 ? (
                      <span
                        className="text-muted-foreground border-muted-foreground/40 w-6 border-t border-dashed"
                        aria-hidden="true"
                      />
                    ) : null}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline">
                <Link href={`/routes/${featuredRoute.slug}`}>
                  Bekijk de volledige route
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 6 — Blog-teasers */}
      <section aria-labelledby="blog-heading" className="bg-card py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-4">
            <h2 id="blog-heading" className="text-2xl md:text-3xl">
              Laatste van de blog
            </h2>
            <ul className="flex flex-wrap gap-2" role="list">
              {blogCategories.map((category, index) => (
                <li key={category}>
                  <span
                    className={
                      index === 0
                        ? 'bg-primary text-primary-foreground inline-flex rounded-full px-3 py-1 text-xs font-medium'
                        : 'bg-muted text-muted-foreground inline-flex rounded-full px-3 py-1 text-xs font-medium'
                    }
                  >
                    {category}
                  </span>
                </li>
              ))}
            </ul>
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

          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
          >
            Alle artikelen
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* SECTIE 7 — Hotels (soft affiliate) */}
      <section aria-labelledby="hotels-heading" className="bg-sun-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1">
            <h2 id="hotels-heading" className="text-2xl md:text-3xl">
              Waar te verblijven
            </h2>
            <p className="text-muted-foreground text-sm">
              Gecureerde hotels door onze redactie — geen algoritme
            </p>
          </header>

          <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
            {hotelDeals.map((hotel) => (
              <li key={hotel.name} className="w-[280px] shrink-0 snap-start md:w-auto">
                <article className="border-border bg-card flex h-full flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={hotel.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 280px, 33vw"
                      className="object-cover"
                    />
                    {hotel.badge ? (
                      <Badge className="absolute top-3 left-3" variant="secondary">
                        {hotel.badge}
                      </Badge>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <div className="space-y-1">
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
                      Vanaf <span className="text-foreground font-medium">€{hotel.priceFrom}</span>{' '}
                      per nacht
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
            className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
          >
            Meer hotels bekijken
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* SECTIE 8 — Activiteiten (soft affiliate) */}
      <section aria-labelledby="activities-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1">
            <h2 id="activities-heading" className="text-2xl md:text-3xl">
              Activiteiten &amp; tours
            </h2>
            <p className="text-muted-foreground text-sm">Ervaar Albanië — onze redactie selectie</p>
          </header>

          <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
            {activityDeals.map((activity) => (
              <li key={activity.title} className="w-[280px] shrink-0 snap-start md:w-auto">
                <article className="border-border bg-card flex h-full flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={activity.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 280px, 33vw"
                      className="object-cover"
                    />
                    {activity.badge ? (
                      <Badge className="absolute top-3 left-3" variant="secondary">
                        {activity.badge}
                      </Badge>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <h3 className="line-clamp-2 font-semibold">{activity.title}</h3>
                    <p className="text-muted-foreground text-xs">{activity.duration}</p>
                    <p className="text-muted-foreground text-sm">
                      Vanaf{' '}
                      <span className="text-foreground font-medium">€{activity.priceFrom}</span>
                    </p>
                    <Button asChild variant="ghost" size="sm" className="mt-auto w-fit">
                      <a
                        href={activity.affiliateUrl}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                      >
                        Meer info
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <Link
            href="/deals/activiteiten"
            className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
          >
            Alle activiteiten
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* SECTIE 9 — Trust block */}
      <section aria-labelledby="trust-heading" className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-xl space-y-10 px-6 text-center">
          <h2 id="trust-heading" className="text-2xl md:text-3xl">
            Waarom wij?
          </h2>
          <ul className="space-y-8">
            {trustBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <li key={block.title} className="space-y-2">
                  <div className="bg-primary/10 text-primary mx-auto flex size-12 items-center justify-center rounded-full">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{block.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
                </li>
              );
            })}
          </ul>
          <blockquote className="border-border text-muted-foreground border-l-2 pl-4 text-left text-sm italic">
            &ldquo;Dankzij jullie tips hebben we plekken gevonden die geen enkele reisgids
            noemt.&rdquo;
            <footer className="text-muted-foreground mt-2 not-italic">— Instagram-reactie</footer>
          </blockquote>
        </div>
      </section>

      {/* SECTIE 10 — Nieuwsbrief */}
      <section
        id="nieuwsbrief"
        aria-labelledby="newsletter-heading"
        className="bg-brand-700 py-16 md:py-20"
      >
        <div className="mx-auto max-w-xl space-y-6 px-6 text-center">
          <div className="space-y-2">
            <Sparkles className="text-brand-200 mx-auto size-6" aria-hidden="true" />
            <h2 id="newsletter-heading" className="text-brand-50 text-2xl md:text-3xl">
              Blijf op de hoogte
            </h2>
            <p className="text-brand-100 text-sm leading-relaxed">
              Maandelijkse tips, nieuwe routes en verborgen plekken — recht in je inbox.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row sm:items-start" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              E-mailadres
            </label>
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="jouw@email.nl"
              className="border-brand-500 bg-brand-800/50 text-brand-50 placeholder:text-brand-200/70 focus-visible:ring-brand-300 flex-1"
            />
            <Button type="submit" variant="accent" size="lg" className="shrink-0">
              Inschrijven
            </Button>
          </form>

          <p className="text-brand-200 text-xs">
            Geen spam. Afmelden kan altijd.{' '}
            <Link
              href="/privacy"
              className="text-brand-50 hover:text-brand-100 focus-visible:ring-brand-300 underline underline-offset-2 focus-visible:ring-2 focus-visible:outline-none"
            >
              Privacybeleid
            </Link>
          </p>

          <p className="text-brand-100 text-sm">
            Of{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 hover:text-brand-100 focus-visible:ring-brand-300 inline-flex items-center gap-1 font-medium underline underline-offset-2 focus-visible:ring-2 focus-visible:outline-none"
            >
              volg ons op Instagram
              <Instagram className="size-4" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
