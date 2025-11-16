// @ts-check
const { withTamagui } = require('@tamagui/metro-plugin');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = withTamagui(config, {
  config: require.resolve('./tamagui.config.ts'),
  components: ['tamagui'],
});
