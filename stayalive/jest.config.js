const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/connexion/(.*)$": "<rootDir>/connexion/$1",
    "^@/inscription/(.*)$": "<rootDir>/inscription/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: [
    '/node_modules/(?!(firebase|@firebase)/)',
  ],
});
