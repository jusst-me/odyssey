/**
 * Article detail placeholder data — prose (WYSIWYG blocks) and listicle layouts.
 *
 * Replace with @odyssey/cms Portable Text / article schema when wired up.
 * contentType discriminates rendering in blog/[slug]/page.tsx.
 */

import type { ArticleCategory } from './blog-data';

// ---------------------------------------------------------------------------
// Prose blocks (mirrors future Portable Text block types)
// ---------------------------------------------------------------------------

export type ProseBlock =
  | { type: 'heading'; level: 2 | 3; id: string; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'blockquote'; text: string; attribution?: string };

// ---------------------------------------------------------------------------
// Listicle
// ---------------------------------------------------------------------------

export type ListicleFact = {
  label: string;
  value: string;
};

export type ListicleItem = {
  rank: number;
  slug: string;
  name: string;
  hook: string;
  description: string;
  image: string;
  imageAlt: string;
  facts: ListicleFact[];
  region: string;
  access: string;
  crowd: string;
  locationSlug?: string;
  editorTip?: string;
  /** Contextual micro-CTA — max 2–3 per listicle article */
  affiliateOfferId?: string;
  affiliateContext?: string;
};

export type ListiclePlanningLink = {
  label: string;
  href: string;
  description: string;
};

export type ListicleCommerceBlock = {
  insertAfterRank: number;
  title: string;
  intro: string;
  offerIds: string[];
};

export type ListicleData = {
  id: string;
  title: string;
  intro: string;
  routeStops: string[];
  planningLinks: ListiclePlanningLink[];
  commerce?: ListicleCommerceBlock;
  items: ListicleItem[];
};

export type ArticleBodySection = {
  id: string;
  title: string;
  paragraphs: string[];
};

// ---------------------------------------------------------------------------
// Article detail union
// ---------------------------------------------------------------------------

type ArticleBase = {
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
  relatedLocations: { slug: string; name: string }[];
  relatedArticles: {
    slug: string;
    title: string;
    category: ArticleCategory;
    date: string;
    dateTime: string;
  }[];
};

export type ProseArticleDetail = ArticleBase & {
  contentType: 'prose';
  blocks: ProseBlock[];
};

export type ListicleArticleDetail = ArticleBase & {
  contentType: 'listicle';
  sections: ArticleBodySection[];
  listicle: ListicleData;
};

export type ArticleDetail = ProseArticleDetail | ListicleArticleDetail;

export type ArticleNavItem = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

// ---------------------------------------------------------------------------
// Full articles
// ---------------------------------------------------------------------------

