import { expect, test } from 'vitest';
import { subtract, sum } from '#/supermath/basic-math.js';

test('sums', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts', () => {
  expect(subtract(70, 1)).toBe(69);
});
