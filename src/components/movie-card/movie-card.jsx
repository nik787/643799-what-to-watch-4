import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {propTypesMovie} from "../../data-types/film.js";
import VideoPlayer from "../video-player/video-player.jsx";


export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleMovieClick = this._handleMovieClick.bind(this);
  }

  _handleMovieClick(evt) {
    const onTitleClick = this.props.onTitleClick;

    evt.preventDefault();
    onTitleClick(this.props.movie);
  }

  render() {
    const {movie, onCardHover} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this.setState({
            isPlaying: true,
          });
          onCardHover(movie);
        }}
        onMouseOut={() => {
          this.setState({
            isPlaying: false,
          });
        }}
      >
        <div className="small-movie-card__image" onClick={this._handleMovieClick}>
          {movie.previewVideoLink
            ? <VideoPlayer isPlaying={this.state.isPlaying} source={movie.previewVideoLink} poster={movie.previewImage} isMuted={true}/>
            : <img src={movie.previewImage} alt={movie.name} width="280" height="175" />}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={this._handleMovieClick}>{movie.name}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypesMovie,
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

