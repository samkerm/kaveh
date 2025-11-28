import withTM from 'next-transpile-modules';

const withTranspile = withTM([
  'react-native',
  'react-native-safe-area-context',
  'react-native-reanimated',
  'react-native-gesture-handler',
  'react-native-svg',
  'tamagui',
  '@tamagui',
]);

/** Basic Next config to validate server start; Tamagui plugin disabled until webpack dep resolves */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'react-native',
    'react-native-safe-area-context',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'react-native-svg',
    'tamagui',
    '@tamagui',
  ],
};

export default withTranspile(nextConfig);
