import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {propTypesMovie} from "../../data-types/film.js";


class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {movie, onTitleClick, onCardHover} = this.props;
    const handleMovieClick = (evt) => {
      evt.preventDefault();
      onTitleClick(movie);
    };

    return (
      <article className="small-movie-card catalog__movies-card" onMouseOver={() => onCardHover(this.props.movie)}
      >
        <div className="small-movie-card__image" onClick={handleMovieClick}>
          <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={handleMovieClick}>{movie.name}</a>
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

export default MovieCard;
