import React from "react";
import renderer from "react-test-renderer";
import MovieCards from "./movieCards.jsx";

it(`Should MovieCards render correctly`, () => {
  const tree = renderer
    .create(<MovieCards
      movies={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      openButtonClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

