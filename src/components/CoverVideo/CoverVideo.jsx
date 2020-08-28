import React from "react";
import videojs from "video.js";
import "./CoverVideo.scss";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, this.props.onPlayerReady);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div
        style={this.props.style}
        className="overflow-hidden h-screen w-screen"
      >
        <div data-vjs-player className="video-wrapper">
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js video-player vjs-fluid vjs-16-9 p-0"
          ></video>
        </div>
      </div>
    );
  }
}
