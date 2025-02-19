import type { BasisTheoryElements } from '@basis-theory/web-elements';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

interface BasisTheoryProviderValue {
  bt?: BasisTheoryElements;
}

interface BasisTheoryProviderProps {
  bt?: BasisTheoryElements;
}

const BasisTheoryContext = createContext<BasisTheoryProviderValue>({});

const BasisTheoryProvider = ({
  bt,
  children,
}: PropsWithChildren<BasisTheoryProviderProps>): JSX.Element => {
  const value = useMemo(
    () => ({
      bt,
    }),
    [bt]
  );

  return (
    <BasisTheoryContext.Provider value={value}>
      {children}
    </BasisTheoryContext.Provider>
  );
};

const useBasisTheoryFromContext = (): BasisTheoryProviderValue =>
  useContext(BasisTheoryContext);

export { BasisTheoryProvider, useBasisTheoryFromContext };
