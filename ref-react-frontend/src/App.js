import React, { Component } from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LandingPage from './components/Landing/LandingPage';
import NotFound from './components/common/NotFound';

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
