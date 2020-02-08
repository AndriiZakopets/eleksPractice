import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({ imageOnClick, movie, routePath }) {
  return (
    <div className="ListItem">
      <img 
        className="link image-content" 
        onClick={imageOnClick} 
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
        alt={movie.title}
        onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/120x180?text=IMAGE%20NOT%20FOUND"} }
      />
      <div className="info">
        <Link to={routePath} className="title link">
          {movie.title}
        </Link>
        <p className="overview">{movie.overview}</p>
        <Link className="view-more link" to={routePath}>More Info</Link>
      </div>
    </div>
  );
}

export default ListItem;
