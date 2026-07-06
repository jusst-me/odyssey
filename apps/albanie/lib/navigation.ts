import type { TopBarLink } from '@odyssey/ui';

export const topBarConfig = {
  tagline: 'Onafhankelijke reisgids · sinds 2019 · 1 EUR ≈ 98 Lek',
  links: [
    { label: 'Nieuwsbrief', href: '#nieuwsbrief' },
    { label: 'Reisblog', href: '/blog' },
    { label: 'Over ons', href: '/over-ons' },
  ] satisfies TopBarLink[],
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNavItems: NavItem[] = [
  {
    label: 'Bestemmingen',
    href: '/bestemmingen',
    children: [
      { label: 'Albanese Riviera & kust', href: '/bestemmingen/riviera' },
      { label: 'Ksamil & Saranda', href: '/bestemmingen/ksamil-saranda' },
      { label: 'Theth & Valbona (bergen)', href: '/bestemmingen/theth-valbona' },
      { label: 'Berat & Gjirokastër', href: '/bestemmingen/berat-gjirokaster' },
      { label: 'Tirana & Shkodër', href: '/bestemmingen/tirana-shkoder' },
    ],
  },
  {
    label: 'Praktisch',
    href: '/praktisch',
    children: [
      { label: 'Visum & inreizen', href: '/praktisch/visum' },
      { label: 'Reisbudget & geld', href: '/praktisch/reisbudget' },
      { label: 'Veiligheid', href: '/praktisch/veiligheid' },
      { label: 'Beste reistijd', href: '/praktisch/beste-reistijd' },
      { label: 'Taal & cultuur', href: '/praktisch/taal-cultuur' },
    ],
  },
  {
    label: 'Accommodatie',
    href: '/accommodatie',
    children: [
      { label: 'Beste hotels kust', href: '/accommodatie/hotels-kust' },
      { label: 'Guesthouses bergen', href: '/accommodatie/guesthouses-bergen' },
      { label: 'Appartementen Tirana', href: '/accommodatie/appartementen-tirana' },
    ],
  },
  {
    label: 'Vervoer',
    href: '/vervoer',
    children: [
      { label: 'Auto huren', href: '/vervoer/auto-huren' },
      { label: 'Bussen & furgon', href: '/vervoer/bussen-furgon' },
      { label: "Veerboten & ferry's", href: '/vervoer/veerboten' },
    ],
  },
  { label: 'Blog', href: '/blog' },
];

export const footerLinks = {
  bestemmingen: [
    { label: 'Albanese Riviera', href: '/bestemmingen/riviera' },
    { label: 'Ksamil & Saranda', href: '/bestemmingen/ksamil-saranda' },
    { label: 'Theth & Valbona', href: '/bestemmingen/theth-valbona' },
    { label: 'Berat & Gjirokastër', href: '/bestemmingen/berat-gjirokaster' },
    { label: 'Tirana', href: '/bestemmingen/tirana-shkoder' },
  ],
  praktisch: [
    { label: 'Visum & inreizen', href: '/praktisch/visum' },
    { label: 'Reisbudget', href: '/praktisch/reisbudget' },
    { label: 'Veiligheid', href: '/praktisch/veiligheid' },
    { label: 'Beste reistijd', href: '/praktisch/beste-reistijd' },
    { label: 'Auto huren', href: '/vervoer/auto-huren' },
  ],
  odyssey: [
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Nieuwsbrief', href: '#nieuwsbrief' },
    { label: 'Contact', href: '/contact' },
    { label: 'Affiliate-disclosure', href: '/affiliate-disclosure' },
    { label: 'Privacy & cookies', href: '/privacy' },
  ],
};
