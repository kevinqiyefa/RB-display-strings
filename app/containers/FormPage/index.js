/**
 *
 * FormPage
 *
 */

import React, { useState } from 'react';
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

  const [inputString, setinputString] = useState('');

  const inputChangeHandler = e => {
    setinputString(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setinputString('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        String:
        <input type="text" value={inputString} onChange={inputChangeHandler} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
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
