import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MuteAndUnMuteBtn.scss';

const MuteAndUnMuteBtn = ({ currentPlayer }) => {
  const [mute, setMute] = useState(false);

  const mutePlayer = () => {
    currentPlayer.muted = true;
    setMute(true);
  };
  const unmutePlayer = () => {
    currentPlayer.muted = false;
    setMute(false);
  };

  if (!mute)
    return (
      <img
        onClick={mutePlayer}
        src='/images/audio/unmute.svg'
        className='icon'
        alt='mute'
      />
    );
  return (
    <img
      onClick={unmutePlayer}
      src='/images/audio/mute.svg'
      className='icon'
      alt='unmute'
    />
  );
};

MuteAndUnMuteBtn.propTypes = {
  currentPlayer: PropTypes.object.isRequired,
};

export default MuteAndUnMuteBtn;
