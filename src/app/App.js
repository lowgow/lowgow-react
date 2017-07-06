import React from 'react';
import Canvas from '../canvas/Canvas';
import Text from '../text/Text';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to lowgow!!!</h2>
        </div>
        <Canvas/>
        <Text/>
      </div>
    );
  }
}

export default App;
