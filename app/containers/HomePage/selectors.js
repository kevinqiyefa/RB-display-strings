import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.strings || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectStrings = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.strings.reverse(),
  );

export default makeSelectStrings;
export { selectHomePageDomain };
