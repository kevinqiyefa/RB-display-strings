import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { POST_STRING_REQUEST } from './constants';
// import { postStringFailure } from './actions';

function* postStrings(action) {
  const requestURL = `http://localhost:3000/api/strings`;

  try {
    // Call the server and post strings
    yield axios.post(requestURL, { string: action.string });
  } catch (err) {
    // Will handle this if needed
    // yield put(postStringFailure());
  }
}

// Individual exports for testing
export default function* formPageSaga() {
  yield takeEvery(POST_STRING_REQUEST, postStrings);
}
