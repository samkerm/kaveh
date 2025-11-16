import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { tokens, themes } from '@tamagui/themes';
import { createTamagui } from 'tamagui';

const interFont = createInterFont();

const tamaguiConfig = createTamagui({
  defaultTheme: 'light',
  themes,
  tokens,
  fonts: {
    body: interFont,
    heading: interFont,
    mono: interFont,
  },
  shorthands,
});

export type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig;
