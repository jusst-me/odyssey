import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { SiteFooter } from './site-footer';

const defaultProps = {
  brand: {
    name: 'BUKURA',
    subtitle: 'Albanië reisgids',
    description: 'Onafhankelijke reisgids over Albanië.',
  },
  columns: [
    {
      title: 'Bestemmingen',
      links: [
        { label: 'Riviera', href: '/riviera' },
        { label: 'Tirana', href: '/tirana' },
      ],
    },
    {
      title: 'Praktisch',
      links: [{ label: 'Visum', href: '/visum' }],
    },
  ],
  copyright: '© 2026 Bukura',
  affiliateDisclosure: 'Sommige links zijn affiliate-links.',
};

describe('SiteFooter', () => {
  it('renders brand description', () => {
    render(<SiteFooter {...defaultProps} />);
    expect(screen.getByText(defaultProps.brand.description)).toBeInTheDocument();
  });

  it('renders link columns with headings', () => {
    render(<SiteFooter {...defaultProps} />);
    expect(screen.getByText('Bestemmingen')).toBeInTheDocument();
    expect(screen.getByText('Praktisch')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Riviera' })).toHaveAttribute('href', '/riviera');
  });

  it('renders copyright and affiliate disclosure', () => {
    render(<SiteFooter {...defaultProps} />);
    expect(screen.getByText('© 2026 Bukura')).toBeInTheDocument();
    expect(screen.getByText('Sommige links zijn affiliate-links.')).toBeInTheDocument();
  });

  it('renders newsletter slot when provided', () => {
    render(
      <SiteFooter
        {...defaultProps}
        newsletterSlot={<div data-testid="newsletter">Subscribe</div>}
      />,
    );
    expect(screen.getByTestId('newsletter')).toBeInTheDocument();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<SiteFooter {...defaultProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
