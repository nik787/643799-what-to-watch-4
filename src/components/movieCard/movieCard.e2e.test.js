import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movieCard";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const openButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <MovieCard
        openFilm={openButtonClick} />
  );

  const welcomeButton = welcomeScreen.find(`.small-movie-card__link`);

  welcomeButton.props().onClick();

  expect(openButtonClick.mock.calls.length).toBe(1);
});
