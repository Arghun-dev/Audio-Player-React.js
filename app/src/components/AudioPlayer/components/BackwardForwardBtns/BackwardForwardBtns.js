import React from 'react';
import PropTypes from 'prop-types';
import './BackwardForwardBtns.scss';

const BackwardForwardBtns = ({ btnType, currentPlayer }) => {
  const goBackWard = () =>
    (currentPlayer.currentTime = currentPlayer.currentTime - 15);

  const goForWard = () =>
    (currentPlayer.currentTime = currentPlayer.currentTime + 15);

  if (btnType !== 'forward')
    return (
      <img
        src='/images/audio/backward.svg'
        alt='دکمه رفتن به عقب'
        className='icon'
        onClick={goBackWard}
      />
    );

  return (
    <img
      src='/images/audio/forward.svg'
      alt='دکمه رفتن به جلو'
      className='icon'
      onClick={goForWard}
    />
  );
};

BackwardForwardBtns.propTypes = {
  btnType: PropTypes.string.isRequired,
  currentPlayer: PropTypes.object.isRequired,
};

export default BackwardForwardBtns;
