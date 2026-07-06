import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

function renderTabs() {
  return render(
    <Tabs defaultValue="hotels">
      <TabsList>
        <TabsTrigger value="hotels">Hotels</TabsTrigger>
        <TabsTrigger value="vluchten">Vluchten</TabsTrigger>
        <TabsTrigger value="autohuur">Autohuur</TabsTrigger>
      </TabsList>
      <TabsContent value="hotels">Hotelresultaten</TabsContent>
      <TabsContent value="vluchten">Vluchtresultaten</TabsContent>
      <TabsContent value="autohuur">Autohuurresultaten</TabsContent>
    </Tabs>,
  );
}

describe('Tabs', () => {
  it('renders all tab triggers', () => {
    renderTabs();
    expect(screen.getByRole('tab', { name: 'Hotels' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Vluchten' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Autohuur' })).toBeInTheDocument();
  });

  it('shows the default tab content', () => {
    renderTabs();
    expect(screen.getByText('Hotelresultaten')).toBeVisible();
  });

  it('switches tabs on click', async () => {
    const user = userEvent.setup();
    renderTabs();

    await user.click(screen.getByRole('tab', { name: 'Vluchten' }));
    expect(screen.getByText('Vluchtresultaten')).toBeVisible();
  });

  it('supports keyboard navigation (ArrowRight)', async () => {
    const user = userEvent.setup();
    renderTabs();

    const hotelsTab = screen.getByRole('tab', { name: 'Hotels' });
    hotelsTab.focus();

    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Vluchten' })).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(screen.getByText('Vluchtresultaten')).toBeVisible();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = renderTabs();
    expect(await axe(container)).toHaveNoViolations();
  });
});
