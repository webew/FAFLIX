import React, { Component } from "react";
import { Container } from "./Container";
import { Stars } from "./Stars";
import { calcTime, convertMoney } from "../utils/helpers";
import "../css/HeaderDetails.css";

class HeaderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    calcVote = () => {
        const vote = Math.round(this.props.vote / 2);
        const starsArray = [];
        for (let i = 1; i <= 5; i++) {
            let value = 1;
            if (vote < i) {
                value = 0;
            }
            starsArray.push(value);
        }
        return starsArray;
    };
    render() {
        return (
            <div className="headerDetails">
                <div className="badge-decoration">{this.props.status}</div>
                <div className="headerDetails--poster">
                    <img
                        src={this.props.imgSrc}
                        alt=""
                        className="headerDetails--poster__img"
                    />
                </div>
                <div className="headerDetails--container">
                    <h3 className="headerDetails--container__title">
                        {this.props.movie.title}
                    </h3>
                    <p className="headerDetails--container__desc">
                        {this.props.movie.overview}
                    </p>
                    <div className="headerDetails--info">
                        <Container
                            iconName="clock"
                            content={calcTime(this.props.movie.runtime)}
                        />
                        <Stars starsArray={this.calcVote()} />
                        <Container
                            iconName="money"
                            content={convertMoney(this.props.movie.revenue)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export { HeaderDetails };
