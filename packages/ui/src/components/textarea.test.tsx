import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders an accessible textarea', () => {
    render(<Textarea aria-label="Bericht" />);
    expect(screen.getByRole('textbox', { name: 'Bericht' })).toBeInTheDocument();
  });

  it('accepts multi-line user input', async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Beschrijving" />);
    const textarea = screen.getByRole('textbox', { name: 'Beschrijving' });

    await user.type(textarea, 'Regel 1{enter}Regel 2');
    expect(textarea).toHaveValue('Regel 1\nRegel 2');
  });

  it('supports the disabled state', () => {
    render(<Textarea aria-label="Uitgeschakeld" disabled />);
    expect(screen.getByRole('textbox', { name: 'Uitgeschakeld' })).toBeDisabled();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(
      <label>
        Opmerkingen
        <Textarea />
      </label>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
