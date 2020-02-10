import React from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import ListItem from './ListItem';
import PaginationContainer from '../containers/PaginationContainer';
import { Link } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function Catalog({ redirect, data, getRoute, addToWatchList }) {
  return (
    <div className="Catalog">
      <ReactNotification />
      <Link 
        to="/watchlist"
        style={{
          marginBottom: 20 + 'px',
          color: 'blue' 
        }}
      >
        watchlist...
      </Link>
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
              addToWatchList={() => addToWatchList(movie)}
            />
          )) : 'There are no movies that matched your query.'
        }
      </div>
    </div>
  );
}

export default Catalog;