const hiddenBeachesListicle: ListicleData = {
  id: 'lijst',
  title: 'Onze 10 favorieten',
  intro: 'Van noord naar zuid — combineer ze makkelijk met een roadtrip langs de SH8.',
  routeStops: ['Dhërmi', 'Himarë', 'Borsh', 'Qeparo', 'Lukovë', 'Porto Palermo', 'Ksamil'],
  planningLinks: [
    {
      label: 'Auto huren',
      href: '/deals/autoverhuur',
      description: 'Essentieel voor de SH8 — vergelijk aanbiedingen',
    },
    {
      label: 'Hotels Riviera',
      href: '/deals/hotels?regio=riviera',
      description: 'Overnachten tussen Dhërmi en Himarë',
    },
    {
      label: 'Activiteiten Ksamil',
      href: '/deals/activiteiten?regio=sarande',
      description: 'Kayak, boottrip en tours in het zuiden',
    },
  ],
  commerce: {
    insertAfterRank: 5,
    title: 'Plan je stranden-roadtrip',
    intro:
      'Deze drie opties passen bij een kustroute langs de SH8 — gecureerd door onze redactie, niet gesponsord.',
    offerIds: ['hotel-dhermi', 'car-suv-tirana', 'act-kayak-ksamil'],
  },
  items: [
    {
      rank: 1,
      slug: 'gjipe-beach',
      name: 'Gjipe Beach',
      hook: 'Adembenemend kloofstrand tussen rotswanden',
      description:
        'Gjipe is het paradepaardje van de riviera: turquoise water in een smalle kloof, alleen bereikbaar te voet of met 4x4. Geen parasols, geen beach bars — wel een van de mooiste plekken aan de hele kust.',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
      imageAlt: 'Kloofstrand met turquoise water tussen rotsen',
      facts: [
        { label: 'Type', value: 'Kiezel & rots' },
        { label: 'Faciliteiten', value: 'Minimaal' },
        { label: 'Beste voor', value: 'Fotografie' },
      ],
      region: 'Dhërmi',
      access: 'Te voet / 4x4',
      crowd: 'Laag',
      locationSlug: 'dhermi',
      editorTip:
        'Start vroeg (voor 9u) — parkeren bij de SH8 loopt vol en de wandeling duurt 25–30 min.',
      affiliateOfferId: 'car-4x4-mountains',
      affiliateContext:
        'Gjipe bereik je met 4x4 of te voet — check je huurcontract voor onverharde paden.',
    },
    {
      rank: 2,
      slug: 'jale-beach',
      name: 'Jale Beach',
      hook: 'Jongere crowd, maar ruim genoeg plek buiten augustus',
      description:
        'Jale heeft een brede zandbaai met een handvol beach bars. In juli/augustus drukker, maar in juni of september vind je hier nog ruimte en goede zwemwater.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
      imageAlt: 'Zandstrand met helder blauw water',
      facts: [
        { label: 'Type', value: 'Zand' },
        { label: 'Faciliteiten', value: 'Beach bars' },
        { label: 'Beste voor', value: 'Zwemmen' },
      ],
      region: 'Dhërmi',
      access: 'Auto',
      crowd: 'Gemiddeld',
      locationSlug: 'dhermi',
    },
    {
      rank: 3,
      slug: 'borsh',
      name: 'Borsh',
      hook: 'Lange kiezelstrand met taverna direct aan zee',
      description:
        'Borsh strekt zich uit over bijna 7 km — een van de langste stranden van Albanië. Aan het zuidelijke uiteinde zit een gezellige taverna waar je na het zwemmen direct kunt lunchen.',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
      imageAlt: 'Lang kiezelstrand met zee op de achtergrond',
      facts: [
        { label: 'Type', value: 'Kiezel' },
        { label: 'Faciliteiten', value: 'Taverna' },
        { label: 'Beste voor', value: 'Lange stranddag' },
      ],
      region: 'Borsh',
      access: 'Auto',
      crowd: 'Laag–gemiddeld',
      locationSlug: 'himara',
    },
    {
      rank: 4,
      slug: 'qeparo',
      name: 'Qeparo',
      hook: 'Rustiger alternatief voor Himarë',
      description:
        'Qeparo bestaat uit een boven- en onderstad. Onder-Qeparo heeft een compact strand; boven-Qeparo biedt uitzicht en authentieke guesthouses. Minder toeristisch dan Himarë centrum.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      imageAlt: 'Kustdorp met strand en heuvels',
      facts: [
        { label: 'Type', value: 'Kiezel' },
        { label: 'Faciliteiten', value: 'Guesthouses' },
        { label: 'Beste voor', value: 'Rust zoeken' },
      ],
      region: 'Qeparo',
      access: 'Auto',
      crowd: 'Laag',
      locationSlug: 'himara',
    },
    {
      rank: 5,
      slug: 'lukove',
      name: 'Lukovë',
      hook: 'Locals-only vibe — neem eigen snacks mee',
      description:
        'Lukovë voelt als een dorpstrand waar vooral Albanese families komen. Weinig infrastructuur, wel kristalhelder water. Perfect als je een picknickdag wilt zonder commercie.',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
      imageAlt: 'Rustig baaitje met helder water',
      facts: [
        { label: 'Type', value: 'Kiezel' },
        { label: 'Faciliteiten', value: 'Geen' },
        { label: 'Beste voor', value: 'Picknick' },
      ],
      region: 'Lukovë',
      access: 'Auto',
      crowd: 'Laag',
      locationSlug: 'himara',
    },
    {
      rank: 6,
      slug: 'krorez-bay',
      name: 'Krorez Bay',
      hook: 'Beloning na 20 minuten wandelen via Dhërmi',
      description:
        'Geen parkeerplaats aan het water — je wandelt een pad langs de klif en daalt af naar een baai die je alleen deelt met wie het pad kent. Neem water mee.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      imageAlt: 'Afgelegen baai met turquoise water',
      facts: [
        { label: 'Type', value: 'Kiezel' },
        { label: 'Faciliteiten', value: 'Geen' },
        { label: 'Beste voor', value: 'Wandelaars' },
      ],
      region: 'Dhërmi',
      access: 'Te voet',
      crowd: 'Laag',
      locationSlug: 'dhermi',
      editorTip:
        "Combineer Krorez Bay met een middag in Dhërmi — wandel 's ochtends, lunch daarna bij Llogara-pass met uitzicht.",
      affiliateOfferId: 'hotel-dhermi',
      affiliateContext:
        'Overnacht in Dhërmi en combineer ochtendwandelingen met late middagen op het strand.',
    },
    {
      rank: 7,
      slug: 'filikuri-beach',
      name: 'Filikuri Beach',
      hook: 'Geïsoleerd — check weersomstandigheden',
      description:
        'Filikuri ligt in een beschutte baai maar is gevoelig voor wind uit het zuiden. Op rustige dagen adembenemend; bij onweer snel verlaten — er is geen schuilplaats.',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      imageAlt: 'Beschut strand met rotsformaties',
      facts: [
        { label: 'Type', value: 'Kiezel & rots' },
        { label: 'Faciliteiten', value: 'Geen' },
        { label: 'Beste voor', value: 'Snorkelen' },
      ],
      region: 'Himarë',
      access: 'Auto / te voet',
      crowd: 'Laag',
      locationSlug: 'himara',
    },
    {
      rank: 8,
      slug: 'porto-palermo',
      name: 'Porto Palermo',
      hook: 'Combineer strand met kasteelbezoek',
      description:
        'Het Ali Pasha-kasteel op de landtong maakt dit tot een unieke stop. Het strand ernaast is klein maar sfeervol — ideaal voor een halve dag cultuur plus zwemmen.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      imageAlt: 'Kust met historisch kasteel op rotsen',
      facts: [
        { label: 'Type', value: 'Kiezel' },
        { label: 'Faciliteiten', value: 'Kasteel, parkeren' },
        { label: 'Beste voor', value: 'Cultuur + zwemmen' },
      ],
      region: 'Porto Palermo',
      access: 'Auto',
      crowd: 'Gemiddeld',
      locationSlug: 'himara',
    },
    {
      rank: 9,
      slug: 'livadh',
      name: 'Livadh',
      hook: 'Klein maar perfect voor een ochtenddip',
      description:
        'Livadh is geen hele dag bestemming — het is een ochtendplek. Kom voor 10u, zwem een uur, drink koffie in Himarë. Simpel en effectief.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      imageAlt: 'Klein strand bij een kustdorp',
      facts: [
        { label: 'Type', value: 'Kiezel' },
        { label: 'Faciliteiten', value: 'Minimaal' },
        { label: 'Beste voor', value: 'Ochtendzwem' },
      ],
      region: 'Himarë',
      access: 'Auto',
      crowd: 'Laag',
      locationSlug: 'himara',
      editorTip:
        'Plan Livadh als stop op route naar Porto Palermo — beide passen in een halve dag vanuit Himarë.',
    },
    {
      rank: 10,
      slug: 'st-basil',
      name: 'St. Basil',
      hook: 'Bij Ksamil, maar minder bezocht aan de noordkant van de baai',
      description:
        'Iedereen gaat naar de drie eilandjes van Ksamil — St. Basil ligt net buiten die flow. Zelfde turquoise water, fractie van de drukte. Parkeer aan de noordkant van de baai.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      imageAlt: 'Turquoise baai bij Ksamil',
      facts: [
        { label: 'Type', value: 'Zand' },
        { label: 'Faciliteiten', value: 'Parkeren' },
        { label: 'Beste voor', value: 'Ksamil-alternatief' },
      ],
      region: 'Ksamil',
      access: 'Auto',
      crowd: 'Gemiddeld',
      locationSlug: 'ksamil',
      affiliateOfferId: 'hotel-butrinti',
      affiliateContext:
        'Combineer St. Basil met een nacht in Sarandë — op loopafstand van de baai.',
    },
  ],
};

