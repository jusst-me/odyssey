import { describe, expect, it } from 'vitest';
import { slugify } from './slug';

describe('slugify', () => {
  it('lowercases and hyphenates', () => {
    expect(slugify('Stranden van Albanië')).toBe('stranden-van-albanie');
  });

  it('strips diacritics', () => {
    expect(slugify('Sarandë')).toBe('sarande');
  });

  it('collapses non-alphanumerics and trims stray hyphens', () => {
    expect(slugify('  Top 10: Beaches!!  ')).toBe('top-10-beaches');
  });

  it('returns an empty string for symbol-only input', () => {
    expect(slugify('---')).toBe('');
  });
});
