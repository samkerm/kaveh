module.exports = function (api) {
  api.cache(true);
  const isTest = process.env.JEST_WORKER_ID !== undefined || process.env.NODE_ENV === 'test';
  return {
    presets: ['babel-preset-expo'],
    plugins: isTest
      ? []
      : [
          [
            '@tamagui/babel-plugin',
            { components: ['tamagui'], config: './tamagui.config.ts', logTimings: false },
          ],
          'react-native-reanimated/plugin',
        ],
  };
};
