import type { SchemaTypeDefinition } from 'sanity';
import { siteSettingsSchemaTypes } from './types/site-settings';
import { article } from './types/article';
import { location } from './types/location';
import { route } from './types/route';

export const schemaTypes: SchemaTypeDefinition[] = [
  ...siteSettingsSchemaTypes,
  article,
  location,
  route,
];

export { marketField } from './fields/market-field';
export { siteSettings } from './types/site-settings';
