/**
 *
 * Tests for DisplayStrings
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import DisplayStrings from '../index';

describe('<DisplayStrings />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<DisplayStrings strings={[]} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render ', () => {
    const { getByText } = render(
      <DisplayStrings strings={[{ id: 1, string: 'testing' }]} />,
    );
    expect(getByText('testing')).toBeTruthy();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<DisplayStrings strings={[]} />);

    expect(firstChild).toMatchSnapshot();
  });
});
