import React, { useEffect, useState, useCallback } from 'react';
import API from '../API'
import Filters from './Filters'
import ListItem from './ListItem';

const TRENDING = 'trending';
const POPULAR = 'popular';
const TOP = 'top';

const REQUEST_MAP = {
  [TRENDING]: API.getTrending,
  [POPULAR]: API.getPopular,
  [TOP]: API.getTopRated
}

function Catalog({ data, settings, history, setSettings }) {;
  const changeSettings = (newSettings = {}) => {
    setSettings(prevState => ({
      ...prevState,
      page: 1,
      ...newSettings
    }));
  }

  return (
    <div className="Catalog">
      <Filters 
        settings={settings} 
        changeSettings={changeSettings}
      />
      <div className="list">
        {
          data.map(movie => (
            <ListItem
              movie={movie}
              key={movie.id}
              history={history}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Catalog;