'use client';

import NextDynamic from 'next/dynamic';

const Studio = NextDynamic(() => import('./Studio'), { ssr: false });

export default function StudioLoader() {
  return <Studio />;
}
