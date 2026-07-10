import { defineField, defineType } from 'sanity';
import { marketField } from './market-field';

export const article = defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    marketField,

    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    }),
  ],
});
