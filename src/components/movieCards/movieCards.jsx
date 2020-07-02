import React from "react";
import MovieCard from "../movieCard/movieCard.jsx";
import PropTypes from "prop-types";

const MovieCards = (props) => {
  const {movies, onOpenButtonClick} = props;

  return (
    <React.Fragment>
      {movies.map((film, index) => (
        <MovieCard title={film} key={film + index} openFilm={onOpenButtonClick} />
      ))}
    </React.Fragment>
  );
};

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onOpenButtonClick: PropTypes.func.isRequired
};


export default MovieCards;
