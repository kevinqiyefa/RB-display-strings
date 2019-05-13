/*
 *
 * HomePage actions
 *
 */
import {
  POST_STRING_REQUEST,
  POST_STRING_SUCCESS,
  POST_STRING_FAILURE,
} from './constants';

export function postStringRequest(string) {
  return {
    type: POST_STRING_REQUEST,
    string,
  };
}

export function postStringSuccess() {
  return {
    type: POST_STRING_SUCCESS,
  };
}

export function postStringFailure(err) {
  return {
    type: POST_STRING_FAILURE,
    err,
  };
}
