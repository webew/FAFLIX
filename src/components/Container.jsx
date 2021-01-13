import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "../css/Container.css";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <FontAwesome name={this.props.iconName} size="5x" />
                <h3 className="container--title">{this.props.content}</h3>
            </div>
        );
    }
}

export { Container };
