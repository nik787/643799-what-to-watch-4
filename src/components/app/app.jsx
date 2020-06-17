import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoFilm} = props;
  return (
    <Main promoSettings={promoFilm} />
  );
};


export default App;
