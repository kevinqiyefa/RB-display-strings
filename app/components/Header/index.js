/**
 *
 * Header
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UL from '../UL';

const HeaderWrapper = styled.div`
  padding: 1em 4em;
  background: #0bbefc;
`;

const HeaderConent = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
`;

const StyledLink = styled(NavLink)`
  color: gray;
  text-decoration: none;
  text-align: center;
  margin: 14px 16px;
  display: inline-block;

  &.active,
  &:hover {
    color: white;
    font-weight: bolder;
  }

  &:hover {
    border-bottom: 5px solid white;
    margin-bottom: -5px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderConent>
        <UL header>
          <li>
            <StyledLink exact activeClassName="active" to="/">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink activeClassName="active" to="/addstrings">
              Add String
            </StyledLink>
          </li>
        </UL>
      </HeaderConent>
    </HeaderWrapper>
  );
}

export default Header;
