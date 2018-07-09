import React, { Component } from 'react';
import './App.css';
import Films from './Films'

export default class App extends Component {
  render() {
    return (
      <div className="Container">

        <Films />
      </div>
    );
  }
}
