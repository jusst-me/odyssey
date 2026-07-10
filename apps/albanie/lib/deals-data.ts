/**
 * Placeholder affiliate / feed offers for deals wireframes.
 *
 * Maps to @odyssey/tradetracker TravelOffer when feeds are wired up.
 * UI treats Booking / GetYourGuide / TradeTracker as normalized "native" cards —
 * no embedded widgets, no marketplace chrome.
 */

export type DealVertical = 'hotels' | 'activiteiten' | 'autoverhuur';

export type EditorialBadge = 'Onze keuze' | 'Budget tip' | 'Populair' | 'Tip van de redactie';

export type FeedSource = 'Booking.com' | 'GetYourGuide' | 'TradeTracker';

export type DealRegion = 'sarande' | 'tirana' | 'berat' | 'riviera' | 'bergen' | 'overal';

export const dealRegions: { id: DealRegion; label: string }[] = [
  { id: 'overal', label: 'Heel Albanië' },
  { id: 'sarande', label: 'Sarandë & Ksamil' },
  { id: 'riviera', label: 'Riviera' },
  { id: 'tirana', label: 'Tirana' },
  { id: 'berat', label: 'Berat' },
  { id: 'bergen', label: 'Bergen' },
];

export type NativeOffer = {
  id: string;
  vertical: DealVertical;
  title: string;
  location: string;
  region: DealRegion;
  teaser?: string;
  priceFrom: number;
  priceLabel: 'per nacht' | 'per persoon' | 'per dag';
  image: string;
  affiliateUrl: string;
  source: FeedSource;
  badge?: EditorialBadge;
  editorsPick?: boolean;
  stars?: number;
  duration?: string;
  carType?: string;
};

export const DEALS_PAGE_SIZE = 12;

