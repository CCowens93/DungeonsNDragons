import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wizard from './components/Wizard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/wizard' exact={true} component={Wizard}/>
        </Switch>
      </Router>
    )
  }
}

export default App;


