import { BasicMath } from '#/supermath/basic-math.js';

describe('AdvancedMath', () => {
  const sut = new BasicMath();

  test('sum', () => {
    expect(sut.sum(2, 2)).toBe(4);
  });

  test('subtract', () => {
    expect(sut.subtract(70, 1)).toBe(69);
  });
});
