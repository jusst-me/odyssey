import groq from 'groq';
import { sanityClient } from './client';
import type { Market } from './types';

/**
 * Fetch documents of a given type scoped to a single market.
 * Every content query in Odyssey MUST filter on `market` so apps only ever
 * receive content for the country they serve.
 */
export async function fetchByMarket<T>(
  type: string,
  market: Market,
  projection = '...',
): Promise<T[]> {
  const query = groq`*[_type == $type && market == $market]{ ${projection} }`;
  return sanityClient.fetch<T[]>(query, { type, market });
}
