import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Input } from './input';

describe('Input', () => {
  it('renders an accessible text input', () => {
    render(<Input aria-label="E-mailadres" />);
    expect(screen.getByRole('textbox', { name: 'E-mailadres' })).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Naam" />);
    const input = screen.getByRole('textbox', { name: 'Naam' });

    await user.type(input, 'Albanië');
    expect(input).toHaveValue('Albanië');
  });

  it('supports the disabled state', () => {
    render(<Input aria-label="Uitgeschakeld" disabled />);
    expect(screen.getByRole('textbox', { name: 'Uitgeschakeld' })).toBeDisabled();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(
      <label>
        E-mail
        <Input type="email" />
      </label>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
