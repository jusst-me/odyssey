import { topBarConfig, mainNavItems, footerConfig } from '../../lib/navigation';
import { LayoutShell } from '../../components/layout-shell';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutShell topBar={topBarConfig} navItems={mainNavItems} footer={footerConfig}>
      {children}
    </LayoutShell>
  );
}
