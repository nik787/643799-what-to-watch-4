
import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const videoData = {
  poster: `https://api.adorable.io/avatars/128/1`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

describe(`VideoPlayer e2e tests`, () => {
  it(`Start and Pause work correctly`, () => {
    const isPlaying = false;
    const isMuted = false;
    const videoPlayer = mount(
        <VideoPlayer
          isPlaying={isPlaying}
          source={videoData.preview}
          poster={videoData.poster}
          isMuted={isMuted}
        />);

    expect(videoPlayer.props().isPlaying).toEqual(false);

    videoPlayer.setProps({isPlaying: true});
    expect(videoPlayer.props().isPlaying).toEqual(true);
  });
});
