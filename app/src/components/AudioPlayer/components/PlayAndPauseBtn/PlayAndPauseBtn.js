import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoadingBtn from '../LoadingBtn';
import { sleep } from '../../../../helpers/sleep';
import './PlayAndPauseBtn.scss';

const PlayAndPauseBtn = ({ currentPlayer, totalPlayerCurrentTime }) => {
  const [play, setPlay] = useState(false);
  const [firstTimePlay, setFirstTimePlay] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentPlayer?.ended) return;

    pausePlayer();
  }, [totalPlayerCurrentTime, currentPlayer]);

  const playWorkFlow = async () => {
    if (firstTimePlay) {
      setLoading(true);
      await sleep(2000).then(() => setLoading(false));
      await currentPlayer.play();
      setPlay(true);
    } else {
      setLoading(true);
      await currentPlayer.play();
      setLoading(false);
      setPlay(true);
    }
  };

  const playPlayer = () => {
    playWorkFlow();
    setFirstTimePlay(false);
  };

  const pausePlayer = useCallback(() => {
    currentPlayer.pause();
    setPlay(false);
  }, [currentPlayer]);

  const playBtn = (
    <img
      onClick={playPlayer}
      className='playAndPause'
      src='/images/audio/play.svg'
      alt='دکمه شروع پخش'
    />
  );

  const pauseBtn = (
    <img
      onClick={pausePlayer}
      className='playAndPause'
      src='/images/audio/pause.svg'
      alt='دکمه توقف پخش'
    />
  );

  const renderPlayAndPauseBtn = () => {
    return (
      <>
        {loading && <LoadingBtn />}
        {play && !loading && pauseBtn}
        {!play && !loading && playBtn}
      </>
    );
  };

  return renderPlayAndPauseBtn();
};

PlayAndPauseBtn.propTypes = {
  currentPlayer: PropTypes.object.isRequired,
  totalPlayerCurrentTime: PropTypes.number.isRequired,
};

export default PlayAndPauseBtn;
