import React from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import ListItem from './ListItem';
import PaginationContainer from '../containers/PaginationContainer';

function Catalog({ redirect, data }) {;
  return (
    <div className="Catalog">
      <FiltersContainer />
      <PaginationContainer />
      <div className="list">
        {
          data ? data.map(movie => (
            <ListItem
              handleClick={() => redirect(movie.id)}
              movie={movie}
              key={movie.id}
            />
          )) : false
        }
      </div>
    </div>
  );
}

export default Catalog;