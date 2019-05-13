/*
 *
 * HomePage actions
 *
 */
import {
  FETCH_STRING_REQUEST,
  FETCH_STRING_SUCCESS,
  FETCH_STRING_FAILURE,
} from './constants';

export function fetchStringRequest() {
  return {
    type: FETCH_STRING_REQUEST,
  };
}

export function fetchStringSuccess(strings) {
  return {
    type: FETCH_STRING_SUCCESS,
    strings,
  };
}

export function fetchStringFailure(err) {
  return {
    type: FETCH_STRING_FAILURE,
    err,
  };
}
