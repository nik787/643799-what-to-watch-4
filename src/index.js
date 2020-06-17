import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const promoFilmSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

ReactDOM.render(
    <App promoFilm={promoFilmSettings} />,
    document.querySelector(`#root`)
);
