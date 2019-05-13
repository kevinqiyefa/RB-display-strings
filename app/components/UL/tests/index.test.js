import React from 'react';
import { render } from 'react-testing-library';

import UL from '../index';

describe('<UL />', () => {
  it('should render an <ul> tag', () => {
    const {
      container: { firstChild },
    } = render(<UL />);
    expect(firstChild.tagName).toEqual('UL');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<UL />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<UL id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<UL attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
