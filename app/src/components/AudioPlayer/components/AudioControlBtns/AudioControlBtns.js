import React from 'react';
import { Grid } from 'antd';
import PropTypes from 'prop-types';
import PlayAndPauseBtn from '../PlayAndPauseBtn';
import BackwardForwardBtns from '../BackwardForwardBtns';
import MuteAndUnMuteBtn from '../MuteAndUnMuteBtn';
import './AudioControlBtns.scss';

const { useBreakpoint } = Grid;

const AudioControlBtns = ({ currentPlayer, totalPlayerCurrentTime }) => {
  const screens = useBreakpoint();

  return (
    <div
      className={
        screens.md
          ? 'audioControlSectionRoot'
          : 'audioControlSectionRootSmallScreen'
      }
      style={{
        marginBottom: !screens.md && 8,
        padding: !screens.md && '0 10px 0 24px',
      }}
    >
      <MuteAndUnMuteBtn currentPlayer={currentPlayer} />
      <BackwardForwardBtns btnType='forward' currentPlayer={currentPlayer} />
      <PlayAndPauseBtn
        currentPlayer={currentPlayer}
        totalPlayerCurrentTime={totalPlayerCurrentTime}
      />
      <BackwardForwardBtns currentPlayer={currentPlayer} />
    </div>
  );
};

AudioControlBtns.propTypes = {
  currentPlayer: PropTypes.object.isRequired,
  totalPlayerCurrentTime: PropTypes.number.isRequired,
};

export default AudioControlBtns;
