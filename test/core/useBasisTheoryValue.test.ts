import { renderHook } from '@testing-library/react';
import { useBasisTheory } from '../../src/core/useBasisTheory';
import { useBasisTheoryValue } from '../../src/elements/useBasisTheoryValue';
import type { BasisTheoryElements } from '@basis-theory/web-elements';

jest.mock('../../src/core/useBasisTheory');

describe('useBasisTheoryValue', () => {
  let btParam: BasisTheoryElements;
  let btContext: BasisTheoryElements;

  beforeEach(() => {
    btParam = {} as BasisTheoryElements;
    btContext = {} as BasisTheoryElements;
  });

  test('should return undefined when no instance is available', () => {
    // @ts-expect-error
    jest.mocked(useBasisTheory).mockReturnValue({});
    const { result } = renderHook(() => useBasisTheoryValue());

    expect(result.current).toBeUndefined();
  });
  test('should return instance from context', () => {
    jest.mocked(useBasisTheory).mockReturnValue({ bt: btContext });
    const { result } = renderHook(() => useBasisTheoryValue());

    expect(result.current).toBe(btContext);
  });
  test('should favor parameter instance', () => {
    jest.mocked(useBasisTheory).mockReturnValue({ bt: btContext });
    const { result } = renderHook(() => useBasisTheoryValue(btParam));

    expect(result.current).toBe(btParam);
  });
});
