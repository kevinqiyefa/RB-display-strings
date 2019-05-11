/**
 *
 * Header
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UL from '../UL';
import LI from '../Li';

const HeaderWrapper = styled.div`
  padding: 1.5em 4em;
  background: #0bbefc;
`;

const StyledLink = styled(NavLink)`
  color: gray;
  text-decoration: none;
  text-align: center;
  padding: 14px 16px;

  &.active,
  &:hover {
    color: white;
    font-weight: bolder;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <UL>
        <LI>
          <StyledLink exact activeClassName="active" to="/">
            Home
          </StyledLink>
        </LI>
        <LI>
          <StyledLink activeClassName="active" to="/addstrings">
            Add String
          </StyledLink>
        </LI>
      </UL>
    </HeaderWrapper>
  );
}

export default Header;
