/**
 *
 * Loader
 *
 */

import styled from 'styled-components';

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #419bee;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.3s linear infinite;
  margin: 5em auto;
`;

export default Loader;
