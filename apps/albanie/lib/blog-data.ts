/**
 * Blog placeholder data + listing helpers.
 *
 * Architecture (see /blog hub vs archives):
 * - /blog — fixed-size editorial hub (featured, recent slice, category previews)
 * - /blog/artikelen — paginated full archive (?pagina=2)
 * - /blog/categorie/[category] — paginated category archive
 *
 * Replace with @odyssey/cms GROQ queries when article schema is wired up.
 */

export type ArticleCategory = 'Tips' | 'Lijstjes' | 'Praktisch' | 'Bestemmingen';

export type ArticleListItem = {
  slug: string;
  title: string;
  category: ArticleCategory;
  teaser: string;
  date: string;
  dateTime: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

/** Articles shown on the /blog hub under "Nieuwste artikelen". */
export const BLOG_HUB_RECENT_LIMIT = 6;

/** Preview cards per category on the /blog hub. */
export const BLOG_HUB_CATEGORY_PREVIEW_LIMIT = 3;

/** Articles per page on archive routes. */
export const BLOG_ARCHIVE_PAGE_SIZE = 12;

export const articleCategories = [
  { slug: 'tips', label: 'Tips' as const },
  { slug: 'lijstjes', label: 'Lijstjes' as const },
  { slug: 'praktisch', label: 'Praktisch' as const },
  { slug: 'bestemmingen', label: 'Bestemmingen' as const },
] as const;

export type ArticleCategorySlug = (typeof articleCategories)[number]['slug'];

const categorySlugToLabel: Record<ArticleCategorySlug, ArticleCategory> = {
  tips: 'Tips',
  lijstjes: 'Lijstjes',
  praktisch: 'Praktisch',
  bestemmingen: 'Bestemmingen',
};

export function isArticleCategorySlug(value: string): value is ArticleCategorySlug {
  return value in categorySlugToLabel;
}

export function getCategoryLabel(slug: ArticleCategorySlug): ArticleCategory {
  return categorySlugToLabel[slug];
}

export const articles: ArticleListItem[] = [
  {
    slug: '10-verborgen-stranden',
    title: '10 verborgen stranden langs de Albanese kust',
    category: 'Lijstjes',
    teaser:
      'Voorbij Ksamil en Sarandë liggen baaien die je zelf moet ontdekken — onze favorieten van Dhërmi tot het zuiden.',
    date: '8 juli 2026',
    dateTime: '2026-07-08',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    featured: true,
  },
  {
    slug: 'geld-omwisselen-albanie',
    title: 'Geld omwisselen in Albanië: wat je moet weten',
    category: 'Praktisch',
    teaser:
      'Euro, Lek, wisselkantoren en pinautomaten — zo ga je niet onnodig geld verliezen onderweg.',
    date: '5 juli 2026',
    dateTime: '2026-07-05',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  },
  {
    slug: 'theth-wandelen',
    title: 'Wandelen in Theth: onze favoriete dagroutes',
    category: 'Tips',
    teaser:
      'Van waterval tot uitzichtpunten — drie routes voor verschillende niveaus, inclusief praktische tips.',
    date: '1 juli 2026',
    dateTime: '2026-07-01',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
  {
    slug: 'berat-weekend',
    title: 'Berat in een weekend: route door de stad van duizend ramen',
    category: 'Lijstjes',
    teaser:
      '48 uur in Berat — van het kasteel tot de beste taveerna en een dagtrip naar Osum-kloof.',
    date: '28 juni 2026',
    dateTime: '2026-06-28',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    slug: 'tirana-food-guide',
    title: 'Waar eten in Tirana: 8 adressen buiten de toeristengordel',
    category: 'Tips',
    teaser:
      'Van byrek op de hoek tot modern Albanian dining in Blloku — adressen die we zelf teruggaan.',
    date: '6 juli 2026',
    dateTime: '2026-07-06',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    slug: 'tirana-dagtrip-dajti',
    title: 'Dajti in een halve dag: kabelbaan, picknick en uitzicht',
    category: 'Praktisch',
    teaser:
      'Even ontsnappen aan de stad — hoe je Dajti bereikt, wat het kost en waar je het beste kunt picknicken.',
    date: '22 juni 2026',
    dateTime: '2026-06-22',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
  },
  {
    slug: 'riviera-roadtrip-planning',
    title: 'Albanese Riviera plannen: route, stops en verblijf',
    category: 'Bestemmingen',
    teaser:
      'Van Llogara tot Ksamil — hoe je een roadtrip opzet zonder elke dag in de auto te zitten.',
    date: '18 juni 2026',
    dateTime: '2026-06-18',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
  },
  {
    slug: 'ksamil-vs-saranda',
    title: 'Ksamil of Sarandë: welke kuststad past bij jou?',
    category: 'Bestemmingen',
    teaser: 'Twee buren, twee vibes — vergelijking op sfeer, prijs en bereikbaarheid.',
    date: '14 juni 2026',
    dateTime: '2026-06-14',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
  },
  {
    slug: 'simkaart-albanie',
    title: 'Lokale simkaart of roaming: wat is slimmer?',
    category: 'Praktisch',
    teaser: 'Prepaid data in Albanië — providers, prijzen en waar je ze koopt.',
    date: '10 juni 2026',
    dateTime: '2026-06-10',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    slug: 'furgon-survival-guide',
    title: 'Furgon survival guide: zo reis je als een local',
    category: 'Praktisch',
    teaser: 'Geen schema, geen stress — onze tips voor minibusreizen tussen steden.',
    date: '6 juni 2026',
    dateTime: '2026-06-06',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
  {
    slug: '5-unesco-hoogtepunten',
    title: '5 UNESCO-hoogtepunten die je niet mag overslaan',
    category: 'Lijstjes',
    teaser: 'Berat, Gjirokastër en meer — hoe je ze combineert in één trip.',
    date: '2 juni 2026',
    dateTime: '2026-06-02',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
  },
  {
    slug: 'packing-lijst-albanie',
    title: 'Packlijst Albanië: kust, stad én bergen in één koffer',
    category: 'Tips',
    teaser: 'Wat je echt nodig hebt — en wat je thuis kunt laten.',
    date: '28 mei 2026',
    dateTime: '2026-05-28',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  },
  {
    slug: 'butrint-dagtrip',
    title: 'Butrint als dagtrip vanuit Sarandë',
    category: 'Bestemmingen',
    teaser: 'UNESCO-site aan de kust — bereik, tickets en hoe lang je plant.',
    date: '24 mei 2026',
    dateTime: '2026-05-24',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
  },
  {
    slug: 'albanie-met-kinderen',
    title: 'Albanië met kinderen: 7 tips van ouders die het gedaan hebben',
    category: 'Tips',
    teaser: 'Strand, reistijd en kindvriendelijke plekken — eerlijk advies.',
    date: '20 mei 2026',
    dateTime: '2026-05-20',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
];

function sortByDateDesc(items: ArticleListItem[]): ArticleListItem[] {
  return [...items].sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
}

export function getFeaturedArticle(): ArticleListItem {
  return articles.find((a) => a.featured) ?? sortByDateDesc(articles)[0]!;
}

export function getHubRecentArticles(): ArticleListItem[] {
  return sortByDateDesc(articles).slice(0, BLOG_HUB_RECENT_LIMIT);
}

export function getCategoryPreviews(): { category: ArticleCategory; items: ArticleListItem[] }[] {
  return articleCategories
    .map(({ label }) => ({
      category: label,
      items: sortByDateDesc(articles.filter((a) => a.category === label)).slice(
        0,
        BLOG_HUB_CATEGORY_PREVIEW_LIMIT,
      ),
    }))
    .filter((group) => group.items.length > 0);
}

export function countArticlesByCategory(category: ArticleCategory): number {
  return articles.filter((a) => a.category === category).length;
}

export type PaginatedResult<T> = {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
};

export function paginateArticles(
  items: ArticleListItem[],
  page: number,
  pageSize = BLOG_ARCHIVE_PAGE_SIZE,
): PaginatedResult<ArticleListItem> {
  const sorted = sortByDateDesc(items);
  const totalItems = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: sorted.slice(start, start + pageSize),
    currentPage,
    totalPages,
    totalItems,
    pageSize,
  };
}

export function parsePageParam(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number.parseInt(raw ?? '1', 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

export function getCategorySlug(label: ArticleCategory): ArticleCategorySlug {
  const match = articleCategories.find((c) => c.label === label);
  if (!match) throw new Error(`Unknown category: ${label}`);
  return match.slug;
}

export function buildArchiveHref(basePath: string, page: number): string {
  if (page <= 1) return basePath;
  const separator = basePath.includes('?') ? '&' : '?';
  return `${basePath}${separator}pagina=${page}`;
}
