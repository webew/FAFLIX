import React, { Component } from "react";
import ReactPlayer from "react-player";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

import "../css/VideoPlayer.css";

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="videoPlayer">
                <ReactPlayer
                    // url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    // url="https://www.youtube.com/watch?v="
                    url={this.props.videoUrl}
                    controls
                    playing={false}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: "0", left: "0" }}
                    light={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}//${this.props.movie.backdrop_path}`}
                    // light="http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg"
                    onEnded={this.props.handleEnded}
                />
            </div>
        );
    }
}

export { VideoPlayer };
