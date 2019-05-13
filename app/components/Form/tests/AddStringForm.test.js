import React from 'react';
import { render } from 'react-testing-library';

import AddStringForm from '../AddStringForm';

describe('<AddStringForm />', () => {
  it('should render an <AddStringForm> tag', () => {
    const {
      container: { firstChild },
    } = render(<AddStringForm />);
    expect(firstChild.tagName).toEqual('FORM');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<AddStringForm />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<AddStringForm id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<AddStringForm attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
