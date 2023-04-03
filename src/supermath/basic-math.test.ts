import { describe, expect, test } from 'vitest';
import { BasicMath } from '#/supermath/basic-math.js';

describe('advancedMath', () => {
  const math = new BasicMath();

  test('sums', () => {
    expect(math.sum(2, 2)).toBe(4);
  });

  test('subtracts', () => {
    expect(math.subtract(70, 1)).toBe(69);
  });
});
