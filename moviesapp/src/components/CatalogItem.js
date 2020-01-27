import React from 'react';
import API from '../API';
import './styles/CatalogItem.css';

class Catalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      year: ''
    }

    API.getDetails(this.props.match.params.id)
    .then(movie => {
      this.setState({ movie, year: movie.release_date.split('-')[0] })
    })
  }

  render() {
    console.log(this.state.movie);
    return (
      <div className="container">
        <img className="CatalogItem_image-content" src={`https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}`} />
        <span className="CatalogItem_title">{this.state.movie.title}({this.state.year})</span>
        <span className="overview">{this.state.movie.overview}</span>
      </div>
    );
  }
}

export default Catalog;
