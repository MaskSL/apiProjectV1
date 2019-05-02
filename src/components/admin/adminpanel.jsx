import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import AddMovie from "./addmovie";
import AdminMain from "./adminmain";


class AdminPanel extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Movies Admin Panel</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Main</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Movie</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Edit Movie</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Delete Movie</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={AdminMain} />
          <Route path="/create" component={AddMovie} />
        </div>
      </Router>
    );
  }
}

export default AdminPanel;