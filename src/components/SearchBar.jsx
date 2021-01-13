import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import "../css/SearchBar.css";

class SearchBar extends Component {
    state = { value: "" };
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };
    render() {
        return (
            <div className="searchBar--container">
                <div className="searchBar">
                    <input
                        type="text"
                        className="searchBar--input"
                        placeholder="Rechercher un film"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <div
                        className="searchBar--submit"
                        onClick={() =>
                            this.props.onSearchBarClick(this.state.value)
                        }
                    >
                        <FontAwesome className="searchIcon" name="search" />
                    </div>
                </div>
            </div>
        );
    }
}

export { SearchBar };
