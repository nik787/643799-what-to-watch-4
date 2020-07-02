import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movieCard.jsx";

it(`Should MovieCard render correctly`, () => {
  // const film = jest.fn().mockReturnValue(`Fantastic Beasts`);
  const tree = renderer
    .create(<MovieCard
      title={`Fantastic Beasts`}
      openFilm={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

