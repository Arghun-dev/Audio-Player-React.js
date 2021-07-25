import React from 'react';
import { Grid } from 'antd';
import PropTypes from 'prop-types';
import AudioControlBtns from '../AudioControlBtns';
import AudioDisplay from '../AudioDisplay';
import './AudioLayout.scss';

const { useBreakpoint } = Grid;

const AudioLayout = ({
  player,
  totalTime,
  currentTimeMinutes,
  currentTimeSeconds,
  playerDuration,
  totalPlayerCurrentTime,
}) => {
  const screens = useBreakpoint();
  const currentPlayer = player.current;

  return (
    <div
      className='audioLayoutRoot'
      style={{ marginLeft: !screens.md && -16 }}
    > 
      <AudioControlBtns
        currentPlayer={currentPlayer}
        totalPlayerCurrentTime={totalPlayerCurrentTime}
      />
      <AudioDisplay
        currentPlayer={currentPlayer}
        playerDuration={playerDuration}
        totalTime={totalTime}
        currentTimeMinutes={currentTimeMinutes}
        currentTimeSeconds={currentTimeSeconds}
        totalPlayerCurrentTime={totalPlayerCurrentTime}
      />
    </div>
  );
};

AudioLayout.propTypes = {
  player: PropTypes.node.isRequired,
  totalTime: PropTypes.string.isRequired,
  playerDuration: PropTypes.number.isRequired,
  currentTimeMinutes: PropTypes.number.isRequired,
  currentTimeSeconds: PropTypes.number.isRequired,
  totalPlayerCurrentTime: PropTypes.number.isRequired,
};

export default AudioLayout;
