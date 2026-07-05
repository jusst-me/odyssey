import { describe, expect, it } from 'vitest';
import { formatCurrency } from './format';

describe('formatCurrency', () => {
  it('formats EUR in nl-NL without decimals by default', () => {
    const result = formatCurrency(1234);
    expect(result).toContain('€');
    expect(result).toContain('1.234');
  });

  it('rounds to whole units', () => {
    expect(formatCurrency(1234.56)).toContain('1.235');
  });

  it('honours a custom currency and locale', () => {
    expect(formatCurrency(1234, { currency: 'USD', locale: 'en-US' })).toBe('$1,234');
  });
});
