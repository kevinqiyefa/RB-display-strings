import {
  postStringRequest,
  postStringSuccess,
  postStringFailure,
} from '../actions';
import {
  POST_STRING_REQUEST,
  POST_STRING_SUCCESS,
  POST_STRING_FAILURE,
} from '../constants';

describe('FormPage actions', () => {
  describe('fetchStringRequest', () => {
    const string = { id: 1, string: 'text' };
    it('should return the correct type and the passed string object', () => {
      const expected = {
        type: POST_STRING_REQUEST,
        string,
      };
      expect(postStringRequest(string)).toEqual(expected);
    });
  });

  describe('postStringSuccess', () => {
    it('should return the correct type', () => {
      const expected = {
        type: POST_STRING_SUCCESS,
      };
      expect(postStringSuccess()).toEqual(expected);
    });
  });

  describe('postStringFailure', () => {
    it('should return the correct type', () => {
      const expected = {
        type: POST_STRING_FAILURE,
      };
      expect(postStringFailure()).toEqual(expected);
    });
  });
});
