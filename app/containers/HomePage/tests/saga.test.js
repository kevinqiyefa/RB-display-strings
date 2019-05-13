/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_STRING_REQUEST } from '../constants';
import { fetchStringSuccess, fetchStringFailure } from '../actions';
import homePageSaga, { getStrings } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getStrings Saga', () => {
  let getStringsGenerator;

  beforeEach(() => {
    getStringsGenerator = getStrings();

    const callDescriptor = getStringsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchStringSuccess action if it requests the data successfully', () => {
    const response = [
      {
        id: 1,
        string: 'test1',
      },
      {
        id: 2,
        string: 'test2',
      },
    ];
    const putDescriptor = getStringsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(fetchStringSuccess(response)));
  });

  it('should call the fetchStringFailure action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(fetchStringFailure(response)));
  });
});

describe('homePageSaga Saga', () => {
  const homePage = homePageSaga();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = homePage.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(FETCH_STRING_REQUEST, getStrings),
    );
  });
});
