import type { SchemaTypeDefinition } from 'sanity';

/**
 * Registry of Sanity document/object schemas for the shared Odyssey dataset.
 *
 * Intentionally empty for now — concrete content models (pages, blog posts,
 * destinations, categories, authors) are tracked as Linear tickets and will be
 * added here. Each market-scoped document must include `marketField`
 * (see ./market-field.ts).
 */
export const schemaTypes: SchemaTypeDefinition[] = [];

export { marketField } from './market-field';
