import React, { FC, useRef, ForwardedRef } from 'react';
import type {
  BasisTheoryElements,
  ICardElement,
  CardElementEvents,
  CardElementPlaceholder,
  CardElementValue,
  CopyIconStyles,
  CreateCardElementOptions,
  CreditCardType,
  CoBadgedSupport,
  ElementEventListener,
  ElementStyle,
  InputMode,
} from '@basis-theory/web-elements';
import { useElement } from './useElement';
import { useListener } from './useListener';

interface CardElementProps {
  autoComplete?: CreateCardElementOptions['autoComplete'];
  binLookup?: boolean;
  bt?: BasisTheoryElements;
  cardTypes?: CreditCardType[];
  coBadgedSupport?: CoBadgedSupport[];
  copyIconStyles?: CopyIconStyles;
  disabled?: boolean;
  enableCopy?: boolean;
  id: string;
  inputMode?: `${InputMode}`;
  maxElapsedExpirationYear?: number;
  onBlur?: ElementEventListener<CardElementEvents, 'blur'>;
  onChange?: ElementEventListener<CardElementEvents, 'change'>;
  onFocus?: ElementEventListener<CardElementEvents, 'focus'>;
  onKeyDown?: ElementEventListener<CardElementEvents, 'keydown'>;
  onReady?: ElementEventListener<CardElementEvents, 'ready'>;
  placeholder?: CardElementPlaceholder;
  readOnly?: boolean;
  skipLuhnValidation?: boolean;
  style?: ElementStyle;
  title?: string;
  validateOnChange?: boolean;
  value?: CardElementValue<'static'>;
}

const CardElementC: FC<
  CardElementProps & { elementRef?: ForwardedRef<ICardElement> }
> = ({
  autoComplete,
  binLookup,
  bt,
  cardTypes,
  coBadgedSupport,
  copyIconStyles,
  disabled,
  elementRef,
  enableCopy,
  id,
  inputMode,
  maxElapsedExpirationYear,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onReady,
  placeholder,
  readOnly,
  skipLuhnValidation,
  style,
  title,
  validateOnChange,
  value,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const element = useElement<ICardElement, CreateCardElementOptions>(
    id,
    'card',
    wrapperRef,
    {
      autoComplete,
      cardTypes,
      copyIconStyles,
      disabled,
      enableCopy,
      binLookup,
      coBadgedSupport,
      inputMode,
      maxElapsedExpirationYear,
      placeholder,
      readOnly,
      skipLuhnValidation,
      style,
      title,
      validateOnChange,
      value,
    },
    bt,
    elementRef
  );

  useListener('ready', element, onReady);
  useListener('change', element, onChange);
  useListener('focus', element, onFocus);
  useListener('blur', element, onBlur);
  useListener('keydown', element, onKeyDown);

  return <div id={id} ref={wrapperRef} />;
};

export const CardElement = React.forwardRef<ICardElement, CardElementProps>(
  // eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
  function CardElement(props, ref) {
    return <CardElementC {...props} elementRef={ref} />;
  }
);

export type { CardElementProps };
