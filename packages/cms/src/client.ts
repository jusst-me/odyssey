import { createClient, type SanityClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from './env';

/**
 * Shared read client.
 * CDN is disabled in development so Studio changes are visible immediately.
 * In production, useCdn gives fast cached reads; combine with ISR/tag-based
 * revalidation for near-instant updates.
 */
export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});
