import React from 'react';
import { Link } from 'react-router-dom';

function CatalogItem({ movie = {} }) {
  return (
    <div className="container">
      <Link 
        to="/catalog"
        style={{
          marginBottom: 20 + 'px',
          color: 'blue' 
        }}
      >
        back...
      </Link>
      <img 
        className="CatalogItem_image-content" 
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
        alt={movie.title}
      />
      <div className="CatalogItem_title">
        {movie.title}
      </div>
      <div className="date">
        {movie.release_date}
      </div>
      <div className="overview">
        {movie.overview}
      </div>
    </div>
  );
}

export default CatalogItem;
