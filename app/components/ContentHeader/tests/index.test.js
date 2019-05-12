import React from 'react';
import { render } from 'react-testing-library';

import ContentHeader from '../index';

describe('<ContentHeader />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<ContentHeader id={id} />);
    expect(container.querySelector('h1').id).toEqual('testId');
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(
      <ContentHeader>{children}</ContentHeader>,
    );
    const { childNodes } = container.querySelector('h1');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
