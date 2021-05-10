import { faBars, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import headerLogo from './images/logo-roots-black.svg';
import './styles/Header.css';

const Header = () => (
  <header id="outer-header" className="container">
    <header id="inner-header">
      <FontAwesomeIcon icon={faBars} className="header-icons" fixedWidth />
      <img id="header-logo" src={headerLogo} alt="ROOTS" />
      <FontAwesomeIcon icon={faSync} className="header-icons" fixedWidth />
    </header>
  </header>
);

export default Header;