export const nativeOffers: NativeOffer[] = [
  // Hotels (Booking.com via TradeTracker)
  {
    id: 'hotel-butrinti',
    vertical: 'hotels',
    title: 'Hotel Butrinti',
    location: 'Sarandë, Albanië',
    region: 'sarande',
    teaser: 'Strandhotel met zeezicht — onze favoriet voor een luxe kustnacht.',
    priceFrom: 89,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/hotel-butrinti',
    source: 'Booking.com',
    badge: 'Onze keuze',
    editorsPick: true,
    stars: 4,
  },
  {
    id: 'hotel-blloku',
    vertical: 'hotels',
    title: 'Boutique Hotel Blloku',
    location: 'Tirana, Albanië',
    region: 'tirana',
    teaser: 'Midden in de hipste wijk — perfect als stadskamp.',
    priceFrom: 58,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/blloku',
    source: 'Booking.com',
    editorsPick: true,
    stars: 3,
  },
  {
    id: 'guesthouse-theth',
    vertical: 'hotels',
    title: 'Guesthouse Theth',
    location: 'Theth, Albanië',
    region: 'bergen',
    teaser: 'Traditionele bergaccommodatie — vroeg boeken in juli/augustus.',
    priceFrom: 45,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/theth-guesthouse',
    source: 'Booking.com',
    badge: 'Budget tip',
    stars: 3,
  },
  {
    id: 'hotel-berati',
    vertical: 'hotels',
    title: 'Hotel Berati',
    location: 'Berat, Albanië',
    region: 'berat',
    priceFrom: 62,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/berati',
    source: 'Booking.com',
    stars: 3,
  },
  {
    id: 'hotel-dhermi',
    vertical: 'hotels',
    title: 'Vila Biserni',
    location: 'Dhërmi, Albanië',
    region: 'riviera',
    teaser: 'Klein boutique hotel boven de baai — rustiger dan Himarë.',
    priceFrom: 95,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/dhermi-vila',
    source: 'Booking.com',
    badge: 'Onze keuze',
    editorsPick: true,
    stars: 4,
  },
  {
    id: 'apartment-saranda',
    vertical: 'hotels',
    title: 'Seaview Apartment Sarandë',
    location: 'Sarandë, Albanië',
    region: 'sarande',
    priceFrom: 52,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/saranda-apt',
    source: 'Booking.com',
    stars: 3,
  },
  {
    id: 'hotel-tirana-plaza',
    vertical: 'hotels',
    title: 'Hotel Plaza Tirana',
    location: 'Centrum, Tirana',
    region: 'tirana',
    priceFrom: 72,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/plaza-tirana',
    source: 'Booking.com',
    stars: 4,
  },
  {
    id: 'hotel-himara',
    vertical: 'hotels',
    title: 'Himarë Bay Hotel',
    location: 'Himarë, Albanië',
    region: 'riviera',
    priceFrom: 68,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/himara-bay',
    source: 'Booking.com',
    stars: 3,
  },
  {
    id: 'hotel-gjirokaster',
    vertical: 'hotels',
    title: 'Kerculla Resort',
    location: 'Gjirokastër, Albanië',
    region: 'berat',
    priceFrom: 78,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/kerculla',
    source: 'Booking.com',
    stars: 4,
  },
  {
    id: 'hostel-tirana',
    vertical: 'hotels',
    title: 'Milingona City Center Hostel',
    location: 'Tirana, Albanië',
    region: 'tirana',
    priceFrom: 18,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/milingona',
    source: 'Booking.com',
    badge: 'Budget tip',
    stars: 2,
  },
  {
    id: 'hotel-ksamil',
    vertical: 'hotels',
    title: 'Blue Days Hotel Ksamil',
    location: 'Ksamil, Albanië',
    region: 'sarande',
    priceFrom: 84,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/blue-days',
    source: 'Booking.com',
    stars: 3,
  },
  {
    id: 'hotel-valbona',
    vertical: 'hotels',
    title: 'Valbonë Guesthouse & Restaurant',
    location: 'Valbona, Albanië',
    region: 'bergen',
    priceFrom: 40,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/valbona-gh',
    source: 'Booking.com',
    stars: 3,
  },
  {
    id: 'hotel-shkoder',
    vertical: 'hotels',
    title: 'Hotel Colosseo',
    location: 'Shkodër, Albanië',
    region: 'overal',
    priceFrom: 55,
    priceLabel: 'per nacht',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/colosseo',
    source: 'Booking.com',
    stars: 3,
  },
  // Activities (GetYourGuide)
  {
    id: 'act-blue-eye',
    vertical: 'activiteiten',
    title: 'Boottocht Blue Eye & Gjirokastër',
    location: 'Sarandë regio',
    region: 'sarande',
    teaser: 'Combinatie natuur en UNESCO — populairste dagtrip vanuit de kust.',
    priceFrom: 65,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/blue-eye-tour',
    source: 'GetYourGuide',
    badge: 'Populair',
    editorsPick: true,
    duration: '8 uur',
  },
  {
    id: 'act-kayak-ksamil',
    vertical: 'activiteiten',
    title: 'Kajakken bij Ksamil-eilanden',
    location: 'Ksamil',
    region: 'sarande',
    priceFrom: 35,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/kayak-ksamil',
    source: 'GetYourGuide',
    duration: '3 uur',
  },
  {
    id: 'act-food-tirana',
    vertical: 'activiteiten',
    title: 'Food tour door Tirana',
    location: 'Tirana',
    region: 'tirana',
    teaser: 'Proef byrek, raki en moderne Albanian fusion — kleine groep.',
    priceFrom: 49,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/tirana-food',
    source: 'GetYourGuide',
    badge: 'Tip van de redactie',
    editorsPick: true,
    duration: '4 uur',
  },
  {
    id: 'act-theth-hike',
    vertical: 'activiteiten',
    title: 'Begeleide wandeling Theth waterval',
    location: 'Theth',
    region: 'bergen',
    priceFrom: 42,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/theth-hike',
    source: 'GetYourGuide',
    duration: '5 uur',
  },
  {
    id: 'act-berat-wine',
    vertical: 'activiteiten',
    title: 'Wijnproeverij rond Berat',
    location: 'Berat',
    region: 'berat',
    priceFrom: 38,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/berat-wine',
    source: 'GetYourGuide',
    duration: '3 uur',
  },
  {
    id: 'act-rafting',
    vertical: 'activiteiten',
    title: 'Raften op de Vjosë',
    location: 'Vjosë-vallei',
    region: 'overal',
    priceFrom: 55,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/vjose-raft',
    source: 'GetYourGuide',
    badge: 'Populair',
    duration: '6 uur',
  },
  {
    id: 'act-sunset-cruise',
    vertical: 'activiteiten',
    title: 'Sunset cruise Sarandë',
    location: 'Sarandë',
    region: 'sarande',
    priceFrom: 29,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/sunset-cruise',
    source: 'GetYourGuide',
    duration: '2 uur',
  },
  {
    id: 'act-bunkart',
    vertical: 'activiteiten',
    title: "Tirana highlights & Bunk'Art tour",
    location: 'Tirana',
    region: 'tirana',
    priceFrom: 32,
    priceLabel: 'per persoon',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/bunkart-tour',
    source: 'GetYourGuide',
    duration: '4 uur',
  },
  // Car rental (TradeTracker)
  {
    id: 'car-economy-tirana',
    vertical: 'autoverhuur',
    title: 'Economy auto — Tirana Airport',
    location: 'TIA luchthaven',
    region: 'tirana',
    teaser: 'Compact voor steden en Riviera — onze instapkeuze.',
    priceFrom: 28,
    priceLabel: 'per dag',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/car-economy',
    source: 'TradeTracker',
    badge: 'Onze keuze',
    editorsPick: true,
    carType: 'Economy · handgeschakeld',
  },
  {
    id: 'car-suv-tirana',
    vertical: 'autoverhuur',
    title: 'SUV — Tirana Airport',
    location: 'TIA luchthaven',
    region: 'tirana',
    teaser: 'Aanbevolen voor bergen en onverharde wegen richting Theth.',
    priceFrom: 45,
    priceLabel: 'per dag',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/car-suv',
    source: 'TradeTracker',
    editorsPick: true,
    carType: 'SUV · automaat',
  },
  {
    id: 'car-compact-saranda',
    vertical: 'autoverhuur',
    title: 'Compact — Sarandë centrum',
    location: 'Sarandë',
    region: 'sarande',
    priceFrom: 32,
    priceLabel: 'per dag',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/car-saranda',
    source: 'TradeTracker',
    carType: 'Compact · handgeschakeld',
  },
  {
    id: 'car-convertible-riviera',
    vertical: 'autoverhuur',
    title: 'Cabrio — Riviera pickup',
    location: 'Dhërmi / Himarë',
    region: 'riviera',
    priceFrom: 58,
    priceLabel: 'per dag',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/car-cabrio',
    source: 'TradeTracker',
    carType: 'Cabrio · automaat',
  },
  {
    id: 'car-minivan-family',
    vertical: 'autoverhuur',
    title: 'Minivan — gezin & bagage',
    location: 'TIA luchthaven',
    region: 'tirana',
    priceFrom: 52,
    priceLabel: 'per dag',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/car-minivan',
    source: 'TradeTracker',
    badge: 'Budget tip',
    carType: 'Minivan · 7 pers.',
  },
  {
    id: 'car-4x4-mountains',
    vertical: 'autoverhuur',
    title: '4x4 — bergwegen & off-road',
    location: 'Shkodër / Theth route',
    region: 'bergen',
    priceFrom: 55,
    priceLabel: 'per dag',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    affiliateUrl: 'https://example.com/affiliate/car-4x4',
    source: 'TradeTracker',
    carType: '4x4 · handgeschakeld',
  },
];

