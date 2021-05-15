module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDit>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@/tests/(.*)': '<rootDir>/tests/$1',
  },
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  transform: { '.+\\.ts': 'ts-jest' },
};
