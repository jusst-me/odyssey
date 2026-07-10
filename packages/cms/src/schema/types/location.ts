import { defineField, defineType } from 'sanity';
import { marketField } from '../fields/market-field';
import { seo } from '../fields/seo';
import { MarkerIcon } from '@sanity/icons/Marker';

export const location = defineType({
  name: 'location',
  type: 'document',
  title: 'Location',
  icon: MarkerIcon,
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
