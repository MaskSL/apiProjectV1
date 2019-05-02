import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Contains the Header bar
class Header extends Component {
  render() {
    return (

      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
          <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/1">Page1</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            <li>
              <Link className="nav-link">My Cart</Link>
            </li>
            <li>
              <Link className="nav-link" to="/loginpage">Login</Link>
            </li>
          </ul>
        </nav>
      </div>

    );
  }
}

export default Header;