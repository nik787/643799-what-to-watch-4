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

    const movieCard = mainComponent.find(`.small-movie-card`).at(0);
    movieCard.simulate(`mouseover`);

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover.mock.calls[0][0]).toMatchObject(movie);
  });
});
