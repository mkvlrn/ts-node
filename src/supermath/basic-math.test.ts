import { describe, expect, it } from 'vitest';

import { BasicMath } from '#/supermath/basic-math.js';

describe('advancedMath', () => {
  const math = new BasicMath();

  it('sums', () => {
    expect(math.sum(2, 2)).toBe(4);
  });

  it('subtracts', () => {
    expect(math.subtract(70, 1)).toBe(69);
  });
});
