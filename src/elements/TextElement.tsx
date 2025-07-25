import React, { FC, useRef, ForwardedRef, MutableRefObject } from 'react';
import type {
  BasisTheoryElements,
  CreateTextElementOptions,
  ElementEventListener,
  ElementStyle,
  InputMode,
  ITextElement,
  TextElementEvents,
} from '@basis-theory/web-elements';
import { useElement } from './useElement';
import { useListener } from './useListener';

interface BaseTextElementProps {
  'aria-label'?: string;
  autoComplete?: CreateTextElementOptions['autoComplete'];
  bt?: BasisTheoryElements;
  disabled?: boolean;
  id: string;
  inputMode?: `${InputMode}`;
  maxLength?: HTMLInputElement['maxLength'];
  onBlur?: ElementEventListener<TextElementEvents, 'blur'>;
  onChange?: ElementEventListener<TextElementEvents, 'change'>;
  onFocus?: ElementEventListener<TextElementEvents, 'focus'>;
  onKeyDown?: ElementEventListener<TextElementEvents, 'keydown'>;
  onReady?: ElementEventListener<TextElementEvents, 'ready'>;
  placeholder?: string;
  readOnly?: boolean;
  style?: ElementStyle;
  title?: string;
  transform?: RegExp | [RegExp, string?];
  validateOnChange?: boolean;
  validation?: RegExp;
  value?: string;
  valueRef?: MutableRefObject<ITextElement | null>;
}

interface MaskedTextElementProps extends BaseTextElementProps {
  mask?: (RegExp | string)[];
  password?: false;
}

interface PasswordTextElementProps extends BaseTextElementProps {
  mask?: never;
  password: true;
}

type TextElementProps = MaskedTextElementProps | PasswordTextElementProps;

const TextElementC: FC<
  TextElementProps & { elementRef?: ForwardedRef<ITextElement> }
> = ({
  'aria-label': ariaLabel,
  autoComplete,
  bt,
  disabled,
  elementRef,
  id,
  inputMode,
  mask,
  maxLength,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onReady,
  password,
  placeholder,
  readOnly,
  style,
  title,
  transform,
  validateOnChange,
  validation,
  value,
  valueRef,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const element = useElement<ITextElement, CreateTextElementOptions>(
    id,
    'text',
    wrapperRef,
    {
      'aria-label': ariaLabel,
      autoComplete,
      disabled,
      inputMode,
      mask,
      maxLength,
      password,
      placeholder,
      readOnly,
      style,
      targetId: id,
      title,
      transform,
      validateOnChange,
      validation,
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

export const TextElement = React.forwardRef<ITextElement, TextElementProps>(
  // eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
  function TextElement(props, ref) {
    return <TextElementC {...props} elementRef={ref} />;
  }
);

export type { TextElementProps };
