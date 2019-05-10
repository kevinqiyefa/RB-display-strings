/**
 *
 * Header
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/addstrings">
            Add String
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

Header.propTypes = {};

export default Header;
