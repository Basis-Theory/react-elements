import React, { FC, useRef, ForwardedRef, MutableRefObject } from 'react';
import type {
  BasisTheoryElements,
  ICardNumberElement,
  CardNumberElementEvents,
  CopyIconStyles,
  CreateCardNumberElementOptions,
  CreditCardType,
  ElementEventListener,
  ElementStyle,
  InputMode,
  SanitizedElementOptions,
} from '@basis-theory/web-elements';
import { useElement } from './useElement';
import { useListener } from './useListener';

interface CardNumberElementProps {
  'aria-label'?: string;
  autoComplete?: CreateCardNumberElementOptions['autoComplete'];
  bt?: BasisTheoryElements;
  cardTypes?: CreditCardType[];
  copyIconStyles?: CopyIconStyles;
  disabled?: boolean;
  enableCopy?: boolean;
  iconPosition?: SanitizedElementOptions['iconPosition'];
  id: string;
  inputMode?: `${InputMode}`;
  onBlur?: ElementEventListener<CardNumberElementEvents, 'blur'>;
  onChange?: ElementEventListener<CardNumberElementEvents, 'change'>;
  onFocus?: ElementEventListener<CardNumberElementEvents, 'focus'>;
  onKeyDown?: ElementEventListener<CardNumberElementEvents, 'keydown'>;
  onReady?: ElementEventListener<CardNumberElementEvents, 'ready'>;
  placeholder?: string;
  readOnly?: boolean;
  skipLuhnValidation?: boolean;
  style?: ElementStyle;
  title?: string;
  validateOnChange?: boolean;
  value?: string;
  valueRef?: MutableRefObject<ICardNumberElement | null>;
}

const CardNumberElementC: FC<
  CardNumberElementProps & { elementRef?: ForwardedRef<ICardNumberElement> }
> = ({
  'aria-label': ariaLabel,
  autoComplete,
  bt,
  cardTypes,
  copyIconStyles,
  disabled,
  elementRef,
  enableCopy,
  iconPosition,
  id,
  inputMode,
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
  valueRef,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const element = useElement<
    ICardNumberElement,
    CreateCardNumberElementOptions & {
      valueRef?: MutableRefObject<ICardNumberElement | null>;
    }
  >(
    id,
    'cardNumber',
    wrapperRef,
    {
      'aria-label': ariaLabel,
      autoComplete,
      cardTypes,
      copyIconStyles,
      disabled,
      enableCopy,
      iconPosition,
      inputMode,
      placeholder,
      readOnly,
      skipLuhnValidation,
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

export const CardNumberElement = React.forwardRef<
  ICardNumberElement,
  CardNumberElementProps
  // eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
>(function CardNumberElement(props, ref) {
  return <CardNumberElementC {...props} elementRef={ref} />;
});

export type { CardNumberElementProps };
