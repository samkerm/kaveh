import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|expo-modules-core|expo-.*|expo-router|@expo/vector-icons|react-native-reanimated|react-native-gesture-handler|react-native-safe-area-context|react-native-screens|react-native-svg|@tamagui|tamagui/)',
  ],
};

export default config;
