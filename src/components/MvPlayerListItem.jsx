import React, { Component } from "react";
import { Link } from "react-router-dom";
import { calcTime } from "../utils/helpers";

import "../css/MvPlayerListItem.css";

class MvPlayerListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const activeClass = this.props.active
            ? "mvPlayerListItem active"
            : "mvPlayerListItem";
        return (
            <Link
                style={{ textDecoration: "none", color: "white" }}
                to={{ pathname: `/player/${this.props.movie.id}` }}
            >
                <div className={activeClass}>
                    <div className="mvPlayerListItem--number">
                        {this.props.number}
                    </div>
                    <div className="mvPlayerListItem--title">
                        {this.props.movie.title}
                    </div>
                    <div className="mvPlayerListItem--time">
                        {calcTime(this.props.movie.runtime)}
                    </div>
                </div>
                <div className="mvPlayerListItem--divider" />
            </Link>
        );
    }
}

export { MvPlayerListItem };
