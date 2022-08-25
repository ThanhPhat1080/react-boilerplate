export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@Components': '<rootDir>/src/Components',
    '^@Pages': '<rootDir>/src/Pages',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  testMatch: ['<rootDir>/src/**/*.test.{tsx,ts}', '<rootDir>/src/**/__tests__/*.test.{tsx,ts}'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/__tests__/*.test.{tsx,ts}', '!src/**/*.d.ts'],
};
