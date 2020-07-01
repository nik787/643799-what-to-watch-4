import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const openButtonHandler = () => {};

const App = (props) => {
  const {promoFilm, films} = props;
  return (
    <Main promoSettings={promoFilm} films={films} openButtonClick={openButtonHandler} />
  );
};

App.propTypes = {
  promoFilm: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
