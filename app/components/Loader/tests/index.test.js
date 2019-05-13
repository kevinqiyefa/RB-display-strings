import React from 'react';
import { render } from 'react-testing-library';

import Loader from '../index';

describe('<Loader />', () => {
  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<Loader />);
    expect(firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<Loader />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<Loader id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<Loader attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
