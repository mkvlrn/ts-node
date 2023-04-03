import { describe, expect, test } from 'vitest';
import { AdvancedMath } from '#/supermath/advanced-math.js';

describe('advancedMath', () => {
  const math = new AdvancedMath();

  test('multiplies', () => {
    expect(math.multiply(2, 3)).toBe(6);
  });

  test('divides', () => {
    expect(math.divide(6, 3)).toBe(2);
  });

  test('throws when attempting to divide by zero', () => {
    expect(() => math.divide(2, 0)).toThrow('nope');
  });
});
