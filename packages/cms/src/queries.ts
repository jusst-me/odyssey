import groq from 'groq';
import { sanityClient } from './client';
import type { Market, SiteSettings } from './types';

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

/**
 * Fetch the singleton siteSettings document for a given market.
 * Returns null when no document exists yet in Sanity (e.g. during initial setup).
 */
export async function fetchSiteSettings(market: Market): Promise<SiteSettings | null> {
  const query = groq`
    *[_type == "siteSettings" && market == $market][0]{
      market,
      topBar {
        tagline,
        links[] { label, href }
      },
      mainNav[] {
        label,
        href,
        children[] { label, href }
      },
      footer {
        brand { name, subtitle, description },
        columns[] {
          title,
          links[] { label, href }
        },
        copyright,
        affiliateDisclosure
      }
    }
  `;
  return sanityClient.fetch<SiteSettings | null>(query, { market });
}
