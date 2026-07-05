import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Button } from './button';

describe('Button', () => {
  it('renders its label as an accessible button', () => {
    render(<Button>Boek nu</Button>);
    expect(screen.getByRole('button', { name: 'Boek nu' })).toBeInTheDocument();
  });

  it('is keyboard-operable (Enter and Space activate it)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Verstuur</Button>);

    const button = screen.getByRole('button', { name: 'Verstuur' });
    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard('{Enter}');
    await user.keyboard(' ');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('renders as its child element when `asChild` is set', () => {
    render(
      <Button asChild>
        <a href="/reizen">Bekijk reizen</a>
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'Bekijk reizen' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('inline-flex');
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<Button>Toegankelijk</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
