import * as React from 'react';
import type {
  CopyButtonElement as ICopyButtonElement,
  CopyButtonElementStyle,
  ICardNumberElement,
} from '@basis-theory/web-elements';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { Chance } from 'chance';
import { CopyButtonElement } from '../../src';
import { useElement } from '../../src/elements/useElement';
import { useListener } from '../../src/elements/useListener';

jest.mock('../../src/elements/useElement');
jest.mock('../../src/elements/useListener');

describe('CopyButtonElement', () => {
  const chance = new Chance();
  const refArray = [React.createRef<ICopyButtonElement>(), undefined];

  const valueRef = React.createRef<ICardNumberElement>();

  let element: unknown;
  let id: string;
  let onClick: jest.Mock;
  let onCopy: jest.Mock;
  let ref: any;
  let style: CopyButtonElementStyle;
  let text: string;
  let wrapperDiv: HTMLDivElement;

  beforeEach(() => {
    id = 'my-copy-button';
    wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('id', id);
    style = {
      [chance.string()]: chance.string(),
    };
    text = chance.string();
    onClick = jest.fn();
    onCopy = jest.fn();
    element = {
      [chance.string()]: chance.string(),
    };
    ref = chance.pickone(refArray);

    jest.mocked(useElement).mockReturnValue(element as any);
  });

  test('should match snapshot and call lifecycle hook properly', () => {
    const { container } = render(
      <CopyButtonElement
        id={id}
        onClick={onClick}
        onCopy={onCopy}
        ref={ref}
        style={style}
        text={text}
        valueRef={valueRef}
      />
    );

    expect(container).toMatchSnapshot();
    expect(useElement).toHaveBeenCalledWith(
      id,
      'copyButton',
      { current: wrapperDiv },
      {
        style,
        targetId: id,
        text,
      },
      undefined,
      // eslint-disable-next-line unicorn/no-null
      typeof ref === 'undefined' ? null : ref, // undefined ref gets forwarded as null
      valueRef
    );
    expect(useListener).toHaveBeenCalledWith('click', element, onClick);
    expect(useListener).toHaveBeenCalledWith('copy', element, onCopy);
  });

  test('should render without optional props', () => {
    const { container } = render(<CopyButtonElement id={id} />);

    expect(container).toMatchSnapshot();
    expect(useElement).toHaveBeenCalledWith(
      id,
      'copyButton',
      { current: wrapperDiv },
      {
        style: undefined,
        targetId: id,
        text: undefined,
      },
      undefined,
      // eslint-disable-next-line unicorn/no-null
      null,
      undefined
    );
    expect(useListener).toHaveBeenCalledWith('click', element, undefined);
    expect(useListener).toHaveBeenCalledWith('copy', element, undefined);
  });
});
