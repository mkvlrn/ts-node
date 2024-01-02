import assert from 'node:assert';
import { test } from 'node:test';
import { subtract, sum } from '#/supermath/basic-math.js';

test('sums', () => {
  assert.strictEqual(sum(2, 2), 4);
});

test('subtracts', () => {
  assert.strictEqual(subtract(70, 1), 69);
});
