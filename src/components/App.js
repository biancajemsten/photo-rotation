import React, { Component } from 'react';
import '../App.css';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path={'/'} component={Home}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
