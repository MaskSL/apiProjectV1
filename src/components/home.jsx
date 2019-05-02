import React, { Component } from 'react';
import DisplayItems from '../components/displayitem';


//Contains Home, which displays items
class Home extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <h1>Home</h1>
        <DisplayItems />
      </div>
    );
  }
}

export default Home;