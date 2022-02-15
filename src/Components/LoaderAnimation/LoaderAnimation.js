import React from 'react';
import './LoaderAnimation.css';

function LoaderAnimation() {
  return (
    <div className='loader-wrapper'>
      <div className='lds-facebook'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoaderAnimation;
