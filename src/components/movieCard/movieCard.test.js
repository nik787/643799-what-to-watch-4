import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movieCard.jsx";

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      title={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      openFilm={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

