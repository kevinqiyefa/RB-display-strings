/**
 *
 * Tests for Ul
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';

import UL from '../index';

describe('<UL />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<UL id={id} />);
    expect(container.querySelector('ul').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<UL>{children}</UL>);
    const { childNodes } = container.querySelector('h1');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
