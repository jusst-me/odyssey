/**
 * Format a number as a localized currency string.
 * Defaults to EUR / nl-NL, matching the initial Albania market.
 */
export function formatCurrency(
  amount: number,
  options: { currency?: string; locale?: string } = {},
): string {
  const { currency = 'EUR', locale = 'nl-NL' } = options;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
