import React from "react";
import MovieCard from "../movieCard/movieCard.jsx";
import PropTypes from "prop-types";

const MovieCards = (props) => {
  const {movies, openButtonClick} = props;

  return (
    <React.Fragment>
      {movies.map((film, index) => (
        <MovieCard title={film} key={film + index} openFilm={openButtonClick} />
      ))}
    </React.Fragment>
  );
};

MovieCards.propTypes = {
  movies: PropTypes.array.isRequired,
  openButtonClick: PropTypes.func.isRequired
};


export default MovieCards;
