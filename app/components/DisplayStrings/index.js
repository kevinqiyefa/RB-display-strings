/**
 *
 * DisplayStrings
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UL from '../UL';
import ContentWrapper from '../ContentWrapper';

const ContentHeader = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const LI = styled.li`
  border: 1px solid #ddd;
  background-color: #f6f6f6;
  padding: 12px;
  border-collapse: collapse;
  margin-top: -1px;
`;

function DisplayStrings(props) {
  const strings = props.strings.map(str => <LI key={str.id}>{str.string}</LI>);

  return (
    <ContentWrapper>
      <ContentHeader>Strings From Database:</ContentHeader>
      <UL>{strings}</UL>
    </ContentWrapper>
  );
}

DisplayStrings.propTypes = {
  strings: PropTypes.array,
};

export default memo(DisplayStrings);
