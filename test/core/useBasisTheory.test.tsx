import type {
  BasisTheoryElements,
  BasisTheoryInitOptions,
} from '@basis-theory/web-elements';
import * as webElements from '@basis-theory/web-elements';
import { renderHook, waitFor } from '@testing-library/react';
import { Chance } from 'chance';
import * as React from 'react';
import { useBasisTheory } from '../../src';
import { BasisTheoryProvider } from '../../src/core/BasisTheoryProvider';

jest.mock('@basis-theory/web-elements', () => ({
  basistheory: jest.fn(),
}));

describe('useBasisTheory', () => {
  const chance = new Chance();

  let key: string | undefined;
  let options: BasisTheoryInitOptions;

  beforeEach(() => {
    key = chance.string();
    options = {
      [chance.string()]: chance.string(),
    };
    jest.resetAllMocks();
  });

  test('should not initialize if key is falsy', async () => {
    const { result, rerender } = renderHook(() => useBasisTheory(''));
    const initialValue = result.current;

    expect(result.current.bt).toBeUndefined();

    rerender();

    await waitFor(() => {
      expect(result.current).toStrictEqual(initialValue);
    });

    expect(result.current.bt).toBeUndefined();
  });

  describe('Context', () => {
    let btFromContext: BasisTheoryElements;
    let wrapper: React.FC<{ apiKey?: string; children?: React.ReactNode }>;

    beforeEach(() => {
      btFromContext = {
        [chance.string()]: chance.string(),
      } as unknown as BasisTheoryElements;
      // eslint-disable-next-line react/display-name
      wrapper = ({ children }): JSX.Element => (
        <BasisTheoryProvider bt={btFromContext}>{children}</BasisTheoryProvider>
      );
    });

    test('should grab instance from Context if no props are passed', () => {
      const { result } = renderHook(() => useBasisTheory(), { wrapper });

      expect(result.current.bt).toStrictEqual(btFromContext);
    });

    interface RenderProps {
      apiKey?: string;
    }

    test('should favor new instance created from props over Context', async () => {
      const bt = {
        [chance.string()]: chance.string(),
      } as unknown as BasisTheoryElements;

      (webElements.basistheory as jest.Mock).mockResolvedValueOnce(bt);

      const { result, rerender } = renderHook(
        ({ apiKey }: RenderProps) => useBasisTheory(apiKey),
        {
          wrapper,
          initialProps: {},
        }
      );

      // no props, gets from Context
      expect(result.current.bt).toStrictEqual(btFromContext);

      // passes apiKey to hook
      rerender({ apiKey: 'key' });

      await waitFor(() => {
        // should get back initialized instance
        expect(result.current.bt).toStrictEqual(bt);
      });

      // goes back passing undefined apiKey to hook
      rerender({ apiKey: undefined });

      // should be the original initialized instance still
      expect(result.current.bt).toStrictEqual(bt);
    });
  });
});
