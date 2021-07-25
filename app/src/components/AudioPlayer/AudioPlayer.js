import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AudioLayout from './components/AudioLayout';
import './AudioPlayer.scss';

const AudioPlayer = ({ url }) => {
  const player = useRef(null);
  const [currentTimeMinutes, setCurrentTimeMinutes] = useState(null);
  const [currentTimeSeconds, setCurrentTimeSeconds] = useState(null);
  const [totalPlayerCurrentTime, setTotalPlayerCurrentTime] = useState(0);
  const [playerDuration, setPlayerDuration] = useState(null);
  const [totalTime, setTotalTime] = useState(null);

  useEffect(() => {
    if (!player?.current?.duration) return;

    setPlayerDuration(player?.current?.duration);
  }, [player?.current?.duration]);

  useEffect(() => {
    if (!playerDuration) return;
    setTotalTime(
      `${Math.floor(playerDuration / 60)}:${Math.floor(
        playerDuration - Math.floor(playerDuration / 60) * 60
      )}`
    );
  }, [playerDuration, url]);

  const trackTime = () => {
    if (!player) return;
    const playerCurrentTime = player?.current?.currentTime;
    setTotalPlayerCurrentTime(playerCurrentTime);
    setCurrentTimeMinutes(Math.floor(playerCurrentTime / 60));
    const seconds = Math.floor(playerCurrentTime % 60);

    if (seconds < 10) {
      setCurrentTimeSeconds(`0${seconds}`);
    } else {
      setCurrentTimeSeconds(seconds);
    }
  };

  if (!url) return null;

  return (
    <div className='audioPlayerRoot'>
      <audio ref={player} onTimeUpdate={trackTime} preload='auto'>
        <source src={url} />
      </audio>
      <AudioLayout
        player={player}
        totalTime={totalTime}
        playerDuration={playerDuration}
        totalPlayerCurrentTime={totalPlayerCurrentTime}
        currentTimeSeconds={currentTimeSeconds}
        currentTimeMinutes={currentTimeMinutes}
      />
    </div>
  );
};

AudioPlayer.propTypes = {
  post: PropTypes.object.isRequired,
};

export default AudioPlayer;
