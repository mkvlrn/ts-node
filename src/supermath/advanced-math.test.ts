import { describe, expect, it } from 'vitest';

import { AdvancedMath } from '#/supermath/advanced-math.js';

describe('advancedMath', () => {
  const math = new AdvancedMath();

  it('multiplies', () => {
    expect(math.multiply(2, 3)).toBe(6);
  });

  it('divides', () => {
    expect(math.divide(6, 3)).toBe(2);
  });

  it('throws when attempting to divide by zero', () => {
    expect(() => math.divide(2, 0)).toThrow('nope');
  });
});
