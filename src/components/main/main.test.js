import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoSettings={{TITLE: `The Grand Budapest Hotel`, GENRE: `Drama`, YEAR: 2014}}
      films={movies}
      openButtonClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
