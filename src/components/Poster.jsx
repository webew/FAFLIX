import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addMovie, removeMovie } from "../actions/movie";
import "../css/Poster.css";

class PosterComponent extends Component {
    state = {
        hover: false,
    };
    showOverlay = () => {
        if (this.state.hover) {
            return;
        }
        this.setState({ hover: true });
    };
    hideOverlay = () => {
        this.setState({ hover: false });
    };
    remove = () => {
        console.log("remove avec redux");
        this.props.removeM(this.props.id);
    };
    add = () => {
        console.log("add avec redux", this.props.movie);
        this.props.addM(this.props.movie);
    };
    render() {
        return (
            <div
                className="poster"
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
            >
                <Link to={{ pathname: `/${this.props.id}` }}>
                    <img
                        src={this.props.imgSrc}
                        alt="poster"
                        className="poster--img"
                    />
                </Link>
                {this.state.hover ? (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">
                            LISTE DE SOUHAITS
                        </h3>
                        {this.props.wished ? (
                            <FontAwesome
                                className="poster--icon"
                                name="heart"
                                size="3x"
                                onClick={this.remove}
                            />
                        ) : (
                            <FontAwesome
                                className="poster--icon__not"
                                name="heart-o"
                                size="3x"
                                onClick={this.add}
                            />
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addM: (movie) => dispatch(addMovie(movie)),
        removeM: (movieId) => dispatch(removeMovie(movieId)),
    };
};
const Poster = connect(null, mapDispatchToProps)(PosterComponent);

export { Poster };
