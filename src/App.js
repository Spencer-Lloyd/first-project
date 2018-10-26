
import React, { Component } from 'react';
import './App.css';


import Characters from './components/get-data'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Characters></Characters>
      </div>
    );
  }
}

export default App;
