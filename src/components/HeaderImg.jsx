import React, { Component } from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";
import "../css/HeaderImg.css";

class HeaderImg extends Component {
    render() {
        // console.log(this.props.headerMovie);
        // console.log(Object.keys(this.props.headerMovie).length);
        let imgSrc = "";
        if (Object.keys(this.props.headerMovie).length > 0) {
            imgSrc = `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${this.props.headerMovie.backdrop_path}`;
        }
        return (
            <div
                className="headerImg"
                style={{
                    background: `url(${imgSrc}) no-repeat`,
                }}
            >
                <div className="headerImg--overlay">
                    <h3 className="headerImg--overlay__title">
                        {this.props.headerMovie.title}
                    </h3>
                    <p className="headerImg--overlay__desc">
                        {this.props.headerMovie.overview}
                    </p>
                </div>
            </div>
        );
    }
}

export { HeaderImg };
