import { createClient, type SanityClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from './env';

/**
 * Shared read client.
 * CDN is disabled in development so Studio changes are visible immediately.
 * In production, useCdn gives fast cached reads; combine with ISR/tag-based
 * revalidation for near-instant updates.
 *
 * A placeholder projectId is used when the env var is absent so module
 * evaluation never throws (e.g. in CI or cold-start without env vars).
 * Queries guard against a missing projectId and return null early.
 */
export const sanityClient: SanityClient = createClient({
  projectId: projectId || 'unconfigured',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});
