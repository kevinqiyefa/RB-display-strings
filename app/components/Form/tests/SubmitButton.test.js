import React from 'react';
import { render } from 'react-testing-library';

import SubmitButton from '../SubmitButton';

describe('<SubmitButton />', () => {
  it('should render an <input> tag', () => {
    const { container } = render(<SubmitButton />);
    expect(container.querySelector('input')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<SubmitButton />);
    expect(container.querySelector('input').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<SubmitButton id={id} />);
    expect(container.querySelector('input').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<SubmitButton attribute="test" />);
    expect(container.querySelector('input[attribute="test"]')).toBeNull();
  });
});
