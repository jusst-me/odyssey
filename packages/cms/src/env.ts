/**
 * Sanity environment configuration.
 * Values are read from env vars so the same shared project/dataset is reused
 * across every app in the monorepo (multi-market via the `market` field).
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2025-01-01';

/** Studio route mounted inside apps (e.g. /studio). */
export const studioBasePath = '/studio';

export function assertSanityEnv(): void {
  if (!projectId) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.');
  }
}
