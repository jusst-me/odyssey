/**
 * Sanity environment configuration.
 * Supports two env var prefixes so the same package works in both contexts:
 *   - NEXT_PUBLIC_SANITY_*  → Next.js apps (server + client)
 *   - SANITY_STUDIO_*       → standalone Sanity Studio (Vite, browser-only)
 */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_STUDIO_PROJECT_ID ?? '';

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_STUDIO_DATASET ?? 'production';

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ??
  process.env.SANITY_STUDIO_API_VERSION ??
  '2025-01-01';

/** Studio route mounted inside apps (e.g. /studio). */
export const studioBasePath = '/studio';

export function assertSanityEnv(): void {
  if (!projectId) {
    throw new Error(
      'Missing Sanity project ID. Set NEXT_PUBLIC_SANITY_PROJECT_ID (Next.js) or SANITY_STUDIO_PROJECT_ID (Studio).',
    );
  }
}
