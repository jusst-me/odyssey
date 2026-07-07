import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from '@odyssey/cms/schema';

/**
 * Standalone Sanity Studio voor het gehele Odyssey platform.
 * Eén Studio beheert content voor alle markets via het `market`-veld.
 *
 * Env vars worden gelezen uit de root `.env` (zie /.env.example).
 * In CI/productie: stel NEXT_PUBLIC_SANITY_PROJECT_ID en
 * NEXT_PUBLIC_SANITY_DATASET in als omgevingsvariabelen.
 */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

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
