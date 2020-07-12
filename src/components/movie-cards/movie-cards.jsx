import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import {propTypesMovie} from "../../mocks/films.js";


class MovieCards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null
    };
  }

  render() {
    const {movies, onOpenButtonClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((film, index) => (
          <MovieCard
            movie={film}
            key={index + `${film.title}`}
            onTitleClick={onOpenButtonClick}
            onCardHover={(selectFilm) => {
              this.setState({
                currentMovie: selectFilm
              });
            }} />
        ))}
      </div>
    );
  }
}

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(propTypesMovie).isRequired).isRequired,
  onOpenButtonClick: PropTypes.func.isRequired
};

export default MovieCards;
