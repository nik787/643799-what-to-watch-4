import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const player = {
  WIDTH: 280,
  HEIGHT: 175
};

const ERROR_MESSAGE = `Soory, your browser doesn't support video.`;

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._playTimeout = null;
    this.isPlaying = props.isPlaying;
  }

  componentDidMount() {
    const {source, poster, isMuted} = this.props;
    const video = this._videoRef.current;

    video.src = source;
    video.poster = poster;
    video.muted = isMuted ? true : false;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
    video.onplay = null;

    clearTimeout(this._playTimeout);
  }

  render() {
    return (
      <video
        width={player.WIDTH}
        height={player.HEIGHT}
        ref={this._videoRef}
        onMouseOver={(evt) => evt.target.play()}
        onMouseOut={(evt) => evt.target.pause()}
      >
        {ERROR_MESSAGE}
      </video>
    );
  }
  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this._playTimeout);
    }
  }

}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

