import { defineField } from 'sanity';
import { MARKETS } from '../../types';

/**
 * Reusable `market` field. EVERY market-scoped document type must spread this in
 * so content can be filtered per app/country from the shared dataset.
 */
export const marketField = defineField({
  name: 'market',
  title: 'Market',
  type: 'string',
  hidden: true,
  options: {
    list: MARKETS.map((m) => ({ title: m, value: m })),
    layout: 'dropdown',
  },
  initialValue: 'albania',
  validation: (rule) => rule.required(),
});