export function offersByVertical(vertical: DealVertical): NativeOffer[] {
  return nativeOffers.filter((o) => o.vertical === vertical);
}

export function offersByVerticalAndRegion(
  vertical: DealVertical,
  region: DealRegion | 'all',
): NativeOffer[] {
  const verticalOffers = offersByVertical(vertical);
  if (region === 'all' || region === 'overal') return verticalOffers;
  return verticalOffers.filter((o) => o.region === region || o.region === 'overal');
}

export function editorPicks(vertical: DealVertical, limit = 3): NativeOffer[] {
  return offersByVertical(vertical)
    .filter((o) => o.editorsPick)
    .slice(0, limit);
}

export function isDealRegion(value: string): value is DealRegion {
  return dealRegions.some((r) => r.id === value);
}

export function parseRegionParam(value: string | undefined): DealRegion | 'all' {
  if (!value || value === 'overal') return 'all';
  return isDealRegion(value) ? value : 'all';
}

export function parseDealsPageParam(value: string | undefined): number {
  const parsed = Number.parseInt(value ?? '1', 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

export function paginateOffers<T>(items: T[], page: number, pageSize = DEALS_PAGE_SIZE) {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    currentPage,
    totalPages,
    totalItems,
    pageSize,
  };
}

export function buildDealsHref(
  basePath: string,
  page: number,
  region?: DealRegion | 'all',
): string {
  const params = new URLSearchParams();
  if (region && region !== 'all') params.set('regio', region);
  if (page > 1) params.set('pagina', String(page));
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export const affiliateDisclosure =
  'Sommige links op deze pagina zijn affiliate-links. Je betaalt niets extra; wij verdienen een commissie. Onze selectie blijft redactioneel — geen betaalde rankings.';
