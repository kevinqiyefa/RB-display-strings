import produce from 'immer';
import homePageReducer from '../reducer';
import { fetchStringSuccess } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = { strings: [] };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchStringSuccess action correctly', () => {
    const stringsArray = [{ id: 1, string: 'text' }];
    const expectedResult = produce(state, draft => {
      draft.strings = stringsArray;
    });

    expect(homePageReducer(state, fetchStringSuccess(stringsArray))).toEqual(
      expectedResult,
    );
  });
});
