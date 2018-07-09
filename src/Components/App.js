import React, { Component } from 'react';
import './App.css';
import Films from './Films'
import Jumbotron from './Jumbotron';

export default class App extends Component {
  render() {
    return (
      <div className="Container">
        <Jumbotron />
        <Films />
      </div>
    );
  }
}
