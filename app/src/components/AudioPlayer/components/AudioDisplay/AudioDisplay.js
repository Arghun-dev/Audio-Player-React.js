import React from 'react';
import PropTypes from 'prop-types';
import AudioProgressBar from '../AudioProgressBar';
import './AudioDisplay.scss';

const AudioDisplay = ({
  currentPlayer,
  totalTime,
  playerDuration,
  currentTimeMinutes,
  currentTimeSeconds,
  totalPlayerCurrentTime,
}) => {
  const currentTimeContent = () => {
    if (!currentTimeSeconds) return <div className='time'>0:00</div>;
    return (
      <div className='time'>
        {currentTimeMinutes}:{currentTimeSeconds}
      </div>
    );
  };

  const totalTimeContent = () => {
    return (
      <div className='time' style={{ textAlign: 'end' }}>
        {totalTime}
      </div>
    );
  };

  return (
    <div className='audioDisplayRoot'>
      {totalTimeContent()}
      <AudioProgressBar
        currentPlayer={currentPlayer}
        playerDuration={playerDuration}
        totalPlayerCurrentTime={totalPlayerCurrentTime}
      />
      {currentTimeContent()}
    </div>
  );
};

AudioDisplay.propTypes = {
  currentPlayer: PropTypes.object.isRequired,
  totalTime: PropTypes.string.isRequired,
  playerDuration: PropTypes.number.isRequired,
  currentTimeMinutes: PropTypes.number.isRequired,
  currentTimeSeconds: PropTypes.number.isRequired,
  totalPlayerCurrentTime: PropTypes.number.isRequired,
};

export default AudioDisplay;
