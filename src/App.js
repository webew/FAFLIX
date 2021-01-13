import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, Details, NotFound, MoviePlayer, Login } from "./routes";
import axios from "axios";
import "./App.css";
import { API_URL, API_KEY } from "./config";
import { initFirebase } from "./utils/firebase-config";
initFirebase();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movies: [],
            badge: 0,
            headerMovie: {},
            activePage: 0,
            totalPages: 0,
            searchText: "",
            nbMovies: 0,
        };
    }
    componentDidMount() {
        // initFirebase();
        this.updateMovies();
    }
    updateMovies = async () => {
        this.setState({ loading: true });
        let url = "";
        const page = this.state.activePage + 1;
        if (this.state.searchText !== "") {
            url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&page=${page}&language=fr`;
        } else {
            url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
        }
        try {
            const {
                data: { results, page, total_pages },
            } = await axios.get(url);

            const newMoviesList = [...this.state.movies, ...results];
            console.log("newMoviesList", newMoviesList);
            this.setState({
                movies: newMoviesList,
                loading: false,
                activePage: page,
                totalPages: total_pages,
                headerMovie: newMoviesList[0],
                nbMovies: newMoviesList.length,
            });
        } catch (e) {
            console.log("erreur", e);
        }
    };

    handleSearch = async (searchValue) => {
        console.log(searchValue);
        this.setState(
            { searchText: searchValue, activePage: 0, movies: [] },
            () => this.updateMovies() // setState est asynchrone
        );
    };
    render() {
        console.log("----------RENDER-----------");
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Header
                            badge={this.state.badge}
                            nbMovies={this.state.nbMovies}
                        />
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={() => (
                                    <Home
                                        {...this.state}
                                        onSearchBarClick={this.handleSearch}
                                        onLoadButtonClick={this.updateMovies}
                                    />
                                )}
                            />
                            <Route
                                path="/player"
                                exact
                                component={MoviePlayer}
                            />
                            <Route
                                path="/player/:id"
                                exact
                                component={MoviePlayer}
                            />
                            <Route path="/login" exact component={Login} />
                            <Route path="/:id" exact component={Details} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
