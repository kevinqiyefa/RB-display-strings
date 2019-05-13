import { takeEvery, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { POST_STRING_REQUEST } from './constants';
import { postStringFailure } from './actions';

export function* postStrings(action) {
  const requestURL = `http://localhost:3000/api/strings`;

  const formData = { string: action.string };
  try {
    // Call the server and post strings
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  } catch (err) {
    // Will handle this if needed
    yield put(postStringFailure(err));
  }
}

// Individual exports for testing
export default function* formPageSaga() {
  yield takeEvery(POST_STRING_REQUEST, postStrings);
}
