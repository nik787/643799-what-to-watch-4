import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

const movie = {
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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieCard e2e tests`, () => {
  it(`MovieCard be hovered`, () => {
    const onCardHover = jest.fn((args) => args);

    const mainComponent = shallow(
        <MovieCard
          movie={movie}
          onTitleClick={() => {}}
          onCardHover={onCardHover} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`).at(0);
    movieCard.simulate(`mouseover`);

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`MovieCard be clicked`, () => {
    const onTitleClick = jest.fn();

    const mainComponent = shallow(
        <MovieCard
          movie={movie}
          onTitleClick={onTitleClick}
          onCardHover={() => {}} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`).at(0);
    const movieTitle = movieCard.find(`.small-movie-card__link`);
    movieTitle.simulate(`click`, {
      preventDefault: onTitleClick,
    });

    const movieImage = movieCard.find(`.small-movie-card__image`);
    movieImage.simulate(`click`, {
      preventDefault: onTitleClick,
    });

    expect(onTitleClick).toHaveBeenCalledTimes(4);
  });
});
