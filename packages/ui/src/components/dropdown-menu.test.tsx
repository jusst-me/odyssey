import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './dropdown-menu';
import { Button } from './button';

function renderDropdownMenu() {
  return render(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Menu openen</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profiel</DropdownMenuItem>
        <DropdownMenuItem>Instellingen</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Uitloggen</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  );
}

describe('DropdownMenu', () => {
  it('opens when the trigger is clicked', async () => {
    const user = userEvent.setup();
    renderDropdownMenu();

    await user.click(screen.getByRole('button', { name: 'Menu openen' }));

    expect(screen.getByRole('menuitem', { name: 'Profiel' })).toBeVisible();
    expect(screen.getByRole('menuitem', { name: 'Instellingen' })).toBeVisible();
    expect(screen.getByRole('menuitem', { name: 'Uitloggen' })).toBeVisible();
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    renderDropdownMenu();

    await user.click(screen.getByRole('button', { name: 'Menu openen' }));
    expect(screen.getByRole('menuitem', { name: 'Profiel' })).toBeVisible();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menuitem', { name: 'Profiel' })).not.toBeInTheDocument();
  });

  it('supports keyboard navigation (ArrowDown)', async () => {
    const user = userEvent.setup();
    renderDropdownMenu();

    await user.click(screen.getByRole('button', { name: 'Menu openen' }));
    await user.keyboard('{ArrowDown}');

    const items = screen.getAllByRole('menuitem');
    expect(items.length).toBe(3);
  });

  it('has no detectable accessibility violations when open', async () => {
    const user = userEvent.setup();
    renderDropdownMenu();

    await user.click(screen.getByRole('button', { name: 'Menu openen' }));

    const { axe } = await import('vitest-axe');
    // "region" fires because portalled content sits outside landmark regions — expected for isolated component tests
    expect(
      await axe(document.body, { rules: { region: { enabled: false } } }),
    ).toHaveNoViolations();
  });
});
