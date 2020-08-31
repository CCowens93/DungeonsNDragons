import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wizard from './components/Wizard';
import WizardEdit from './components/WizardEdit';
import WizardCantrips from './components/WizardCantrip';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/wizard' exact={true} component={Wizard}/>
          <Route path='/wizard/:id' component={WizardEdit}/>
          <Route path='/wizard-cantrips' component={WizardCantrips}/>
        </Switch>
      </Router>
    )
  }
}

export default App;


