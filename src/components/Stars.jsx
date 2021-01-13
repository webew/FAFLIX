import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "../css/Stars.css";

const Stars = (props) => {
    const renderStars = () => {
        return props.starsArray.map((value, i) => {
            let name = value === 1 ? "star" : "star-o";
            return (
                <FontAwesome key={i} className="stars" name={name} size="3x" />
            );
        });
    };
    const renderPlainStars = () => {
        return props.fakeArray1.map((element, i) => {
            return (
                <FontAwesome key={i} className="stars" name="star" size="3x" />
            );
        });
    };
    const renderEmptyStars = () => {
        return props.fakeArray2.map((element, i) => {
            return (
                <FontAwesome
                    key={i}
                    className="stars"
                    name="star-o"
                    size="3x"
                />
            );
        });
    };
    return <div className="stars">{renderStars()}</div>;
};

export { Stars };
