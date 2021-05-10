import * as React from 'react';

import footerLogo from './images/NHB_Master_Logo_White_RGB.png';
import './styles/Footer.css';

const Footer = () => (
  <footer>
    <div id="footer-link-group">
      <a href="/">Browse</a>
      <a href="/">Upload</a>
    </div>
    <img id="footer-logo" src={footerLogo} alt="NHB" />
  </footer>
);

export default Footer;
