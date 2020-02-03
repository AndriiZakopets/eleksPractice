import React from 'react';

function ListItem({ handleClick, movie }) {
  return (
    <div className="ListItem">
      <img 
        className="link image-content" 
        onClick={handleClick} 
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
        alt={movie.title}
      />
      <div className="info">
        <div className="title-date">
          <div onClick={handleClick} className="title link">
            {movie.title}
          </div>
        </div>
        <p className="overview">{movie.overview}</p>
        <p onClick={handleClick} className="view-more link">More Info</p>
      </div>
    </div>
  );
}

export default ListItem;
