import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

// biome-ignore lint/nursery/noDefaultExport: vite.config.ts is a config file
export default defineConfig({
  resolve: {
    alias: { '#': resolve('.', './src') },
  },
  test: {
    coverage: {
      reportsDirectory: 'coverage',
      reporter: ['lcov', 'html', 'text'],
      all: true,
      include: ['src/**/*'],
      exclude: ['src/index.ts', '**/*.test.ts', '**/*.d.ts'],
    },
    env: {
      // biome-ignore lint/style/useNamingConvention: convention
      NODE_ENV: 'test',
    },
    environment: 'node',
    passWithNoTests: true,
    setupFiles: ['vitest.setup.ts'],
  },
});
