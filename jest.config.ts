import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

// NOTE moduleNameMapper interplet the paths

// NOTE Config Jest Runner
// 1 - Install plugin VSCode Jest Runner
// 2 - VSCode settings: Jest Runner: Code Lens Selector = **/*.{test,spec,int-spec}.{js,jsx,ts,tsx}

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
}
