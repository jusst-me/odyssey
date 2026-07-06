import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { TopBar } from './top-bar';

describe('TopBar', () => {
  it('renders tagline text', () => {
    render(<TopBar tagline="Test tagline" />);
    expect(screen.getByText('Test tagline')).toBeInTheDocument();
  });

  it('renders utility links', () => {
    const links = [
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'About', href: '/about' },
    ];
    render(<TopBar tagline="Tag" links={links} />);
    expect(screen.getByRole('link', { name: 'Newsletter' })).toHaveAttribute('href', '/newsletter');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
  });

  it('renders without links when none are provided', () => {
    render(<TopBar tagline="Tag" />);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(
      <TopBar tagline="Independent travel guide" links={[{ label: 'Blog', href: '/blog' }]} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
