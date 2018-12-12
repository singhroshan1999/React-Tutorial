import React, { Component } from 'react';
import './App.css';
import Cockpit from './cockpit/cockpit';
import Persons from './persons/persons';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Cockpit />
      <Persons />
       
      </div>
    );
  }
}

export default App;
