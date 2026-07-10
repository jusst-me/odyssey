import { fetchSiteSettings } from '@odyssey/cms';
import { LayoutShell } from '../../components/layout-shell';
import { topBarConfig, mainNavItems, footerConfig } from '../../lib/navigation';

// Revalidate every 60 seconds in production; dev bypasses this via useCdn: false.
export const revalidate = 60;

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await fetchSiteSettings('albania');

  const topBar = settings?.topBar ?? topBarConfig;
  const navItems = settings?.mainNav ?? mainNavItems;
  const footer = settings?.footer ?? footerConfig;

  return (
    <LayoutShell topBar={topBar} navItems={navItems} footer={footer}>
      {children}
    </LayoutShell>
  );
}
