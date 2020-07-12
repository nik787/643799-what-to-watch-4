import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const promoMovie = {
  id: 2,
  name: `Терминатор`,
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

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
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
  },
  {
    id: 2,
    name: `Терминатор`,
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
  }
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoSettings={promoMovie}
      films={movies}
      openButtonClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
