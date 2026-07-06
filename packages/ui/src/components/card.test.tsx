import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';

describe('Card', () => {
  it('renders card content', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Bestemmingen</CardTitle>
          <CardDescription>Populaire reisbestemmingen in Albanië</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Tirana, Saranda, Berat</p>
        </CardContent>
        <CardFooter>
          <span>Bekijk meer</span>
        </CardFooter>
      </Card>,
    );

    expect(screen.getByText('Bestemmingen')).toBeInTheDocument();
    expect(screen.getByText('Populaire reisbestemmingen in Albanië')).toBeInTheDocument();
    expect(screen.getByText('Tirana, Saranda, Berat')).toBeInTheDocument();
    expect(screen.getByText('Bekijk meer')).toBeInTheDocument();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Aanbieding</CardTitle>
        </CardHeader>
        <CardContent>
          <p>€299 p.p.</p>
        </CardContent>
      </Card>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
