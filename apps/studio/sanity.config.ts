import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from '@odyssey/cms/schema';

/**
 * Standalone Sanity Studio voor het gehele Odyssey platform.
 * Eén Studio beheert content voor alle markets via het `market`-veld.
 *
 * De Studio draait op Vite en exposes alleen variabelen met het
 * SANITY_STUDIO_-prefix aan de browser. Zie apps/studio/.env.example.
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
