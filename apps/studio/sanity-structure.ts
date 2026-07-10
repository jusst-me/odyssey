import { MARKETS } from '@odyssey/cms';
import type { StructureBuilder } from 'sanity/structure';

export const buildStructure = (S: StructureBuilder) => {
  const marketItems = MARKETS.map((market) =>
    S.listItem()
      .title(market.charAt(0).toUpperCase() + market.slice(1))
      .child(
        S.list()
          .title(market.charAt(0).toUpperCase() + market.slice(1))
          .items([
            S.listItem()
              .title('Site Settings')
              .schemaType('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId(`siteSettings-${market}`)
                  .title('Site Settings')
                  .initialValueTemplate('siteSettings-by-market', { market }),
              ),
            S.listItem()
              .title('Articles')
              .schemaType('article')
              .child(
                S.documentTypeList('article')
                  .title('Articles')
                  .filter('_type == "article" && market == $market')
                  .params({ market })
                  .initialValueTemplates([
                    S.initialValueTemplateItem('article-by-market', { market }),
                  ]),
              ),
            S.listItem()
              .title('Cities')
              .schemaType('city')
              .child(
                S.documentTypeList('city')
                  .title('Cities')
                  .filter('_type == "city" && market == $market')
                  .params({ market })
                  .initialValueTemplates([
                    S.initialValueTemplateItem('city-by-market', { market }),
                  ]),
              ),
            S.listItem()
              .title('Locations')
              .schemaType('location')
              .child(
                S.documentTypeList('location')
                  .title('Locations')
                  .filter('_type == "location" && market == $market')
                  .params({ market })
                  .initialValueTemplates([
                    S.initialValueTemplateItem('location-by-market', { market }),
                  ]),
              ),
            S.listItem()
              .title('Routes')
              .schemaType('route')
              .child(
                S.documentTypeList('route')
                  .title('Routes')
                  .filter('_type == "route" && market == $market')
                  .params({ market })
                  .initialValueTemplates([
                    S.initialValueTemplateItem('route-by-market', { market }),
                  ]),
              ),
          ]),
      ),
  );

  return S.list().title('Markets').items(marketItems);
};
