import React from 'react';
import Home from './home';
import Footer from './footer';
import './crd-app.scss';

const AppComponent = () => (
  <div className='crd-app-container'>
    <div className='crd-app-content'>
      <Home />
      <Footer />
    </div>
  </div>
);

export default AppComponent;
