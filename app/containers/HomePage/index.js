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

export function HomePage(props) {
  useInjectReducer({ key: 'strings', reducer });
  useInjectSaga({ key: 'strings', saga });

  console.log('stringss:', props.strings);

  useEffect(() => {
    props.fetchStringRequest();
  }, []);
  return <div>this is Homepage</div>;
}

HomePage.propTypes = {
  strings: PropTypes.array,
  fetchStringRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStringRequest: () => dispatch(fetchStringRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
