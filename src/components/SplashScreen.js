import React from 'react';
import './SplashScreen.css';
import logo from '../images/animation-logo.jpg';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Institute Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;