import React from 'react';
import PropTypes from 'prop-types';

const ERROR_MESSAGE = `Soory, your browser doesn't support video.`;

const VideoPlayer = ({isPlaying, source, poster}) => {
  return (
    <video width="280" height="175" poster={poster} autoPlay={isPlaying ? `true` : ``}>
      <source src={source}
        type="video/webm" />
      <source src={source}
        type="video/mp4" />
      {ERROR_MESSAGE}
    </video>
  );
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
