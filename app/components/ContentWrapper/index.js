/**
 *
 * ContentWrapper
 *
 */

import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: 700px;
  width: 500px;
  margin 3em auto;
  text-align: ${props => (props.formpage ? 'center' : 'left')};

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default ContentWrapper;
