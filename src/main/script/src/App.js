import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  handleChange = (event) => {
    this.setState( {request: event.target.value} )
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var request = this.state.request.trim();
    if (!request) {
      return;
    }
    fetch(`/echo?request=${request}`)
        .then(response => {
          return response.text();
        })
        .then(body => {
          alert(body);
        });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Do you hear an echo?</h2>
        </div>
        <p className="App-intro" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Echo" />
        </p>
      </div>
    );
  }
}

export default App;
