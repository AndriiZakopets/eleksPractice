import React, { useState, useEffect } from 'react';
import API from '../API';

function Catalog(props) {
  const id = props.match.params.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (props.dataById[id]) {
      setMovie({
        ...props.dataById[id]
      });
    } else {
      API.getDetails(id)
      .then(movie => {
        setMovie({ ...movie });
      });
    }
  }, [id]);

  return (
    <div className="container">
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

export default React.memo(Catalog);
