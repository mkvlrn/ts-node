import { BasicMath } from '#/supermath/basic-math.js';

describe('AdvancedMath', () => {
  const math = new BasicMath();

  test('sum', () => {
    expect(math.sum(2, 2)).toBe(4);
  });

  test('subtract', () => {
    expect(math.subtract(70, 1)).toBe(69);
  });
});
