//import React, { Component } from 'react';
//import logo from './logo.svg';
import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Conferences from "./pages/Conferences";
import Schedule from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


class App extends React.Component {

  render() {

    return (

      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/conferences" component={Conferences} />
            <Route exact path="/conferences/schedule" component={Schedule} />
            <Route exact path="/conferences/nomatch" component={NoMatch} />
            <Route exact path="/conferences/profile" component={Profile} />
          </Switch>
        </div>
      </Router>

    )

  }

};

export default App;
