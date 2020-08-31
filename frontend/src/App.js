import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wizard from './components/Wizard';
import WizardEdit from './components/WizardEdit';
import Spells from './components/WizardSpells';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/wizard' exact={true} component={Wizard}/>
          <Route path='/wizard/:id' component={WizardEdit}/>
          <Route path='/spells' component={Spells}/>
        </Switch>
      </Router>
    )
  }
}

export default App;


