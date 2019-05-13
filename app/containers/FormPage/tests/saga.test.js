/**
 * Tests for FormPage sagas
 */

import { put, takeEvery } from 'redux-saga/effects';
import { POST_STRING_REQUEST } from '../constants';
import { postStringFailure } from '../actions';
import formPageSaga, { postStrings } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('postStrings Saga', () => {
  const data = { string: 'test1' };
  const postStringsGenerator = postStrings(data);
  it('should post the string data', () => {
    const callDescriptor = postStringsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should call the postStringFailure action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = postStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(postStringFailure(response)));
  });
});

describe('formPageSaga Saga', () => {
  const formPage = formPageSaga();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeEveryDescriptor = formPage.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(POST_STRING_REQUEST, postStrings),
    );
  });
});
