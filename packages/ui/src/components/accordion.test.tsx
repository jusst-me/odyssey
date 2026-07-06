import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

function renderAccordion() {
  return render(
    <Accordion type="single" collapsible>
      <AccordionItem value="faq-1">
        <AccordionTrigger>Wat is de beste reistijd?</AccordionTrigger>
        <AccordionContent>Mei tot september voor strandvakanties.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>Heb ik een visum nodig?</AccordionTrigger>
        <AccordionContent>Nee, EU-burgers hebben geen visum nodig.</AccordionContent>
      </AccordionItem>
    </Accordion>,
  );
}

describe('Accordion', () => {
  it('renders all triggers', () => {
    renderAccordion();
    expect(screen.getByRole('button', { name: /beste reistijd/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /visum/i })).toBeInTheDocument();
  });

  it('expands content on click', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByRole('button', { name: /beste reistijd/i });
    await user.click(trigger);

    expect(screen.getByText(/Mei tot september/)).toBeVisible();
  });

  it('is keyboard-operable (Enter toggles)', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByRole('button', { name: /visum/i });
    trigger.focus();
    await user.keyboard('{Enter}');

    expect(screen.getByText(/EU-burgers/)).toBeVisible();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = renderAccordion();
    expect(await axe(container)).toHaveNoViolations();
  });
});
