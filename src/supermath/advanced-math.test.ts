import assert from 'node:assert';
import { test } from 'node:test';
import { divide, multiply } from '#/supermath/advanced-math.js';

test('multiplies', () => {
  assert.strictEqual(multiply(2, 3), 6);
});

test('divides', () => {
  assert.strictEqual(divide(6, 3), 2);
});

test('throws when attempting to divide by zero', () => {
  assert.throws(() => divide(2, 0), { message: 'nope' });
});
