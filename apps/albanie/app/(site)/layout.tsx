import { fetchSiteSettings } from '@odyssey/cms';
import { LayoutShell } from '../../components/layout-shell';
import { topBarConfig, mainNavItems, footerConfig } from '../../lib/navigation';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await fetchSiteSettings('albanie');

  const topBar = settings?.topBar ?? topBarConfig;
  const navItems = settings?.mainNav ?? mainNavItems;
  const footer = settings?.footer ?? footerConfig;

  return (
    <LayoutShell topBar={topBar} navItems={navItems} footer={footer}>
      {children}
    </LayoutShell>
  );
}
