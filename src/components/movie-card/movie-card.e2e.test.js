import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

const movie = {
  title: `Fantastic Beasts`,
  src: `movie-image`,
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

    const movieCards = mainComponent.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`mouseover`, movie);
    });

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover.mock.calls[0][0]).toMatchObject(movie);
  });
});
