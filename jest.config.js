const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.jest');

module.exports = {
  projects: [
    {
      automock: false,
      clearMocks: true,
      coveragePathIgnorePatterns: ['test', 'dist'],
      displayName: 'jsdom',
      moduleNameMapper: {
        ...pathsToModuleNameMapper(
          {
            '~/*': ['src/*'],
            '@basis-theory/web-elements': ['../web-elements/src'],
          },
          {
            prefix: '<rootDir>/',
          }
        ),
        '^@basis-theory/web-elements$': '<rootDir>/../web-elements/src',
      },
      modulePaths: ['<rootDir>'],
      roots: ['<rootDir>'],
      testEnvironment: 'jsdom',
      testPathIgnorePatterns: ['cypress'],
      transform: {
        '^.+\\.(t|j)sx?$': [
          '@swc/jest',
          { jsc: { parser: { syntax: 'typescript' } } },
        ],
      },
      setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
      globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.jest.json',
        },
      },
    },
  ],
};
