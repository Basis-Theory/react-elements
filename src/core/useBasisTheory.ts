import { useEffect, useState, useRef } from 'react';

import { useBasisTheoryFromContext } from './BasisTheoryProvider';
import type {
  BasisTheoryElements,
  BasisTheoryInitOptions,
} from '@basis-theory/web-elements';
import { basistheory } from '@basis-theory/web-elements';

type UseBasisTheory = {
  error?: Error;
  bt?: BasisTheoryElements;
};

const useBasisTheory = (apiKey?: string, options?: BasisTheoryInitOptions) => {
  const [state, setState] = useState<UseBasisTheory>({});
  const isLoading = useRef(false);

  const { bt: btFromContext } = useBasisTheoryFromContext();

  useEffect(() => {
    (async (): Promise<void> => {
      if (!state.bt && apiKey && !state.error && !isLoading.current) {
        try {
          isLoading.current = true;
          const bt = await basistheory(apiKey, options);

          setState({
            bt,
          });
        } catch (error) {
          setState({
            error: error as Error,
          });
        } finally {
          isLoading.current = false;
        }
      }
    })();
  }, [state.bt, apiKey, options, state.error]);

  if (state.bt || state.error) {
    return {
      bt: state.bt,
      error: state.error,
    };
  }

  return {
    bt: btFromContext,
  };
};

export { useBasisTheory };
