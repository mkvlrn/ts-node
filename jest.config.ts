import { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: Config = {
  passWithNoTests: true,
  preset: 'ts-jest',
  rootDir: './',
  testRegex: '.(spec|test).(ts|tsx)$',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  collectCoverageFrom: ['./src/**/*.ts', '!./src/index.ts'],
};

export default config;
