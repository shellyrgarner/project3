//import React, { Component } from 'react';
//import logo from './logo.svg';
import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Conferences from "./pages/Conferences";
import Schedule from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Conferences} />
        <Route exact path="/conferences" component={Conferences} />
        <Route exact path="/conferences/schedule" component={Schedule} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
