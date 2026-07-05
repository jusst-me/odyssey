import { XMLParser } from 'fast-xml-parser';
import type { FeedConfig, TravelOffer } from './types';

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

/** RequestInit augmented with Next.js' `next` caching hint (optional at runtime). */
type NextRequestInit = RequestInit & { next?: { revalidate?: number } };

/**
 * Fetch and parse a single TradeTracker XML product feed.
 *
 * Strategy (phase A): fetch server-side with Next.js caching/ISR via the
 * `revalidate` option — no database. A future ticket migrates this to a
 * periodic DB sync (Prisma/Postgres) for richer search/filtering.
 *
 * NOTE: `mapToOffers` is a stub — the concrete field mapping per advertiser is
 * tracked as a Linear ticket and implemented once real feed samples exist.
 */
export async function fetchFeed(config: FeedConfig): Promise<TravelOffer[]> {
  const { url, revalidateSeconds = 3600, advertiser } = config;

  const res = await fetch(url, { next: { revalidate: revalidateSeconds } } as NextRequestInit);
  if (!res.ok) {
    throw new Error(`TradeTracker feed "${advertiser}" failed: ${res.status} ${res.statusText}`);
  }

  const xml = await res.text();
  const parsed = parser.parse(xml) as unknown;
  return mapToOffers(parsed, advertiser);
}

/**
 * Map a parsed feed document to normalized offers.
 * Stub: returns an empty list until per-advertiser mapping is implemented.
 */
export function mapToOffers(_parsed: unknown, _advertiser: string): TravelOffer[] {
  return [];
}
