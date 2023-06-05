module.exports = {
    preset: 'ts-jest',
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  };
  