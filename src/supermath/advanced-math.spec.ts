import { AdvancedMath } from '#/supermath/advanced-math.js';

describe('AdvancedMath', () => {
  const math = new AdvancedMath();

  test('multiply', () => {
    expect(math.multiply(2, 3)).toBe(6);
  });

  test('divide', () => {
    expect(math.divide(6, 3)).toBe(2);
  });

  test('divide by zero throws', () => {
    expect(() => math.divide(2, 0)).toThrow('nope');
  });
});
