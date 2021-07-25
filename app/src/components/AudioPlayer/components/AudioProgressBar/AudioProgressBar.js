import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AudioProgressBar.scss';

const AudioProgressBar = ({
  currentPlayer,
  playerDuration,
  totalPlayerCurrentTime,
}) => {
  const [bgHoverWidth, setBgHoverWidth] = useState(0);
  const [filledWidth, setFilledWidth] = useState(0);
  const [changeTimeBasedOnScroll, setChangeTimeBasedOnScroll] = useState(false);
  const emptyProgressBarRef = useRef(null);
  const emptyProgressImgRef = useRef(null);

  useEffect(() => {
    if (changeTimeBasedOnScroll) {
      currentPlayer.currentTime = (filledWidth * playerDuration) / 100;
      setChangeTimeBasedOnScroll(false);
    }
  }, [filledWidth, playerDuration, changeTimeBasedOnScroll, currentPlayer]);

  useEffect(() => {
    if (!changeTimeBasedOnScroll) {
      setFilledWidth((totalPlayerCurrentTime / playerDuration) * 100);
    }
  }, [totalPlayerCurrentTime, playerDuration, changeTimeBasedOnScroll]);

  const calculatedDistance = (e) =>
    ((e.clientX - emptyProgressBarRef.current.getBoundingClientRect().left) /
      emptyProgressBarRef.current.clientWidth) *
    100;

  const calculateWidth = (e) => setBgHoverWidth(calculatedDistance(e));

  const calculateFilledWidth = (e) => {
    setChangeTimeBasedOnScroll(true);
    setFilledWidth(calculatedDistance(e));
  };

  return (
    <div
      className='waveform_container'
      onMouseLeave={() => setBgHoverWidth(0)}
    >
      <div
        ref={emptyProgressBarRef}
        className='waveform'
        onMouseMove={calculateWidth}
        onClick={calculateFilledWidth}
      >
        <img
          src='/images/audio/empty-progressbar-spl.svg'
          ref={emptyProgressImgRef}
          alt='progressbar'
        />
      </div>
      <div
        className='waveform__scrubber'
        style={{ width: `${bgHoverWidth}%` }}
        onMouseMove={calculateWidth}
        onClick={calculateFilledWidth}
      />
      <div
        className='waveform__progress'
        style={{ width: `${filledWidth}%` }}
        onClick={calculateFilledWidth}
      >
        <img
          src='/images/audio/filled-progressbar-spl.svg'
          style={{ width: emptyProgressImgRef?.current?.clientWidth }}
          alt='filled-scrollbar'
        />
      </div>
    </div>
  );
};

AudioProgressBar.propTypes = {
  currentPlayer: PropTypes.object.isRequired,
  playerDuration: PropTypes.number.isRequired,
  totalPlayerCurrentTime: PropTypes.number.isRequired,
};

export default AudioProgressBar;
