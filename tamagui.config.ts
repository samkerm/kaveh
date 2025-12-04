import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { tokens, themes } from '@tamagui/themes';
import { createTamagui } from 'tamagui';

const interFont = createInterFont();

const themesWithOutline = Object.fromEntries(
  Object.entries(themes).map(([name, theme]) => [
    name,
    {
      ...theme,
      outlineColor: (theme as any).borderColor ?? '#cccccc',
    },
  ]),
);

const tamaguiConfig = createTamagui({
  defaultTheme: 'light',
  themes: themesWithOutline,
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
