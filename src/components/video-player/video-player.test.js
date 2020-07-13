import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const videoData = {
  poster: `https://api.adorable.io/avatars/128/1`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

describe(`VideoPlayer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<VideoPlayer
        isPlaying={false}
        source={videoData.preview}
        poster={videoData.poster}
        isMuted={false}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
