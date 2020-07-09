import React from "react";
import renderer from "react-test-renderer";
import MovieCards from "./movie-cards.jsx";

const movies = [
  {
    src: `image-1`,
    title: `title-1`
  },
  {
    src: `image-2`,
    title: `title-2`
  },
  {
    src: `image-3`,
    title: `title-3`
  },
  {
    src: `image-4`,
    title: `title-4`
  }
];

it(`Should MovieCards render correctly`, () => {
  const tree = renderer
    .create(<MovieCards
      movies={movies}
      onOpenButtonClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

