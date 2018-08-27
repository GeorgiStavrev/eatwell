import React, { Component } from "react";

class EmbededVideo extends Component {
  render() {
    return (
      <iframe
        title={this.props.videoUrl}
        width="560"
        height="315"
        src={this.props.videoUrl}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    );
  }
}

export default EmbededVideo;
