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
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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

    const movieCard = mainComponent.find(`.small-movie-card`);
    movieCard.simulate(`mouseenter`, movie);

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover).toHaveBeenCalledWith(movie);
  });

  it(`MovieCard be clicked`, () => {
    const onTitleClick = jest.fn();
    const preventDefault = jest.fn();

    const mainComponent = shallow(
        <MovieCard
          movie={movie}
          onTitleClick={onTitleClick}
          onCardHover={() => {}} />
    );

    const movieCard = mainComponent.find(`.small-movie-card`).at(0);
    const movieTitle = movieCard.find(`.small-movie-card__link`);
    movieTitle.simulate(`click`, {
      preventDefault,
    });

    const movieImage = movieCard.find(`.small-movie-card__image`);
    movieImage.simulate(`click`, {
      preventDefault,
    });

    expect(onTitleClick).toHaveBeenCalledTimes(2);
    expect(preventDefault).toHaveBeenCalledTimes(2);
  });
});
