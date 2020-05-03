// jest.config.js
module.exports = {
  preset: 'jest-expo',
  coverageThreshold: {
    global: {
      statements: 70,
    },
  },
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',
  testMatch: ['<rootDir>/src/**/*.{ts,tsx}'],
  projects: [
    {
      name: 'unit',
      setupFiles: ['./jestSetup.js'],
      preset: 'jest-expo',
      snapshotSerializers: ['enzyme-to-json/serializer'],
    },
    {
      name: 'lint',
      preset: 'jest-expo',
      runner: 'jest-runner-eslint',
    },
  ],
};
