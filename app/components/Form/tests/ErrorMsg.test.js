import React from 'react';
import { render } from 'react-testing-library';

import ErrorMsg from '../ErrorMsg';

describe('<ErrorMsg />', () => {
  it('should render an <ErrorMsg> tag', () => {
    const {
      container: { firstChild },
    } = render(<ErrorMsg />);
    expect(firstChild.tagName).toEqual('P');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<ErrorMsg />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<ErrorMsg id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<ErrorMsg attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
