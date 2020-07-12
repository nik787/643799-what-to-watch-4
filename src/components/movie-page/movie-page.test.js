import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const movie = {
  id: 3,
  name: `Фиксики`,
  posterImage: `https://api.adorable.io/avatars/128/1`,
  previewImage: `https://api.adorable.io/avatars/128/1`,
  backgroundImage: `https://api.adorable.io/avatars/128/1`,
  backgroundColor: `#ffffff`,
  videoLink: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};

describe(`MoviePage`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<MoviePage
        movieCard={movie} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
