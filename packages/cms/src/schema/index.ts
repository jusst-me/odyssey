import type { SchemaTypeDefinition } from 'sanity';
import { siteSettingsSchemaTypes } from './site-settings';
import { article } from './articles';

export const schemaTypes: SchemaTypeDefinition[] = [...siteSettingsSchemaTypes, article];

export { marketField } from './market-field';
export { siteSettings } from './site-settings';
