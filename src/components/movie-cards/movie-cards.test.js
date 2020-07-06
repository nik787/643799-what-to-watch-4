import React from "react";
import renderer from "react-test-renderer";
import MovieCards from "./movie-cards.jsx";

it(`Should MovieCards render correctly`, () => {
  const tree = renderer
    .create(<MovieCards
      movies={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      onOpenButtonClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

