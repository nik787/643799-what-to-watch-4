import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promoFilm={{
        TITLE: `The Grand Budapest Hotel`,
        GENRE: `Drama`,
        YEAR: 2014
      }}
      films={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
