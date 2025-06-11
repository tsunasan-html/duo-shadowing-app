import React from 'react';
import './Background.css';

const Background = ({ bgImage, children }) => {
  return (
    <div
      className="center-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default Background;
