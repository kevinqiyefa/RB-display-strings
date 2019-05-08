/**
 *
 * FormPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFormPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function FormPage() {
  useInjectReducer({ key: 'formPage', reducer });
  useInjectSaga({ key: 'formPage', saga });

  return <div>formpage</div>;
}

// FormPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  formPage: makeSelectFormPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FormPage);
