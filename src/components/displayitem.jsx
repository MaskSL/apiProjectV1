import React, { Component } from "react";
import ItemCard from "./itemcard";


class DisplayItems extends Component {
    state = {
        allMovies: [
            { id: 1, movieName: "Avengers", movieTags: ["Action", "Adventure"] },
            { id: 2, movieName: "Avengers 2", movieTags: ["Action", "Adventure"] },
            { id: 3, movieName: "Mountain", movieTags: ["Action", "Adventure"] },
            { id: 3, movieName: "Avengers 3", movieTags: ["Action", "Adventure"] },
            { id: 3, movieName: "Avengers 3", movieTags: ["Action", "Adventure"] },
            { id: 3, movieName: "Avengers 3", movieTags: ["Action", "Adventure"] }
        ]
    };

    /* Container that passes the values to itemcard then displays */
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allMovies.map(movies => <div className="col-4" key={movies.id}>
                        <ItemCard key={movies.id} movieName={movies.movieName} movieTags={movies.movieTags} /></div>)}
                </div>
            </div>
        );
    }
}

export default DisplayItems;