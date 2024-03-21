import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

// NOTE moduleNameMapper interplet the paths

// NOTE Config Jest Runner
// 1 - Install plugin VSCode Jest Runner
// 2 - VSCode settings: Jest Runner: Code Lens Selector = **/*.{test,spec,int-spec}.{js,jsx,ts,tsx}

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: 'rooDir/',
  }),
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/server/**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['src/server/console', 'src/server/migration'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
}
