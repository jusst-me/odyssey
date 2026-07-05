/**
 * A market identifies the country/brand an app serves. Content in the shared
 * dataset is tagged with a market so a single Sanity project can power many apps.
 * Add new markets here as the platform expands.
 */
export const MARKETS = ['albanie'] as const;

export type Market = (typeof MARKETS)[number];

export interface Localized<T> {
  market: Market;
  value: T;
}
