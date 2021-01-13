import React, { Component } from "react";
import axios from "axios";
import { ActorList, HeaderDetails, Spinner } from "../components";
import { API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            actors: [],
            movie: {},
            actors: [],
        };
    }
    async componentDidMount() {
        try {
            const res = await this.loadInfos();
            console.log(("res", res));
            await this.setState({ movie: res.data });
            const actors = await this.getActors();
            console.log(actors);
            this.setState({ actors: actors.data.cast });
        } catch (e) {
            console.log(e);
        }
    }
    loadInfos = () => {
        const url = `${API_URL}/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=fr`;
        return axios.get(url);
    };
    getActors = () => {
        const url = `${API_URL}/movie/${this.props.match.params.id}/credits?api_key=${API_KEY}&language=fr`;
        return axios.get(url);
    };
    render() {
        return (
            <div className="app">
                {this.props.loading ? (
                    <Spinner />
                ) : (
                    <>
                        <HeaderDetails
                            movie={this.state.movie}
                            imgSrc={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${this.state.movie.backdrop_path}`}
                            runTime={this.state.movie.runtime}
                            revenu={this.state.movie.revenue}
                            status={this.state.movie.status}
                            vote={this.state.movie.vote_average}
                        />
                        <ActorList actors={this.state.actors} />
                    </>
                )}
            </div>
        );
    }
}

export { Details };
