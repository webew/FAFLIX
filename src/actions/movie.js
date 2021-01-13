import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBER } from "./index";

export const addMovie = (movie) => {
    console.log("action addMovie", movie);
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
        movies = [...movies, movie];
    } else {
        movies = [];
        movies.push(movie);
    }
    console.log(movies);
    localStorage.setItem("movies", JSON.stringify(movies));
    return {
        type: ADD_MOVIE,
        payload: movies,
    };
};

export const removeMovie = (movieId) => {
    const oldMovies = JSON.parse(localStorage.getItem("movies"));
    console.log("oldMovies", oldMovies);
    console.log("movieId to remove", movieId);
    const movies = oldMovies.filter((movie) => movie.id !== movieId);
    console.log("movies restantes après remove", movies);
    localStorage.setItem("movies", JSON.stringify(movies));
    return {
        type: REMOVE_MOVIE,
        payload: movies,
    };
};

export const getMovies = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    return {
        type: GET_MOVIES,
        payload: movies,
    };
};

export const getNumber = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    let number;
    if (movies) {
        number = movies.length;
    } else {
        number = 0;
    }
    console.log(number);
    return {
        type: GET_NUMBER,
        payload: number,
    };
};
