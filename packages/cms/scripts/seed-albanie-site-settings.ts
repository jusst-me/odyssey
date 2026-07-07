/**
 * Seeds the siteSettings document for the albanie market.
 *
 * Run from the repo root:
 *   node --env-file=apps/studio/.env --experimental-strip-types scripts/seed-albanie-site-settings.ts
 *
 * Requires SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET and
 * SANITY_STUDIO_API_TOKEN to be set in apps/studio/.env.
 */

import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';
const token = process.env.SANITY_STUDIO_API_TOKEN;

if (!projectId || !token) {
  console.error('Missing SANITY_STUDIO_PROJECT_ID or SANITY_STUDIO_API_TOKEN.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
});

function key(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const document = {
  _id: 'siteSettings-albanie',
  _type: 'siteSettings',
  market: 'albanie',

  topBar: {
    tagline: 'Onafhankelijke reisgids · sinds 2019 · 1 EUR ≈ 98 Lek',
    links: [
      { _key: 'nieuwsbrief', label: 'Nieuwsbrief', href: '#nieuwsbrief' },
      { _key: 'reisblog', label: 'Reisblog', href: '/blog' },
      { _key: 'over-ons', label: 'Over ons', href: '/over-ons' },
    ],
  },

  mainNav: [
    {
      _key: key('Bestemmingen'),
      label: 'Bestemmingen',
      href: '/bestemmingen',
      children: [
        {
          _key: key('Albanese Riviera & kust'),
          label: 'Albanese Riviera & kust',
          href: '/bestemmingen/riviera',
        },
        {
          _key: key('Ksamil & Saranda'),
          label: 'Ksamil & Saranda',
          href: '/bestemmingen/ksamil-saranda',
        },
        {
          _key: key('Theth & Valbona'),
          label: 'Theth & Valbona (bergen)',
          href: '/bestemmingen/theth-valbona',
        },
        {
          _key: key('Berat & Gjirokaster'),
          label: 'Berat & Gjirokastër',
          href: '/bestemmingen/berat-gjirokaster',
        },
        {
          _key: key('Tirana & Shkoder'),
          label: 'Tirana & Shkodër',
          href: '/bestemmingen/tirana-shkoder',
        },
      ],
    },
    {
      _key: key('Praktisch'),
      label: 'Praktisch',
      href: '/praktisch',
      children: [
        { _key: key('Visum & inreizen'), label: 'Visum & inreizen', href: '/praktisch/visum' },
        {
          _key: key('Reisbudget & geld'),
          label: 'Reisbudget & geld',
          href: '/praktisch/reisbudget',
        },
        { _key: key('Veiligheid'), label: 'Veiligheid', href: '/praktisch/veiligheid' },
        { _key: key('Beste reistijd'), label: 'Beste reistijd', href: '/praktisch/beste-reistijd' },
        { _key: key('Taal & cultuur'), label: 'Taal & cultuur', href: '/praktisch/taal-cultuur' },
      ],
    },
    {
      _key: key('Accommodatie'),
      label: 'Accommodatie',
      href: '/accommodatie',
      children: [
        {
          _key: key('Beste hotels kust'),
          label: 'Beste hotels kust',
          href: '/accommodatie/hotels-kust',
        },
        {
          _key: key('Guesthouses bergen'),
          label: 'Guesthouses bergen',
          href: '/accommodatie/guesthouses-bergen',
        },
        {
          _key: key('Appartementen Tirana'),
          label: 'Appartementen Tirana',
          href: '/accommodatie/appartementen-tirana',
        },
      ],
    },
    {
      _key: key('Vervoer'),
      label: 'Vervoer',
      href: '/vervoer',
      children: [
        { _key: key('Auto huren'), label: 'Auto huren', href: '/vervoer/auto-huren' },
        { _key: key('Bussen & furgon'), label: 'Bussen & furgon', href: '/vervoer/bussen-furgon' },
        {
          _key: key('Veerboten & ferrys'),
          label: "Veerboten & ferry's",
          href: '/vervoer/veerboten',
        },
      ],
    },
    {
      _key: 'blog',
      label: 'Blog',
      href: '/blog',
    },
  ],

  footer: {
    brand: {
      name: 'BUKURA',
      subtitle: 'Albanië reisgids',
      description:
        'Onafhankelijke Nederlandstalige reisgids over Albanië. Geschreven door reizigers die het land écht kennen — niet door een algoritme.',
    },
    columns: [
      {
        _key: 'bestemmingen',
        title: 'Bestemmingen',
        links: [
          {
            _key: key('Albanese Riviera'),
            label: 'Albanese Riviera',
            href: '/bestemmingen/riviera',
          },
          {
            _key: key('Ksamil & Saranda-f'),
            label: 'Ksamil & Saranda',
            href: '/bestemmingen/ksamil-saranda',
          },
          {
            _key: key('Theth & Valbona-f'),
            label: 'Theth & Valbona',
            href: '/bestemmingen/theth-valbona',
          },
          {
            _key: key('Berat & Gjirokaster-f'),
            label: 'Berat & Gjirokastër',
            href: '/bestemmingen/berat-gjirokaster',
          },
          { _key: 'tirana-f', label: 'Tirana', href: '/bestemmingen/tirana-shkoder' },
        ],
      },
      {
        _key: 'praktisch',
        title: 'Praktisch',
        links: [
          { _key: key('Visum & inreizen-f'), label: 'Visum & inreizen', href: '/praktisch/visum' },
          { _key: 'reisbudget-f', label: 'Reisbudget', href: '/praktisch/reisbudget' },
          { _key: 'veiligheid-f', label: 'Veiligheid', href: '/praktisch/veiligheid' },
          {
            _key: key('Beste reistijd-f'),
            label: 'Beste reistijd',
            href: '/praktisch/beste-reistijd',
          },
          { _key: key('Auto huren-f'), label: 'Auto huren', href: '/vervoer/auto-huren' },
        ],
      },
      {
        _key: 'bukura',
        title: 'Bukura',
        links: [
          { _key: 'over-ons-f', label: 'Over ons', href: '/over-ons' },
          { _key: 'nieuwsbrief-f', label: 'Nieuwsbrief', href: '#nieuwsbrief' },
          { _key: 'contact-f', label: 'Contact', href: '/contact' },
          { _key: 'affiliate-f', label: 'Affiliate-disclosure', href: '/affiliate-disclosure' },
          { _key: 'privacy-f', label: 'Privacy & cookies', href: '/privacy' },
        ],
      },
    ],
    copyright: '© 2026 Bukura Reisgids · Een onafhankelijk reisproject',
    affiliateDisclosure:
      'Sommige links zijn affiliate-links. Jij betaalt niets extra; wij verdienen een kleine commissie.',
  },
};

const result = await client.createOrReplace(document);
console.log(`✓ siteSettings-albanie created/updated (rev: ${result._rev})`);
