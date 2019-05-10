import { all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_STRING_REQUEST } from './constants';
import { fetchStringSuccess } from './actions';

function* getStrings() {
  const requestURL = `http://localhost:3000/api/strings`;

  try {
    // Call the server and fetch strings
    const strings = yield axios.get(requestURL);
    yield put(fetchStringSuccess(strings.data));
  } catch (err) {
    // Will handle this if needed
    // yield put(fetchStringFailure());
  }
}

function* loadStrings() {
  yield takeLatest(FETCH_STRING_REQUEST, getStrings);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([loadStrings()]);
}
