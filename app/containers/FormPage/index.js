/**
 *
 * FormPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import { postStringRequest } from './actions';

export function FormPage(props) {
  useInjectSaga({ key: 'formPage', saga });

  const [inputString, setInputString] = useState('');

  const inputChangeHandler = e => {
    setInputString(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postStringRequest(inputString);
    setInputString('');
    props.history.push('/');
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

FormPage.propTypes = {
  postStringRequest: PropTypes.func.isRequired,
  history: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    postStringRequest: str => dispatch(postStringRequest(str)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FormPage);
