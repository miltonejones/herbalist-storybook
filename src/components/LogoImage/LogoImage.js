import React from 'react';
import './LogoImage.css';

const LogoImage = ({ source }) => {
  return (
    <div className="LogoImage">
      <img src={source} alt={source} />
      <div onClick={() => {
        window.open(source)
      }} className="caption">{source}</div>
    </div>
  );
}

LogoImage.defaultProps = {};

export default LogoImage;
