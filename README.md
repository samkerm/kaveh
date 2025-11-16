# Kaveh

Cross-platform Expo app (iOS, Android, Web) with Expo Router, Tamagui, TypeScript, ESLint/Prettier, Jest, and Husky.

## Scripts
- yarn start / ios / android / web
- yarn typecheck
- yarn lint / lint:fix
- yarn format / format:check
- yarn test / test:watch / test:cov
- yarn build:web

## Structure
- app/ — routes (Expo Router)
- src/features/ — vertical slices (components, hooks, services, tests)
- src/ui/ — shared UI
- src/api/ — networking layer
- src/lib/ — utilities
- src/theme/ — design tokens & theme

## Notes
- Tamagui configured via `tamagui.config.ts`, provided in root.
- Reanimated and Gesture Handler configured in `babel.config.js` and `app/_layout.tsx`.