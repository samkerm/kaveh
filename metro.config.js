// @ts-check
const { getDefaultConfig } = require('expo/metro-config');
const { withTamagui } = require('@tamagui/metro-plugin');

const config = getDefaultConfig(__dirname);

module.exports = withTamagui(config, {
  config: require.resolve('./tamagui.config.ts'),
  components: ['tamagui'],
});