export const articleDetails: Record<string, ArticleDetail> = {
  '10-verborgen-stranden': {
    contentType: 'listicle',
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
        id: 'tips',
        title: 'Praktische tips',
        paragraphs: [
          "Neem contant geld mee voor parkeerplaatsen en kleine taverna's. Parasols zijn zeldzaam buiten de grote stranden — pack light maar neem shade mee.",
          'Rijden over onverharde paden: check je verhuurcontract. Sommige verzekeringen dekken off-road niet.',
        ],
      },
    ],
    listicle: hiddenBeachesListicle,
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
  'geld-omwisselen-albanie': {
    contentType: 'prose',
    slug: 'geld-omwisselen-albanie',
    title: 'Geld omwisselen in Albanië: wat je moet weten',
    category: 'Praktisch',
    date: '5 juli 2026',
    dateTime: '2026-07-05',
    readTime: '7 min',
    updatedLabel: 'Bijgewerkt juli 2026',
    heroImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80',
    heroImageAlt: 'Geld en reisbudget',
    lead: 'Euro, Lek, wisselkantoren en pinautomaten — zo ga je niet onnodig geld verliezen onderweg.',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'valuta',
        text: 'Welke valuta gebruikt Albanië?',
      },
      {
        type: 'paragraph',
        text: "Albanië gebruikt de Lek (ALL). Euro's worden op veel toeristische plekken geaccepteerd, maar je krijgt vaak slecht wisselgeld terug. Onze tip: betaal in Lek waar je kunt en houd een kleine euro-voorraad voor noodgevallen.",
      },
      {
        type: 'paragraph',
        text: 'De wisselkoers schommelt — reken op ongeveer 1 EUR ≈ 98 Lek (2026). Check de actuele koers vlak voor vertrek via je bank-app.',
      },
      {
        type: 'heading',
        level: 2,
        id: 'wisselen',
        text: 'Waar wissel je het beste?',
      },
      {
        type: 'bullets',
        items: [
          'Wisselkantoren in Tirana (Blloku-omgeving) — competitieve koers, geen commissie bij grotere bedragen.',
          'Banken — betrouwbaar maar langzamer; pas op openingstijden buiten de grote steden.',
          'Hotels en luchthaven — vermijden tenzij noodgeval; koers is 5–10% slechter.',
          'Geldautomaten (ATM) — overal in steden; neem een debitcard zonder buitenlandse transactiekosten.',
        ],
      },
      {
        type: 'blockquote',
        text: 'Wissel nooit bij straatmensen — ook al lijkt de koers aantrekkelijk. Dit is een veelvoorkomende scam in toeristische gebieden.',
        attribution: 'Bukura-redactie',
      },
      {
        type: 'heading',
        level: 2,
        id: 'pinnen',
        text: 'Pinnen en betalen',
      },
      {
        type: 'paragraph',
        text: 'Contactloos betalen werkt in de meeste restaurants en winkels in Tirana, Durrës en langs de kust. In bergdorpjes en kleine guesthouses is contant koning — neem altijd wat Lek cash mee.',
      },
      {
        type: 'heading',
        level: 3,
        id: 'kosten',
        text: 'Wat kost het dagelijks?',
      },
      {
        type: 'paragraph',
        text: 'Albanië is betaalbaar. Reken op €25–40 per dag voor budgetreizigers (guesthouse, lokale maaltijden, bus). Met huurauto en restaurants kom je op €60–90 per dag. Tipping is niet verplicht maar gewaardeerd in restaurants (5–10%).',
      },
    ],
    relatedLocations: [{ slug: 'tirana', name: 'Tirana' }],
    relatedArticles: [
      {
        slug: '10-verborgen-stranden',
        title: '10 verborgen stranden langs de Albanese kust',
        category: 'Lijstjes',
        date: '8 juli 2026',
        dateTime: '2026-07-08',
      },
    ],
  },
};

