import {
  fetchStringRequest,
  fetchStringSuccess,
  fetchStringFailure,
} from '../actions';
import {
  FETCH_STRING_REQUEST,
  FETCH_STRING_SUCCESS,
  FETCH_STRING_FAILURE,
} from '../constants';

describe('HomePage actions', () => {
  describe('fetchStringRequest', () => {
    it('should return the correct type', () => {
      const expected = {
        type: FETCH_STRING_REQUEST,
      };
      expect(fetchStringRequest()).toEqual(expected);
    });
  });

  describe('fetchStringSuccess', () => {
    it('should return the correct type and the passed strings array', () => {
      const strings = [{ id: 1, string: 'text' }, { id: 2, string: 'text2' }];
      const expected = {
        type: FETCH_STRING_SUCCESS,
        strings,
      };
      expect(fetchStringSuccess(strings)).toEqual(expected);
    });
  });

  describe('fetchStringFailure', () => {
    it('should return the correct type', () => {
      const expected = {
        type: FETCH_STRING_FAILURE,
      };
      expect(fetchStringFailure()).toEqual(expected);
    });
  });
});
