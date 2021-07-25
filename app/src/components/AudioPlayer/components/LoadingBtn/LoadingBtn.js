import React from 'react';
import './LoadingBtn.scss';

const LoadingBtn = () => {
  return (
    <div className='loadingBtnContainer'>
      <span className='spin_loader' />
      <img
        className='icon'
        src='/images/audio/play.svg'
        alt='دکمه شروع پخش'
      />
    </div>
  );
};

export default LoadingBtn;