export const articleStubs: Record<
  string,
  Pick<
    ArticleBase,
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

export function resolveArticle(slug: string): ArticleDetail | null {
  if (articleDetails[slug]) return articleDetails[slug];
  const stub = articleStubs[slug];
  if (!stub) return null;

  return {
    ...stub,
    contentType: 'prose',
    updatedLabel: 'Bijgewerkt juli 2026',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'overview',
        text: 'Binnenkort uitgebreid',
      },
      {
        type: 'paragraph',
        text: stub.lead,
      },
      {
        type: 'paragraph',
        text: 'De volledige redactionele versie van dit artikel wordt binnenkort gepubliceerd. Bekijk intussen onze bestemming-guides en routes voor gerelateerde tips.',
      },
    ],
    relatedLocations: [],
    relatedArticles: [],
  };
}

export function isFullArticle(slug: string): boolean {
  return slug in articleDetails;
}

export function buildArticleNav(article: ArticleDetail): ArticleNavItem[] {
  if (article.contentType === 'prose') {
    const items: ArticleNavItem[] = [];
    for (const block of article.blocks) {
      if (block.type === 'heading' && block.level === 2) {
        items.push({ id: block.id, label: block.text });
      }
    }
    return items;
  }

  const items: ArticleNavItem[] = [];

  for (const section of article.sections) {
    items.push({ id: section.id, label: section.title });

    if (section.id === 'intro') {
      items.push({
        id: article.listicle.id,
        label: article.listicle.title,
        children: article.listicle.items.map((item) => ({
          id: item.slug,
          label: `${item.rank}. ${item.name}`,
        })),
      });

      if (article.listicle.commerce) {
        items.push({
          id: 'plan-je-trip',
          label: article.listicle.commerce.title,
        });
      }
    }
  }

  return items;
}
