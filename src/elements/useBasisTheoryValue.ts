import type { BasisTheoryElements } from '@basis-theory/web-elements';
import { useBasisTheory } from '../core';

/**
 * Resolves which BasisTheoryReact instance to use,
 * by favoring the optional parameter.
 * For internal use only.
 * @param bt
 * @returns parameter if it exists; instance from Context otherwise
 */
const useBasisTheoryValue = (
  bt?: BasisTheoryElements
): BasisTheoryElements | undefined => {
  const { bt: btFromContext } = useBasisTheory();

  return (bt || btFromContext) as BasisTheoryElements | undefined;
};

export { useBasisTheoryValue };
