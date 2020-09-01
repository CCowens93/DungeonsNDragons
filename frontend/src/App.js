import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wizard from './components/Wizard';
import WizardEdit from './components/WizardEdit';
import WizardCantrips from './components/WizardCantrip';
import WizardLevel1Spells from './components/WizardLevel1Spells'

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/wizard' exact={true} component={Wizard}/>
          <Route path='/wizard/:id' component={WizardEdit}/>
          <Route path='/wizard-cantrips' component={WizardCantrips}/>
          <Route path='/wizard-level1-spells' component={WizardLevel1Spells}/>
        </Switch>
      </Router>
    )
  }
}

export default App;


