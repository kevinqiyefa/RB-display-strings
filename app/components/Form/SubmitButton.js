/**
 *
 * SubmitButton
 *
 */

import styled from 'styled-components';

const SubmitButton = styled.input`
  background-color: #1984c3;
  color: #fff;
  font-family: Courier, sans-serif;
  font-size: 1.2em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.5em;
  border-bottom: 0.25em solid #0f5177;
  transition: 0.1s;
  box-shadow: 1px 3px 5px #ccc;
  cursor: pointer;
  margin: 0 0 0 1em;
  padding: 0.25em 0.5em;

  &:hover {
    background-color: #1e9feb;
    border-bottom-width: 0;
    margin-top: 0.1em;
  }
`;

export default SubmitButton;
