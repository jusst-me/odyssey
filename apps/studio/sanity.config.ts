import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import type { StructureBuilder } from 'sanity/structure';

import { schemaTypes } from '@odyssey/cms/schema';
import { MARKETS } from '@odyssey/cms';

/**
 * Shared Sanity Studio for the entire Odyssey platform.
 * One Studio manages content for all markets via the `market` field.
 *
 * The Studio runs on Vite and only exposes variables prefixed with
 * SANITY_STUDIO_ to the browser. See apps/studio/.env.example.
 */
const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? '';
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

function buildStructure(S: StructureBuilder) {
  const marketItems = MARKETS.map((market) =>
    S.listItem()
      .title(market.charAt(0).toUpperCase() + market.slice(1))
      .child(
        S.list()
          .title(market)
          .items([
            S.listItem()
              .title('Site Settings')
              .schemaType('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId(`siteSettings-${market}`)
                  .title('Site Settings'),
              ),
          ]),
      ),
  );

  return S.list()
    .title('Content')
    .items([S.listItem().title('Markets').child(S.list().title('Markets').items(marketItems))]);
}

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
  ],
  schema: {
    types: schemaTypes,
  },
});
