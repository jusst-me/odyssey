import NextDynamic from 'next/dynamic';

export { metadata, viewport } from 'next-sanity/studio';
export const dynamic = 'force-dynamic';

const Studio = NextDynamic(() => import('./Studio'), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
