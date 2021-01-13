import React, { Component } from "react";
import { MvPlayerList, Spinner, VideoPlayer } from "../components";
import { API_KEY, API_URL } from "../config";
import axios from "axios";

import "../css/MoviePlayer.css";

class MoviePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            selectedMovie: {},
            loading: false,
        };
    }
    async componentDidMount() {
        console.log("--------MOUNT----------");
        const moviesInLocalStorage = JSON.parse(localStorage.getItem("movies"));
        console.log("Films préférés", moviesInLocalStorage);

        //récupération des vidéos liées aux films préférés
        const promises = moviesInLocalStorage.map((movie) => {
            // on crée un tableau de promises
            return this.getMovie(movie.id); // retourne une promesse
        });
        const moviesFromApi = await Promise.all(promises);
        const movies = moviesFromApi.map((result) => result.data);
        console.log("Les films de l'api : ", movies);
        const selectedMovie = movies[0];
        await this.setState({
            movies: movies,
        });

        this.updateSelectedMovie(selectedMovie);
    }
    updateSelectedMovie = async (selectedMovie) => {
        console.log("Selected movie => ", selectedMovie);
        const videos = await axios.get(
            `${API_URL}/movie/${selectedMovie.id}/videos?api_key=${API_KEY}&language=fr`
        );
        console.log("Videos de  selectedmovie => ", videos);
        if (videos.data.results.length > 0) {
            const video = videos.data.results[0];
            console.log("Les vidéos du film : ", videos.data.results);
            await this.setState({
                selectedMovie: selectedMovie,
                video: video,
            });
            console.log("le state de MoviePlayer : ", this.state);
        } else {
            console.log("PAS DE VIDEOS");
        }
    };

    getMovie = (id) => {
        // retourne une promesse
        const url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=fr`;
        return axios.get(url);
    };
    handleEnded = () => {
        console.log("video ended");
        const index = this.state.movies.indexOf(this.state.selectedMovie);
        console.log("index : ", index);
        const newIndex = this.state.movies[index + 1] ? index + 1 : 0;
        console.log("newIndex : ", newIndex);
        const selectedMovie = this.state.movies[newIndex];
        console.log(selectedMovie);

        this.updateSelectedMovie(selectedMovie);
    };
    componentDidUpdate(prevProps) {
        console.log("--------UPDATE----------");
        console.log(prevProps.match.params.id);
        console.log(this.props.match.params.id);
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const id = this.props.match.params.id;
            const selectedMovie = this.getMovieFromState(id);
            console.log("==========> selectedMovie : ", selectedMovie);
            this.updateSelectedMovie(selectedMovie);
        }
    }
    getMovieFromState = (id) => {
        console.log(id);
        console.log(this.state.movies);
        const selectedMovie = this.state.movies.find(
            (movie) => movie.id === parseInt(id)
        );
        console.log(selectedMovie);
        return selectedMovie;
    };
    render() {
        console.log(this.state.video);
        const videoUrl = this.state.video
            ? `https://www.youtube.com/watch?v=${this.state.video.key}`
            : "";
        return (
            <div className="moviePlayer">
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <>
                        <VideoPlayer
                            movie={this.state.selectedMovie}
                            handleEnded={this.handleEnded}
                            videoUrl={videoUrl}
                        />
                        <MvPlayerList
                            movies={this.state.movies}
                            selectedMovie={this.state.selectedMovie}
                        />
                    </>
                )}
            </div>
        );
    }
}

export { MoviePlayer };
