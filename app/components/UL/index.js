/**
 *
 * Ul
 *
 */

import styled from 'styled-components';

const UL = styled.ul`
  list-style-type: none;
  margin: ${props => (props.header ? 0 : '3em')};
  padding: 0;
  overflow: hidden;
  font-size: 1.3em;
  display: flex;
  border-top: ${props => (props.header ? 'none' : '1px solid #ddd')};
  justify-content: ${props => (props.header ? 'left' : 'center')};
  flex-direction: ${props => (props.header ? 'row' : 'column')};
`;

// max-width: ${props => (props.header ? 'calc(768px + 16px * 2)' : '100%')};
export default UL;
