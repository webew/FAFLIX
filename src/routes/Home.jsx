import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderImg, LoadButton, PosterList, SearchBar } from "../components";
import { getMovies } from "../actions/movie";

class HomeComponent extends Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        const { loading, movies, headerMovie } = this.props;
        return (
            <div>
                <HeaderImg headerMovie={headerMovie} />
                <SearchBar onSearchBarClick={this.props.onSearchBarClick} />
                <PosterList
                    movies={movies}
                    localMovies={this.props.localMovies}
                />
                <LoadButton
                    loading={loading}
                    onLoadButtonClick={this.props.onLoadButtonClick}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        localMovies: state.movies.movies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMovies()),
    };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { Home };
