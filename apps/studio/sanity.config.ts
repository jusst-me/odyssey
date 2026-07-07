import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from '@odyssey/cms/schema';

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
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
