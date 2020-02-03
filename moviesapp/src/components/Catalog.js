import React from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import ListItem from './ListItem';

function Catalog({ redirect, data }) {;
  return (
    <div className="Catalog">
      <FiltersContainer />
      <div className="list">
        {
          data.map(movie => (
            <ListItem
              handleClick={() => redirect(movie.id)}
              movie={movie}
              key={movie.id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Catalog;