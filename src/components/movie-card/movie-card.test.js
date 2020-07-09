import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const movie = {
  title: `Fantastic Beasts`,
  src: `movie-image`,
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={movie}
      onTitleClick={() => {}}
      onCardHover={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

