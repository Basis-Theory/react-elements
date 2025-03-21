import React, {
  ForwardedRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import type {
  BaseElement,
  BasisTheoryElements,
  ElementType,
} from '@basis-theory/web-elements';
import { useBasisTheoryValue } from './useBasisTheoryValue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ElementWithSetValueRef = BaseElement<any, any> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValueRef: (element: BaseElement<any, any>) => void;
};

const elementHasSetValueRef = (val: unknown): val is ElementWithSetValueRef =>
  Boolean((val as ElementWithSetValueRef).setValueRef);

const shallowDifference = <
  A extends Record<string, unknown>,
  B extends Record<string, unknown>
>(
  objA?: A,
  objB?: B
): Partial<A & B> =>
  [...new Set([...Object.keys(objA || {}), ...Object.keys(objB || {})])].reduce(
    (changed, key) => {
      const aValue = objA?.[key];
      const bValue = objB?.[key];

      if (aValue !== bValue) {
        return {
          ...changed,
          [key]: bValue,
        };
      }

      return changed;
    },
    {}
  );

/**
 * Creates, mounts and indexes an Element
 * with React lifecycle
 * @param id
 * @param type
 * @param options
 * @param wrapperRef
 * @param btFromProps
 * @param ref optional ref to set the underlying element
 * @returns created element and initial options used for mounting
 */
const useElement = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Element extends BaseElement<any, any>,
  Options extends unknown
>(
  id: string,
  type: ElementType,
  wrapperRef: React.RefObject<HTMLDivElement>,
  options: Options,
  btFromProps?: BasisTheoryElements,
  ref?: ForwardedRef<Element>,
  targetValueRef?: MutableRefObject<Element | null>
): Element | undefined => {
  const bt = useBasisTheoryValue(btFromProps);
  const [lastOptions, setLastOptions] = useState<Options>();
  const elementRef = useRef<Element | null>(null);

  useEffect(() => {
    if (bt && wrapperRef.current && !elementRef.current) {
      const newElement = bt.createElement(
        type as never,
        options as never
      ) as unknown as Element; // conversion to unknown necessary because of different value prop types

      elementRef.current = newElement;

      if (typeof ref === 'function') {
        ref(newElement);
      }

      if (ref && typeof ref === 'object') {
        // eslint-disable-next-line no-param-reassign
        ref.current = newElement;
      }

      (async () => {
        await newElement.mount(`#${id}`).catch((mountError) => {
          setLastOptions(() => {
            throw mountError;
          });
        });

        if (elementHasSetValueRef(newElement) && targetValueRef?.current) {
          newElement.setValueRef(targetValueRef.current);
        }
      })();

      setLastOptions(options);
    }

    // the only two dependencies that we need to watch for
    // are bt and wrapperRef. Anything else changing should not
    // be considered for creating/mounting an element
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bt, wrapperRef]);

  useEffect(() => {
    if (elementRef.current && lastOptions && options !== lastOptions) {
      const optionsDifference = shallowDifference(
        lastOptions as Record<string, unknown>,
        options as Record<string, unknown>
      );

      if (Object.keys(optionsDifference).length) {
        setLastOptions(options);
        elementRef.current.update(optionsDifference).catch((updateError) => {
          setLastOptions(() => {
            throw updateError;
          });
        });
      }
    }
  }, [options, lastOptions]);

  return elementRef?.current || undefined;
};

export { useElement };
