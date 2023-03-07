import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: { '#': resolve(__dirname, './src') },
    coverage: { reportsDirectory: 'coverage', include: ['src/**'] },
    environment: 'node',
    passWithNoTests: true,
  },
});
