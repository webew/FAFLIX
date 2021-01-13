import React, { Component } from "react";
import { MvPlayerListItem } from "./index";

import "../css/MvPlayerList.css";

class MvPlayerList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderList = () => {
        console.log("MvPlayerList => ", this.props.movies);
        return this.props.movies.map((movie, i) => {
            const active = movie.id === this.props.selectedMovie.id;
            console.log("MvPlayerList active => ", active);
            return (
                <MvPlayerListItem
                    movie={movie}
                    key={movie.id}
                    number={i + 1}
                    active={active}
                />
            );
        });
    };
    render() {
        const position =
            this.props.movies.indexOf(this.props.selectedMovie) + 1;
        const total = this.props.movies.length;
        return (
            <div className="mvPlayerList">
                <div className="mvPlayerList--header">
                    <h3>{this.props.selectedMovie.title}</h3>
                    <div className="mvPlayerList--badge">
                        {position}/{total}
                    </div>
                </div>
                <div className="mvPlayerList--list">{this.renderList()}</div>
            </div>
        );
    }
}

export { MvPlayerList };
