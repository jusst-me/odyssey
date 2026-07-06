import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './dialog';
import { Button } from './button';

function renderDialog() {
  return render(
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialoog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bevestig boeking</DialogTitle>
          <DialogDescription>Weet je zeker dat je wilt boeken?</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>,
  );
}

describe('Dialog', () => {
  it('opens when the trigger is clicked', async () => {
    const user = userEvent.setup();
    renderDialog();

    await user.click(screen.getByRole('button', { name: 'Open dialoog' }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Bevestig boeking')).toBeVisible();
    expect(screen.getByText('Weet je zeker dat je wilt boeken?')).toBeVisible();
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    renderDialog();

    await user.click(screen.getByRole('button', { name: 'Open dialoog' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has no detectable accessibility violations when open', async () => {
    const user = userEvent.setup();
    renderDialog();

    await user.click(screen.getByRole('button', { name: 'Open dialoog' }));

    expect(await import('vitest-axe').then((m) => m.axe(document.body))).toHaveNoViolations();
  });
});
