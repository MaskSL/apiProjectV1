import React, { Component } from 'react';
import Header from '../components/header';
import Home from '../components/home';
import Footer from '../components/footer';
import LoginPage from '../components/loginpage';
import AdminPanelMovie from '../components/admin/adminpanel';
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


//Contains all main components
class App extends Component {
  render() {
    return (
      <div>
        <AdminPanelMovie/>
        <Route path="/addmovie" />
        <Route path="/editmovie" />
        <Footer />
      </div>
    );
  }
}

export default App;