# react-elements

[![Version](https://img.shields.io/npm/v/@basis-theory/react-elements.svg)](https://www.npmjs.org/package/@basis-theory/react-elements)
[![Downloads](https://img.shields.io/npm/dm/@basis-theory/react-elements.svg)](https://www.npmjs.org/package/@basis-theory/react-elements)
[![Verify](https://github.com/Basis-Theory/react-elements/actions/workflows/release.yml/badge.svg)](https://github.com/Basis-Theory/react-elements/actions/workflows/release.yml)

A React wrapper for [Basis Theory](https://basistheory.com/) JS SDK.

## Installation

Using [Node Package Manager]([https://docs.npmjs.com/](https://www.npmjs.com/package/@basis-theory/react-elements))

```sh
npm install --save @basis-theory/react-elements
```

Using [Yarn]([https://classic.yarnpkg.com/en/docs/](https://classic.yarnpkg.com/en/package/@basis-theory/react-elements))

```sh
yarn add @basis-theory/react-elements
```

## Documentation

For a complete list of endpoints and examples, please refer to our [React docs](https://developers.basistheory.com/docs/sdks/web/react/)

## Usage

### Initialization

Initializing the SDK is done via calling the `useBasisTheory` hook with parameters:

```jsx
import { useBasisTheory } from '@basis-theory/react-elements';

export default function MyWrapper() {
  const { bt, error } = useBasisTheory('<Public API Key>'); // replace with your application key

  // instance stays undefined during initialization
  if (bt) {
    // able to call BasisTheory methods
  }

  if (error) {
    // initialization error
  }
}
```

### Context Provider

You can pass the `BasisTheoryReact` instance down to your component tree using `BasisTheoryProvider`, and access it later calling the `useBasisTheory` hook without any parameters:

```jsx
import {
  BasisTheoryProvider,
  useBasisTheory,
} from '@basis-theory/react-elements';

const App = () => {
  const { bt } = useBasisTheory('<Public API Key>', {
    elements: true,
  });

  return (
    <BasisTheoryProvider bt={bt}>
      <MyComponent />
    </BasisTheoryProvider>
  );
};

const MyComponent = () => {
  // calling this hook with no attributes grabs the instance from Context
  const { bt } = useBasisTheory();

  return <div>My content</div>;
};
```

### Elements

[Elements](https://developers.basistheory.com/docs/sdks/web/react/#initialization) capabilities are available when passing `elements: true` in initialization options.

```jsx
import {
  BasisTheoryProvider,
  TextElement,
  useBasisTheory,
} from '@basis-theory/react-elements';

const App = () => {
  const { bt } = useBasisTheory('<Public API Key>', {
    elements: true,
  });

  return (
    <BasisTheoryProvider bt={bt}>
      <MyComponent />
    </BasisTheoryProvider>
  );
};

const MyComponent = () => {
  // calling this hook with no attributes grabs the instance from Context
  const { bt } = useBasisTheory();

  return <TextElement id="myInput" />;
};
```

## Development

The provided scripts with the SDK will check for all dependencies, build the solution and run all tests.

### Dependencies

- [NodeJS](https://nodejs.org/en/) > 10.12.0
- [Yarn](https://classic.yarnpkg.com/en/docs/)

### Build the SDK and run Tests

Run the following command from the root of the project:

```sh
make verify
```
