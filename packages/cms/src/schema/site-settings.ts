import { defineField, defineType } from 'sanity';
import { marketField } from './market-field';

const linkFields = [
  defineField({ name: 'label', type: 'string', title: 'Label', validation: (r) => r.required() }),
  defineField({ name: 'href', type: 'string', title: 'URL', validation: (r) => r.required() }),
];

const linkItem = defineType({
  name: 'linkItem',
  type: 'object',
  title: 'Link',
  fields: linkFields,
  preview: { select: { title: 'label', subtitle: 'href' } },
});

const navItem = defineType({
  name: 'navItem',
  type: 'object',
  title: 'Navigation item',
  fields: [
    defineField({ name: 'label', type: 'string', title: 'Label', validation: (r) => r.required() }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'URL',
      description: 'Required when there are no dropdown items.',
      validation: (r) =>
        r.custom((href, ctx) => {
          const children = (ctx.parent as { children?: unknown[] } | undefined)?.children;
          if (!href && (!children || children.length === 0)) {
            return 'Provide a URL or at least one dropdown item.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'children',
      type: 'array',
      title: 'Dropdown items',
      description: 'When filled, the URL above is used as the "view all" link (optional).',
      of: [{ type: 'object', fields: linkFields, preview: { select: { title: 'label' } } }],
    }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
});

export const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    marketField,

    defineField({
      name: 'topBar',
      type: 'object',
      title: 'Top bar',
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Links',
          of: [{ type: 'object', fields: linkFields, preview: { select: { title: 'label' } } }],
        }),
      ],
    }),

    defineField({
      name: 'mainNav',
      type: 'array',
      title: 'Main navigation',
      of: [{ type: 'navItem' as const }],
    }),

    defineField({
      name: 'footer',
      type: 'object',
      title: 'Footer',
      fields: [
        defineField({
          name: 'brand',
          type: 'object',
          title: 'Brand',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Name' }),
            defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
            defineField({ name: 'description', type: 'text', title: 'Description', rows: 3 }),
          ],
        }),
        defineField({
          name: 'columns',
          type: 'array',
          title: 'Link columns',
          of: [
            {
              type: 'object',
              title: 'Column',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Column title',
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: 'links',
                  type: 'array',
                  title: 'Links',
                  of: [
                    {
                      type: 'object',
                      fields: linkFields,
                      preview: { select: { title: 'label' } },
                    },
                  ],
                }),
              ],
              preview: { select: { title: 'title' } },
            },
          ],
        }),
        defineField({ name: 'copyright', type: 'string', title: 'Copyright' }),
        defineField({
          name: 'affiliateDisclosure',
          type: 'text',
          title: 'Affiliate disclosure',
          rows: 2,
        }),
      ],
    }),
  ],

  preview: {
    select: { market: 'market' },
    prepare: ({ market }: { market?: string }) => ({
      title: 'Site Settings',
      subtitle: market ?? 'no market set',
    }),
  },
});

export const siteSettingsSchemaTypes = [siteSettings, linkItem, navItem];
