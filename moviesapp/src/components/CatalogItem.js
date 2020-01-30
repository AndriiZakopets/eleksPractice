import React, { useState, useEffect } from 'react';
import API from '../API';

function Catalog(props) {
  const id = props.match.params.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (props.cacheData[id]) {
      setMovie({
        ...props.cacheData[id]
      });
    } else {
      API.getDetails(id)
      .then(movie => {
        setMovie({ ...movie });
      });
    }
  }, [id, props.cacheData]);

  return (
    <div className="container">
      <img 
        className="CatalogItem_image-content" 
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
        alt={movie.title}
      />
      <span className="CatalogItem_title">{movie.title}({movie.release_date})</span>
      <span className="overview">{movie.overview}</span>
    </div>
  );
}

export default Catalog;
