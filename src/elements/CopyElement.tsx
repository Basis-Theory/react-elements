import type {
  BasisTheoryElements,
  CopyButtonElementEvents,
  CopyButtonElementStyle,
  CreateCopyButtonElementOptions,
  ElementEventListener,
  ICardExpirationDateElement,
  ICardNumberElement,
  ICardVerificationCodeElement,
  ICopyButtonElement,
} from '@basis-theory/web-elements';
import React, { FC, ForwardedRef, MutableRefObject, useRef } from 'react';
import { useElement } from './useElement';
import { useListener } from './useListener';

interface CopyButtonElementProps {
  bt?: BasisTheoryElements;
  id: string;
  onClick?: ElementEventListener<CopyButtonElementEvents, 'click'>;
  text?: string;
  style?: CopyButtonElementStyle;
  valueRef?: MutableRefObject<
    | ICardNumberElement
    | ICardExpirationDateElement
    | ICardVerificationCodeElement
    | null
  >;
}

const CopyButtonElementC: FC<
  CopyButtonElementProps & { elementRef?: ForwardedRef<ICopyButtonElement> }
> = ({ bt, elementRef, id, text, onClick, style, valueRef }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const element = useElement<
    ICopyButtonElement,
    CreateCopyButtonElementOptions & {
      valueRef?: MutableRefObject<
        | ICardNumberElement
        | ICardExpirationDateElement
        | ICardVerificationCodeElement
        | null
      >;
    },
    | ICardNumberElement
    | ICardExpirationDateElement
    | ICardVerificationCodeElement
  >(
    id,
    'copyButton',
    wrapperRef,
    {
      targetId: id,
      style,
      text,
    },
    bt,
    elementRef,
    valueRef
  );

  useListener('click', element, onClick);

  return <div id={id} ref={wrapperRef} />;
};

export const CopyButtonElement = React.forwardRef<
  ICopyButtonElement,
  CopyButtonElementProps
>(function CardNumberElement(props, ref) {
  return <CopyButtonElementC {...props} elementRef={ref} />;
});

export type { CopyButtonElementProps };
