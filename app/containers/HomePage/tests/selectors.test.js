import makeSelectStrings, { selectHomePageDomain } from '../selectors';

describe('selectHomePageDomain', () => {
  it('should select the string state', () => {
    const stringState = {
      strings: [{ id: 1, string: 'test' }],
    };
    const mockedState = {
      strings: stringState,
    };

    expect(selectHomePageDomain(mockedState)).toEqual(stringState);
  });
});

describe('makeSelectUsername', () => {
  const stringsSelector = makeSelectStrings();
  it('should select the username', () => {
    const stringState = {
      strings: [{ id: 1, string: 'test' }],
    };
    const mockedState = {
      strings: stringState,
    };

    expect(stringsSelector(mockedState)).toEqual(stringState.strings);
  });
});
