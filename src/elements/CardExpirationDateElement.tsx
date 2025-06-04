import React, { FC, ForwardedRef, MutableRefObject, useRef } from 'react';
import type {
  BasisTheoryElements,
  ICardExpirationDateElement,
  CardExpirationDateElementEvents,
  CardExpirationDateValue,
  CopyIconStyles,
  CreateCardExpirationDateElementOptions,
  ElementEventListener,
  ElementStyle,
  InputMode,
} from '@basis-theory/web-elements';
import { useElement } from './useElement';
import { useListener } from './useListener';

interface CardExpirationDateElementProps {
  'aria-label'?: string;
  autoComplete?: CreateCardExpirationDateElementOptions['autoComplete'];
  bt?: BasisTheoryElements;
  copyIconStyles?: CopyIconStyles;
  disabled?: boolean;
  enableCopy?: boolean;
  id: string;
  inputMode?: `${InputMode}`;
  onBlur?: ElementEventListener<CardExpirationDateElementEvents, 'blur'>;
  onChange?: ElementEventListener<CardExpirationDateElementEvents, 'change'>;
  onFocus?: ElementEventListener<CardExpirationDateElementEvents, 'focus'>;
  onKeyDown?: ElementEventListener<CardExpirationDateElementEvents, 'keydown'>;
  onReady?: ElementEventListener<CardExpirationDateElementEvents, 'ready'>;
  placeholder?: string;
  readOnly?: boolean;
  style?: ElementStyle;
  title?: string;
  validateOnChange?: boolean;
  value?: CardExpirationDateValue<'static'> | string;
  valueRef?: MutableRefObject<ICardExpirationDateElement | null>;
}

const CardExpirationDateElementC: FC<
  CardExpirationDateElementProps & {
    elementRef?: ForwardedRef<ICardExpirationDateElement | null>;
  }
> = ({
  'aria-label': ariaLabel,
  autoComplete,
  bt,
  copyIconStyles,
  disabled,
  elementRef,
  enableCopy,
  id,
  inputMode,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onReady,
  placeholder,
  readOnly,
  style,
  title,
  validateOnChange,
  value,
  valueRef,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const element = useElement<
    ICardExpirationDateElement,
    CreateCardExpirationDateElementOptions
  >(
    id,
    'cardExpirationDate',
    wrapperRef,
    {
      'aria-label': ariaLabel,
      autoComplete,
      copyIconStyles,
      disabled,
      enableCopy,
      inputMode,
      placeholder,
      readOnly,
      style,
      targetId: id,
      title,
      validateOnChange,
      value,
    },
    bt,
    elementRef,
    valueRef
  );

  useListener('ready', element, onReady);
  useListener('change', element, onChange);
  useListener('focus', element, onFocus);
  useListener('blur', element, onBlur);
  useListener('keydown', element, onKeyDown);

  return <div id={id} ref={wrapperRef} />;
};

export const CardExpirationDateElement = React.forwardRef<
  ICardExpirationDateElement,
  CardExpirationDateElementProps
  // eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
>(function CardExpirationDateElement(props, ref) {
  return <CardExpirationDateElementC {...props} elementRef={ref} />;
});

export type { CardExpirationDateElementProps };
