/**
 * Normalized TradeTracker product. Raw feed shapes vary per advertiser, so all
 * feeds are mapped to this internal model before reaching the UI.
 */
export interface TravelOffer {
  id: string;
  title: string;
  description?: string;
  price?: number;
  currency: string;
  destination?: string;
  imageUrl?: string;
  /** Affiliate deeplink (TradeTracker click URL). */
  affiliateUrl: string;
  advertiser: string;
}

/** Configuration for a single TradeTracker XML product feed. */
export interface FeedConfig {
  /** Human-readable advertiser/feed name. */
  advertiser: string;
  /** Full XML feed URL (including credentials/feed id query params). */
  url: string;
  /** Cache revalidation window in seconds (Next.js `fetch` revalidate). */
  revalidateSeconds?: number;
}
