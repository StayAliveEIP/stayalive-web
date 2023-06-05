module.exports = {
    preset: 'ts-jest',
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
        '^.+\\.css$': 'jest-css-modules-transform'
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  