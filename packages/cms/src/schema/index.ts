import type { SchemaTypeDefinition } from 'sanity';
import { siteSettingsSchemaTypes } from './site-settings';

export const schemaTypes: SchemaTypeDefinition[] = [...siteSettingsSchemaTypes];

export { marketField } from './market-field';
export { siteSettings } from './site-settings';
