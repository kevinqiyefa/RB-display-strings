/**
 *
 * Tests for Li
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';

import LI from '../index';

describe('<LI />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<LI id={id} />);
    expect(container.querySelector('li').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<line>{children}</line>);
    const { childNodes } = container.querySelector('h1');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
