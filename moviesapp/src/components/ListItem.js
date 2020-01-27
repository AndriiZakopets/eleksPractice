import React from 'react';
import './styles/ListItem.css';
import { Link, Redirect } from 'react-router-dom'

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push(`catalog/${this.props.movie.id}`);
  }

  render() {
    return (
      <div className="ListItem">
        <img className="link image-content" onClick={this.redirect} src={`https://image.tmdb.org/t/p/original${this.props.movie.poster_path}`} alt={this.props.movie.title}/>
        <div className="info">
          <div className="title-date">
            <div onClick={this.redirect} className="title link">
              {this.props.movie.title}
            </div>
          </div>
          <p className="overview">{this.props.movie.overview}</p>
          <p onClick={this.redirect} className="view-more link">More Info</p>
        </div>
      </div>
    );
  }
}

export default ListItem;
