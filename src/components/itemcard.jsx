import React, { Component } from "react";

class ItemCard extends Component {

  //Contains any data needed to be used
  state = {
    tags: ["Action", "Adventure"],
    movieName: this.props.movieName,
    movieTags: this.props.movieTags
  };
  /* The Card containing the movie details which is displayed in home */
  render() {
    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{this.state.movieName}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Image</h1>
              <p className="card-text">Movie Description</p>
              <ul className="list-unstyled mt-3 mb-4">
                {this.showTags()}
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">View Details</button>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Add to Cart</button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  /* Function to display array from the movie tags */

  showTags() {
    if (this.state.movieTags === undefined)
      return "Nothing here";
    if (this.state.movieTags.length === 0)
      return "No tags available";
    else
      return this.state.movieTags.map(tag => <li>{tag}</li>);
  }



}

export default ItemCard;

