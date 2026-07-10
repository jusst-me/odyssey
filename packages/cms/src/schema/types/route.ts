import { defineField, defineType } from 'sanity';
import { marketField } from '../fields/market-field';
import { seo } from '../fields/seo';

export const route = defineType({
  name: 'route',
  type: 'document',
  title: 'Route',
  fields: [
    marketField,
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (rule) => rule.required(),
      options: { source: 'name' },
    }),
    seo,
  ],
});
