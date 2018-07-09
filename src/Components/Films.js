import React, { Component } from 'react';
import Card from './Card';


export default class Films extends Component {

  constructor() {
    super();
    this.state = {
      films: [],
    }
  }

  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(results => {
        return results.json()
      }).then(data => {
        let film = data
        this.setState({films: film})
        console.log("state", this.state.films);
      })
  }

  render() {
    return (
      <div className="container">
        <Card film={this.state.films} />
      </div>
    )
  }
}

// componentDidMount(){
//         fetch('http://jsonplaceholder.typicode.com/photos?_limit=30')
//         .then(photos => {
//             return photos.json();
//         }).then(data => {
//             let pictures = data.map((photo) => {
//             return (
//                 <div key={photo.id} className="photo-container">
//                     <img src={photo.thumbnailUrl} />
//                 </div>
//             )
//             })
//             this.setState({pictures: pictures});
//             console.log('data', data);
//         });
//     }
//
//         render() {
//             return (
//             <div className="photo-item">
//                 {this.state.pictures}
//             </div>
//             )
//         }
