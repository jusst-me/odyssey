import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from '@odyssey/cms/schema';
import { buildStructure } from './sanity-structure';
import { visionTool } from '@sanity/vision';

/**
 * Shared Sanity Studio for the entire Odyssey platform.
 * One Studio manages content for all markets via the `market` field.
 *
 * The Studio runs on Vite and only exposes variables prefixed with
 * SANITY_STUDIO_ to the browser. See apps/studio/.env.example.
 */
const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? '';
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

export default defineConfig({
  name: 'odyssey-studio',
  title: 'Odyssey Studio',
  projectId,
  dataset,
  basePath: '/',
  plugins: [
    structureTool({
      structure: buildStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // In Sanity v6, templates live under schema — not at the top level.
    templates: (prev) => [
      ...prev,
      {
        id: 'siteSettings-by-market',
        title: 'Site Settings',
        schemaType: 'siteSettings',
        parameters: [{ name: 'market', title: 'Market', type: 'string' }],
        value: (params: { market: string }) => ({ market: params.market }),
      },
      {
        id: 'article-by-market',
        title: 'Article',
        schemaType: 'article',
        parameters: [{ name: 'market', title: 'Market', type: 'string' }],
        value: (params: { market: string }) => ({ market: params.market }),
      },
    ],
  },
});
