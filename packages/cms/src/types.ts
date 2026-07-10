/**
 * A market identifies the country/brand an app serves. Content in the shared
 * dataset is tagged with a market so a single Sanity project can power many apps.
 * Add new markets here as the platform expands.
 */
export const MARKETS = [
  'albania',
  'greece',
  'macedonia',
  'montenegro',
  'serbia',
  'turkey',
] as const;

export type Market = (typeof MARKETS)[number];

export interface Localized<T> {
  market: Market;
  value: T;
}

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export interface SiteLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: SiteLink[];
}

export interface FooterColumn {
  title: string;
  links: SiteLink[];
}

export interface SiteSettings {
  market: Market;
  topBar: {
    tagline: string;
    links: SiteLink[];
  };
  mainNav: NavItem[];
  footer: {
    brand: {
      name: string;
      subtitle: string;
      description: string;
    };
    columns: FooterColumn[];
    copyright: string;
    affiliateDisclosure?: string;
  };
}
