import React, { Component } from 'react';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <img className="w-75 h-75 mx-auto d-block" src={require('./Studio_Ghibli_logo.svg.png')} alt="" />
            </div>
        )
    }
}
