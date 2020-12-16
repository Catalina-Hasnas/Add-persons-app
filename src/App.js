import React, { Component } from 'react';
import classes from './App.module.css'

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Persons />
      </div>
    );
  }
}

export default App;
