import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders with default (primary) variant', () => {
    render(<Badge>Nieuw</Badge>);
    const badge = screen.getByText('Nieuw');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-variant', 'primary');
  });

  it('renders with secondary variant', () => {
    render(<Badge variant="secondary">Populair</Badge>);
    expect(screen.getByText('Populair')).toHaveAttribute('data-variant', 'secondary');
  });

  it('renders with outline variant', () => {
    render(<Badge variant="outline">Categorie</Badge>);
    expect(screen.getByText('Categorie')).toHaveAttribute('data-variant', 'outline');
  });

  it('renders as a link when asChild is set', () => {
    render(
      <Badge asChild>
        <a href="/tag/strand">Strand</a>
      </Badge>,
    );
    expect(screen.getByRole('link', { name: 'Strand' })).toBeInTheDocument();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<Badge>Toegankelijk</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
