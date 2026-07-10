import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { defineField, defineType } from 'sanity';
import { marketField } from '../fields/market-field';
import { seo } from '../fields/seo';

export const article = defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  icon: DocumentTextIcon,
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

    seo,
  ],
});
