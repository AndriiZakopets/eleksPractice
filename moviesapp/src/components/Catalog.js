import React, { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
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

function Catalog({ history, changeCacheData }) {;
  const [data, setData] = useState([]);
  const [totalPages , setTotalPages] = useState(0);
  const [settings, setSettings] = useState({
    sorting: localStorage.getItem('sorting') || 'trending',
    page: localStorage.getItem('page') || 1,
    searchQuery: ''
  });

  const changeSettings = (newSettings = {}) => {
    setSettings(prevState => ({
      ...prevState,
      page: 1,
      ...newSettings
    }));
  }

  const changeSettingsDebounced = debounce(changeSettings, 400);

  const getRequestFunc = useCallback(() => {
    const { searchQuery, sorting, page } = settings;
    const requestFunc = (searchQuery.trim()) ? 
    API.getMovieByQuery.bind(null, page, searchQuery) : 
    REQUEST_MAP[sorting].bind(null, page);

    return requestFunc;
    // .then(({ results }) => setData(results))
    // .catch(alert);
  }, [settings]);


  const addCacheData = useCallback(() => {
    const additionData = {};

    data.forEach(dataItem => {
      additionData[dataItem.id] = dataItem;
    });

    changeCacheData(additionData);
  }, [data, changeCacheData]);
  
  useEffect(() => {
    const requestFunc = getRequestFunc();

    requestFunc()
    .then(({total_pages, results}) => {
      setData(results);
      setTotalPages(total_pages);
    })
  }, [getRequestFunc]);

  useEffect(() => {
    localStorage.setItem('page', settings.page);
    localStorage.setItem('sorting', settings.sorting);
  }, [settings]);

  useEffect(() => {
    addCacheData();
  }, [addCacheData]);

  return (
    <div className="Catalog">
      <Filters 
        settings={settings} 
        changeSettings={changeSettings}
        changeSettingsDebounced={changeSettingsDebounced}
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