import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinMenu from './components/CoinMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Finance</h1>
          <h4 className="App-subtitle">Interface for Yahoo! Finance Web-Scraped Data</h4>
        </header>
		<CoinMenu/>
      </div>
    );
  }
}

export default App;
