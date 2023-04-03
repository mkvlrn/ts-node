import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: './src',
  resolve: {
    alias: { '#': resolve(__dirname, './src') },
  },
  test: {
    coverage: { reportsDirectory: '../coverage', reporter: ['lcov', 'html', 'text'] },
    environment: 'node',
    passWithNoTests: true,
  },
  server: {
    watch: { ignored: ['**/*.test.ts'] },
  },
});
