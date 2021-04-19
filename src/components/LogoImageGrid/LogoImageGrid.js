import React from 'react';
import LogoImage from '../LogoImage/LogoImage';
import './LogoImageGrid.css';

const LogoImageGrid = ({ logos }) => { 
  return (
    <div className="LogoImageGrid">
      {logos.map(logo => <LogoImage key={logo} source={logo} />)}
    </div>
  );
}

LogoImageGrid.defaultProps = {};

export default LogoImageGrid;
