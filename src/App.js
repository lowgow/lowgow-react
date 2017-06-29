import React, { Component } from 'react';
import logo from './logo-small.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to lowgow</h2>
        </div>
        <p className="App-intro">
          Welcome to logow!
        </p>
      </div>
    );
  }
}

export default App;
    