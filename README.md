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
- src/ui/ — shared UI
- src/api/ — networking layer
- src/lib/ — utilities
- src/theme/ — design tokens & theme

## Notes

- Tamagui configured via `tamagui.config.ts`, provided in root.
- Reanimated and Gesture Handler configured in `babel.config.js` and `app/_layout.tsx`.

## Coding standards

### TypeScript

- Strict mode enabled; prefer explicit types on public boundaries (props, function returns).
- Avoid `any`; if unavoidable, isolate and add a short comment why. ESLint warns on `no-explicit-any`.
- Use discriminated unions and enums sparingly; prefer string union types for status-like fields.

### React and components

- Functional components with hooks only; no classes.
- Naming: components in PascalCase (`BedsList.tsx`), hooks in camelCase prefixed with `use` (`useBeds.ts`).
- Co-locate screen UI and logic under `src/flows/screens/<Screen>/components/<Component>` with tests next to them.
- Keep business logic in hooks; keep components presentational.
- Prefer composition over props drilling; lift state only when needed.

### Styling (Tamagui)

- Use Tamagui primitives (`YStack`, `XStack`, `Text`, `Button`, etc.) and design tokens.
- Theme tokens: prefer semantic tokens like `$background`, `$color` and spacing tokens like `$2`, `$4`.
- Avoid inline style objects; prefer Tamagui props and tokens.
- Wrap tests rendering UI with `TamaguiProvider` using `tamagui.config.ts` when needed.

### Files, folders, and naming

- Routes live only under `app/` (Expo Router). Keep files there thin and delegate to `src`.
- Screen-centric structure: `src/flows/screens/<Screen>/components/...` with co-located tests (`*.test.tsx`).
- Shared building blocks live under `src/ui`, utilities under `src/lib`, API under `src/api`, and theme under `src/theme`.
- Filenames: `.ts` for non-React, `.tsx` for React.

### Imports and aliases

- Use path aliases defined in `tsconfig.json` (e.g., `@/flows/...`).
- Group imports: external libs first, then aliased internal, then relative.

### Testing

- Use Jest with `@testing-library/react-native` and `jest-native` matchers.
- Filename: `*.test.ts` / `*.test.tsx` next to the code under test.
- Prefer user-facing queries (by text/role) and avoid implementation details.
- For hooks, use `renderHook`; for components, use `render` and assert behavior, not internals.

### Linting and formatting

- ESLint v9 flat config (`eslint.config.cjs`) with Universe Native and `@typescript-eslint`.
- Prettier enforces: single quotes, trailing commas, 100 cols, semicolons (see `.prettierrc`).
- Run locally:
  - Lint: `yarn lint` (fix: `yarn lint:fix`)
  - Format: `yarn format` (check: `yarn format:check`)
  - Types: `yarn typecheck`
  - Tests: `yarn test -i`
- Note: ESLint ignores are configured in `eslint.config.cjs` (not `.eslintignore`).

### Git hygiene

- Keep commits focused; use imperative present-tense messages.
- Prefer small PRs with tests and updated docs when behavior changes.
