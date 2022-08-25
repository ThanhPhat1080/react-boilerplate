export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@Components': '<rootDir>/src/Components',
    '^@Pages': '<rootDir>/src/Pages',
    '^@enums': '<rootDir>/src/enums',
    '^@helpers': '<rootDir>/src/helpers',
    '^@utils': '<rootDir>/src/utils',
    '^@assets': '<rootDir>/src/assets',
    '^.+\\.svg$': 'jest-svg-transformer',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testMatch: ['<rootDir>/src/**/*.test.{tsx,ts}', '<rootDir>/src/**/__tests__/*.test.{tsx,ts}'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/__tests__/*.test.{tsx,ts}', '!src/**/*.d.ts'],
};
