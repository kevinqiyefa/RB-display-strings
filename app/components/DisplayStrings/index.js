/**
 *
 * DisplayStrings
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DisplayStrings(props) {
  const strings = props.strings.map(str => <li key={str.id}>{str.string}</li>);
  return <ul>{strings}</ul>;
}

DisplayStrings.propTypes = {
  strings: PropTypes.array,
};

export default memo(DisplayStrings);
