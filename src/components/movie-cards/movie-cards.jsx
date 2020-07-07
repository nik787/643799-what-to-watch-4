import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

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
            onCardHover={() => {
              this.setState({
                currentMovie: film
              });
            }} />
        ))}
      </div>
    );
  }
}

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onOpenButtonClick: PropTypes.func.isRequired
};

export default MovieCards;
