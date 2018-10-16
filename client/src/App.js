import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Conferences from "./pages/Conferences";
import Schedule from "./pages/Schedule";
import TravelTips from "./pages/TravelTips";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


class App extends Component {



  render() {
    return (

      <Router>
        <div>
            <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/conferences" component={Conferences} />
            <Route exact path="/conferences/:id" component={Schedule} />
            <Route exact path="/traveltips" component={TravelTips} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    )
  }

};


export default App;
