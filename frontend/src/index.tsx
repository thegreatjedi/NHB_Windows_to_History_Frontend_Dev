import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import Header from './Header';
import Footer from './Footer';
import UploadForm from './UploadForm';

import favicon from './images/Roots_Favicon.png';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={favicon} />
    <Header />
    <UploadForm />
    <Footer />
  </React.StrictMode>,
  document.getElementById('react-root'),
);
