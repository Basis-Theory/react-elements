import * as React from 'react';
import type {
  ITextElement,
  ElementStyle,
  InputMode,
} from '@basis-theory/web-elements';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { Chance } from 'chance';
import { TextElement } from '../../src';
import { useElement } from '../../src/elements/useElement';
import { useListener } from '../../src/elements/useListener';

jest.mock('../../src/elements/useElement');
jest.mock('../../src/elements/useListener');

describe('TextElement', () => {
  const chance = new Chance();
  const refArray = [React.createRef<ITextElement>(), undefined];

  const valueRef = React.createRef<ITextElement>();

  let id: string;
  let wrapperDiv: HTMLDivElement;
  let style: ElementStyle;
  let disabled: boolean;
  let readOnly: boolean;
  let autoComplete: 'on' | 'off';
  let ariaLabel: string;
  let inputMode: `${InputMode}`;
  let password: boolean;
  let mask: (RegExp | string)[];
  let maxLength: HTMLInputElement['maxLength'];
  let placeholder: string;
  let transform: RegExp;
  let value: string;
  let validateOnChange: boolean;
  let validation: RegExp;
  let onReady: jest.Mock;
  let onChange: jest.Mock;
  let onFocus: jest.Mock;
  let onBlur: jest.Mock;
  let onKeyDown: jest.Mock;
  let element: unknown;
  let ref: any;

  beforeEach(() => {
    id = 'my-input';
    wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('id', id);
    style = {
      [chance.string()]: chance.string(),
    };
    disabled = chance.bool();
    readOnly = chance.bool();
    autoComplete = chance.pickone(['on', 'off']);
    ariaLabel = chance.string();
    password = chance.bool();
    mask = chance.pickset(
      [/\d/u, '-'],
      chance.integer({
        min: 1,
        max: 10,
      })
    );
    maxLength = chance.integer();
    validateOnChange = chance.bool();
    placeholder = chance.string();
    transform = chance.pickone([/\d/u, /./u]);
    inputMode = 'numeric';
    value = chance.string();
    validation = chance.pickone([/\d/u, /./u]);

    onReady = jest.fn();
    onChange = jest.fn();
    onFocus = jest.fn();
    onBlur = jest.fn();
    onKeyDown = jest.fn();
    element = {
      [chance.string()]: chance.string(),
    };
    ref = chance.pickone(refArray);

    jest.mocked(useElement).mockReturnValue(element as any);
  });

  test('should match snapshot and call lifecycle hook properly', () => {
    const { container } = render(
      <TextElement
        aria-label={ariaLabel}
        autoComplete={autoComplete}
        disabled={disabled}
        id={id}
        inputMode={inputMode}
        mask={mask as never} // the need of this cast acts a props typings test :-)
        maxLength={maxLength}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onReady={onReady}
        password={password}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        style={style}
        transform={transform}
        validateOnChange={validateOnChange}
        validation={validation}
        value={value}
        valueRef={valueRef}
      />
    );

    expect(container).toMatchSnapshot();
    expect(useElement).toHaveBeenCalledWith(
      id,
      'text',
      { current: wrapperDiv },
      {
        targetId: id,
        style,
        disabled,
        autoComplete,
        'aria-label': ariaLabel,
        mask,
        maxLength,
        inputMode,
        password,
        placeholder,
        readOnly,
        transform,
        value,
        validateOnChange,
        validation,
      },
      undefined,
      // eslint-disable-next-line unicorn/no-null
      typeof ref === 'undefined' ? null : ref, // undefined ref gets forwarded as null
      valueRef
    );
    expect(useListener).toHaveBeenCalledWith('ready', element, onReady);
    expect(useListener).toHaveBeenCalledWith('change', element, onChange);
    expect(useListener).toHaveBeenCalledWith('focus', element, onFocus);
    expect(useListener).toHaveBeenCalledWith('blur', element, onBlur);
    expect(useListener).toHaveBeenCalledWith('keydown', element, onKeyDown);
  });
});
