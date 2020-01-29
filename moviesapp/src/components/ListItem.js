import React from 'react';

function ListItem({ history, movie }) {
  const redirect = () => {
    history.push(`catalog/${movie.id}`);
  }

  return (
    <div className="ListItem">
      <img 
        className="link image-content" 
        onClick={redirect} 
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
        alt={movie.title}
      />
      <div className="info">
        <div className="title-date">
          <div onClick={redirect} className="title link">
            {movie.title}
          </div>
        </div>
        <p className="overview">{movie.overview}</p>
        <p onClick={redirect} className="view-more link">More Info</p>
      </div>
    </div>
  );
}

export default ListItem;
