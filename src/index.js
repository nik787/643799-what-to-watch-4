import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {promoFilm, films} from "./mocks/films.js";


ReactDOM.render(
    <App promoFilm={promoFilm} films={films} />,
    document.querySelector(`#root`)
);
