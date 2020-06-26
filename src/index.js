import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const promoFilmSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const FILMS = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App promoFilm={promoFilmSettings} films={FILMS} />,
    document.querySelector(`#root`)
);
