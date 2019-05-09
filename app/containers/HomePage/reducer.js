/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  FETCH_STRING_REQUEST,
  FETCH_STRING_SUCCESS,
  FETCH_STRING_FAILURE,
} from './constants';

export const initialState = [];

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_STRING_REQUEST:
        break;
      case FETCH_STRING_SUCCESS:
        draft = action.strings;
        break;
      case FETCH_STRING_FAILURE:
        break;
      default:
        return state;
    }
    return draft;
  });

export default homePageReducer;
