import { createClient, type SanityClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from './env';

/**
 * Shared read client. `useCdn` is enabled for fast, cached public reads;
 * disable it for draft/preview scenarios (handled per-app later).
 */
export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
