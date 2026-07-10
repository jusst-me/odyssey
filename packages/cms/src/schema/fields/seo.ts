import { defineField } from 'sanity';

export const seo = defineField({
  name: 'seo',
  type: 'object',
  title: 'SEO',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
  ],
});
