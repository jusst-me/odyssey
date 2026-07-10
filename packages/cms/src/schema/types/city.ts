import { PinIcon } from '@sanity/icons/Pin';
import { defineField, defineType } from 'sanity';
import { marketField } from '../fields/market-field';
import { seo } from '../fields/seo';

export const city = defineType({
  name: 'city',
  type: 'document',
  title: 'City',
  icon: PinIcon,
  fields: [
    marketField,

    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'name',
      },
    }),

    seo,
  ],
});
