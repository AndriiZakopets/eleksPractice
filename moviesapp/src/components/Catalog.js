import React from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import ListItem from './ListItem';
import PaginationContainer from '../containers/PaginationContainer';

function Catalog({ redirect, data, getRoute }) {
  return (
    <div className="Catalog">
      <FiltersContainer />
      <PaginationContainer />
      <div className="list">
        {
          data.length > 0 ? data.map(movie => (
            <ListItem
              routePath={getRoute(movie.id)}
              imageOnClick={() => redirect(movie.id)}
              movie={movie}
              key={movie.id}
            />
          )) : 'There are no movies that matched your query.'
        }
      </div>
    </div>
  );
}

export default Catalog;