import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoSettings={{TITLE: `The Grand Budapest Hotel`, GENRE: `Drama`, YEAR: 2014}}
      films={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      openButtonClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
