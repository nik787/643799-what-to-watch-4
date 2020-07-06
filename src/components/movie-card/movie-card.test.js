import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      title={`Fantastic Beasts`}
      openFilm={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

