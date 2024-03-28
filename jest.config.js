module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/dist/tests/**/*.js'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/tests/jest.config.js'],
  };
  