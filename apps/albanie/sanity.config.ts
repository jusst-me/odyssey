import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from '@odyssey/cms/schema';
import { dataset, projectId } from '@odyssey/cms';

export default defineConfig({
  name: 'odyssey-albanie',
  title: 'Odyssey — Albanië',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
