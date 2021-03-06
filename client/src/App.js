import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Conferences from "./pages/Conferences";
import TravelTips from "./pages/TravelTips/traveltips";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Welcome from './pages/Welcome';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/conferences" component={Conferences} />
        {/* <Route exact path="/scrapedconferences" component={Conferences} /> */}
        <Route exact path="/conferences/:id" component={Details} />
        <Route exact path="/something" component={NotFound} />
            <Route exact path="/profile" component={Profile} />
       <Route exact path="/traveltips" component={TravelTips} />
        <Route exact path="/conferences/:id" component={Details} />
        {/* <Route exact path="/something" component={NoMatch} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
