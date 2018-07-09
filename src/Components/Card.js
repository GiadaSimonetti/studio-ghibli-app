import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        console.log(this.props.film);
        let film = this.props.film.map((film) => {
            return (
                <div className="card col-md-6" style={{ width: '20rem' }} key={film.id}>

                    <div className="card-block">
                        <h2 className="card-title">{film.title}</h2>
                        <p className="card-text">{film.description.substring(0, 350)}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{film.director}</li>
                        <li className="list-group-item">{film.producer}</li>
                        <li className="list-group-item">{film.release_date}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="container-card">
                {film}
            </div>
        )

    }
}
