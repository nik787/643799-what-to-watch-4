import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movieCard";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const handlerFilmTitleClick = jest.fn();
  const film = ``;

  const welcomeScreen = shallow(
      <MovieCard
        title={film}
        openFilm={handlerFilmTitleClick} />
  );

  const welcomeButton = welcomeScreen.find(`.small-movie-card__link`);

  welcomeButton.props().onClick();

  expect(handlerFilmTitleClick.mock.calls.length).toBe(1);
});
