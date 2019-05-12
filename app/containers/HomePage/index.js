/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStrings from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchStringRequest } from './actions';
import DisplayStrings from '../../components/DisplayStrings';
import Loader from '../../components/Loader';

export function HomePage(props) {
  useInjectReducer({ key: 'strings', reducer });
  useInjectSaga({ key: 'strings', saga });

  useEffect(() => {
    props.fetchStringRequest();
  }, []);

  if (props.strings.length < 1) {
    return <Loader />;
  }
  return <DisplayStrings strings={props.strings} />;
}

HomePage.propTypes = {
  strings: PropTypes.array,
  fetchStringRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
});

const withConnect = connect(
  mapStateToProps,
  { fetchStringRequest },
);

export default compose(withConnect)(HomePage);
