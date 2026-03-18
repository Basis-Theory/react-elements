# React Elements

React SDK for Basis Theory Elements — provides React components wrapping the Basis Theory Elements JS SDK.

## Development Workflow

This package is part of the `basistheory-elements` monorepo workspace. Build from the monorepo root or standalone:

```bash
yarn install
yarn build            # Build the package (uses Parcel)
yarn watch            # Watch mode for development
```

## Testing

```bash
yarn lint             # ESLint
yarn lint:fix         # Auto-fix
yarn test             # Unit tests (Jest)
npx jest --testPathPattern="<pattern>"   # Targeted test
```

## Feedback Loops

Use `yarn watch` for live rebuilds + `npx jest --testPathPattern="<pattern>"` for targeted tests.

When a failing test is discovered, always verify it passes using the appropriate feedback loop before considering the fix complete.

## Standards & Conventions

- TypeScript, Parcel for bundling, Jest for testing
- `yarn` for package management

## Links

- [React Elements docs](https://developers.basistheory.com/docs/sdks/web/react/)
