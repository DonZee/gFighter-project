import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    fighters: []
  }
  render() {
    return (
      <div className="App">
        <FighterList/>
      </div>
    );
  }
}

export default App;
