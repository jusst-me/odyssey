import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Badge, Button } from '@odyssey/ui';

// ---------------------------------------------------------------------------
// Placeholder data — replace with CMS queries (article schema)
// ---------------------------------------------------------------------------

type ArticleCategory = 'Tips' | 'Lijstjes' | 'Praktisch' | 'Bestemmingen';

type ArticleBodySection = {
  id: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

type ArticleDetail = {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  dateTime: string;
  readTime: string;
  updatedLabel: string;
  heroImage: string;
  heroImageAlt: string;
  lead: string;
  sections: ArticleBodySection[];
  relatedLocations: { slug: string; name: string }[];
  relatedArticles: {
    slug: string;
    title: string;
    category: ArticleCategory;
    date: string;
    dateTime: string;
  }[];
};

const articleDetails: Record<string, ArticleDetail> = {
  '10-verborgen-stranden': {
    slug: '10-verborgen-stranden',
    title: '10 verborgen stranden langs de Albanese kust',
    category: 'Lijstjes',
    date: '8 juli 2026',
    dateTime: '2026-07-08',
    readTime: '9 min',
    updatedLabel: 'Bijgewerkt juli 2026',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    heroImageAlt: 'Turquoise water en rotsen langs de Albanese kust',
    lead: 'Iedereen kent Ksamil — maar de Albanese Riviera heeft tientallen baaien waar je in juli nog een handdoek kwijt kunt. Dit zijn onze favorieten, getest op rust, bereikbaarheid en waterkwaliteit.',
    sections: [
      {
        id: 'intro',
        title: 'Waarom verder kijken dan Ksamil?',
        paragraphs: [
          'Ksamil is prachtig, maar in augustus voelt het soms als Ibiza-light. Een half uur rijden verder vind je baaien waar je de enige bent — of de enige foreigner, in ieder geval.',
          'We hebben deze lijst samengesteld over meerdere reizen, steeds buiten schoolvakanties in NL én lokale feestdagen. Minder drukte maakt een enorm verschil.',
        ],
      },
      {
        id: 'lijst',
        title: 'Onze 10 favorieten',
        paragraphs: ['Van noord naar zuid — combineer ze makkelijk met een roadtrip langs de SH8.'],
        listItems: [
          'Gjipe Beach — alleen te voet of met 4x4; adembenemende kloofstrand.',
          'Jale Beach — jongere crowd, maar ruim genoeg plek buiten augustus.',
          'Borsh — lange kiezelstrand met taverna direct aan zee.',
          'Qeparo — boven- en onderstad; rustiger alternatief voor Himarë.',
          'Lukovë — locals-only vibe; neem eigen snacks mee.',
          'Krorez Bay — wandeltoegang via Dhermi; beloning na 20 min lopen.',
          'Filikuri Beach — geïsoleerd; check weersomstandigheden.',
          'Porto Palermo — combineer strand met kasteelbezoek.',
          'Livadh — klein maar perfect voor een ochtenddip.',
          'St. Basil — bij Ksamil maar minder bezocht aan de noordkant van de baai.',
        ],
      },
      {
        id: 'tips',
        title: 'Praktische tips',
        paragraphs: [
          "Neem contant geld mee voor parkeerplaatsen en kleine taverna's. Parasols zijn zeldzaam buiten de grote stranden — pack light maar neem shade mee.",
          'Rijden over onverharde paden: check je verhuurcontract. Sommige verzekeringen dekken off-road niet.',
        ],
      },
    ],
    relatedLocations: [
      { slug: 'ksamil', name: 'Ksamil' },
      { slug: 'saranda', name: 'Sarandë' },
      { slug: 'dhermi', name: 'Dhërmi' },
    ],
    relatedArticles: [
      {
        slug: 'geld-omwisselen-albanie',
        title: 'Geld omwisselen in Albanië',
        category: 'Praktisch',
        date: '5 juli 2026',
        dateTime: '2026-07-05',
      },
      {
        slug: 'berat-weekend',
        title: 'Berat in een weekend',
        category: 'Lijstjes',
        date: '28 juni 2026',
        dateTime: '2026-06-28',
      },
    ],
  },
};

const articleStubs: Record<
  string,
  Pick<
    ArticleDetail,
    | 'slug'
    | 'title'
    | 'category'
    | 'date'
    | 'dateTime'
    | 'readTime'
    | 'heroImage'
    | 'heroImageAlt'
    | 'lead'
  >
> = {
  'geld-omwisselen-albanie': {
    slug: 'geld-omwisselen-albanie',
    title: 'Geld omwisselen in Albanië: wat je moet weten',
    category: 'Praktisch',
    date: '5 juli 2026',
    dateTime: '2026-07-05',
    readTime: '7 min',
    heroImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80',
    heroImageAlt: 'Geld en reisbudget',
    lead: 'Euro, Lek, wisselkantoren en pinautomaten — zo ga je niet onnodig geld verliezen onderweg.',
  },
  'theth-wandelen': {
    slug: 'theth-wandelen',
    title: 'Wandelen in Theth: onze favoriete dagroutes',
    category: 'Tips',
    date: '1 juli 2026',
    dateTime: '2026-07-01',
    readTime: '11 min',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    heroImageAlt: 'Berglandschap bij Theth',
    lead: 'Van waterval tot uitzichtpunten — drie routes voor verschillende niveaus.',
  },
  'berat-weekend': {
    slug: 'berat-weekend',
    title: 'Berat in een weekend: route door de stad van duizend ramen',
    category: 'Lijstjes',
    date: '28 juni 2026',
    dateTime: '2026-06-28',
    readTime: '10 min',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
    heroImageAlt: 'Historische huizen in Berat',
    lead: '48 uur in Berat — van het kasteel tot de beste taveerna.',
  },
  'tirana-food-guide': {
    slug: 'tirana-food-guide',
    title: 'Waar eten in Tirana: 8 adressen buiten de toeristengordel',
    category: 'Tips',
    date: '6 juli 2026',
    dateTime: '2026-07-06',
    readTime: '8 min',
    heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
    heroImageAlt: 'Restaurant setting',
    lead: 'Van byrek op de hoek tot modern Albanian dining in Blloku.',
  },
  'tirana-dagtrip-dajti': {
    slug: 'tirana-dagtrip-dajti',
    title: 'Dajti in een halve dag: kabelbaan, picknick en uitzicht',
    category: 'Praktisch',
    date: '22 juni 2026',
    dateTime: '2026-06-22',
    readTime: '6 min',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
    heroImageAlt: 'Berguitzicht',
    lead: 'Even ontsnappen aan de stad — bereik, kosten en picknickplekken.',
  },
};

function resolveArticle(slug: string): ArticleDetail | null {
  if (articleDetails[slug]) return articleDetails[slug];
  const stub = articleStubs[slug];
  if (!stub) return null;

  return {
    ...stub,
    updatedLabel: 'Bijgewerkt juli 2026',
    sections: [
      {
        id: 'overview',
        title: 'Binnenkort uitgebreid',
        paragraphs: [
          stub.lead,
          'De volledige redactionele versie van dit artikel wordt binnenkort gepubliceerd. Bekijk intussen onze bestemming-guides en routes voor gerelateerde tips.',
        ],
      },
    ],
    relatedLocations: [],
    relatedArticles: [],
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = resolveArticle(slug);
  if (!article) return { title: 'Artikel niet gevonden' };

  return {
    title: article.title,
    description: article.lead,
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = resolveArticle(slug);
  if (!article) notFound();

  const isFullArticle = Boolean(articleDetails[slug]);

  return (
    <main>
      {/* Hero */}
      <section aria-labelledby="article-heading" className="relative min-h-[40vh] md:min-h-[45vh]">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/30"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-[40vh] max-w-3xl flex-col justify-end px-6 pt-24 pb-10 md:min-h-[45vh] md:pb-12">
          <nav aria-label="Broodkruimel" className="mb-6">
            <Link
              href="/blog"
              className="text-primary-foreground/80 hover:text-primary-foreground focus-visible:ring-ring inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Blog
            </Link>
          </nav>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{article.category}</Badge>
              {isFullArticle ? <Badge variant="outline">Redactioneel</Badge> : null}
            </div>
            <h1
              id="article-heading"
              className="text-primary-foreground text-3xl md:text-4xl lg:text-5xl"
            >
              {article.title}
            </h1>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">{article.lead}</p>
            <p className="text-primary-foreground/70 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <time dateTime={article.dateTime}>{article.date}</time>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {article.readTime} lezen
              </span>
              <span>{article.updatedLabel}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <article className="mx-auto max-w-3xl min-w-0 space-y-10 lg:mx-0">
            {article.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.listItems ? (
                  <ol className="list-decimal space-y-3 pl-5">
                    {section.listItems.map((item) => (
                      <li key={item.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : null}
              </div>
            ))}

            <p className="text-muted-foreground border-border border-t pt-8 text-sm italic">
              Geschreven door de Bukura-redactie · affiliate-links in dit artikel zijn transparant
              gemarkeerd waar van toepassing.
            </p>
          </article>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {article.sections.length > 1 ? (
              <nav
                aria-labelledby="article-nav"
                className="border-border bg-card rounded-xl border p-5"
              >
                <h2 id="article-nav" className="mb-3 text-sm font-semibold">
                  In dit artikel
                </h2>
                <ul className="space-y-2">
                  {article.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-primary hover:text-primary/80 text-sm underline-offset-4 hover:underline"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            {article.relatedLocations.length > 0 ? (
              <div className="border-border bg-card space-y-3 rounded-xl border p-5">
                <h2 className="text-sm font-semibold">Gerelateerde bestemmingen</h2>
                <ul className="space-y-2">
                  {article.relatedLocations.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        href={`/bestemmingen/${loc.slug}`}
                        className="text-primary hover:text-primary/80 text-sm font-medium"
                      >
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      {/* Related articles */}
      {article.relatedArticles.length > 0 ? (
        <section aria-labelledby="related-heading" className="bg-muted py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <h2 id="related-heading" className="text-2xl md:text-3xl">
              Lees ook
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {article.relatedArticles.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group border-border bg-card block rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Badge variant="ghost" className="mb-2 px-0">
                      {related.category}
                    </Badge>
                    <h3 className="group-hover:text-primary mb-2 text-lg font-semibold">
                      {related.title}
                    </h3>
                    <time dateTime={related.dateTime} className="text-muted-foreground text-xs">
                      {related.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Exit */}
      <section aria-labelledby="article-exit-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-2xl space-y-6 px-6 text-center">
          <h2 id="article-exit-heading" className="text-2xl md:text-3xl">
            Klaar om te plannen?
          </h2>
          <p className="text-muted-foreground text-sm">
            Ga van inspiratie naar concrete routes en bestemming-guides.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft aria-hidden="true" />
                Terug naar blog
              </Link>
            </Button>
            <Button asChild>
              <Link href="/bestemmingen">
                Bestemmingen
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
