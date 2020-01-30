import React, { useState, useCallback, useEffect } from 'react';
import './styles/App.css';
import API from '../API'
import Catalog from './Catalog';
import CatalogItem from './CatalogItem';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const TRENDING = 'trending';
const POPULAR = 'popular';
const TOP = 'top';
const SEARCH = 'search';

const REQUEST_MAP = {
  [TRENDING]: API.getTrending,
  [POPULAR]: API.getPopular,
  [TOP]: API.getTopRated,
  [SEARCH]: API.getMovieByQuery
}

function App() {
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState({});
  const [totalPages , setTotalPages] = useState(0);
  const [settings, setSettings] = useState({
    sorting: localStorage.getItem('sorting') || 'trending',
    page: localStorage.getItem('page') || 1,
    searchQuery: ''
  });

  useEffect(() => {
    const { searchQuery, sorting, page } = settings;
    const requstFuncKey = searchQuery.trim() ? SEARCH : sorting;
    const requestFunc = REQUEST_MAP[requstFuncKey];

    localStorage.setItem('page', page);
    localStorage.setItem('sorting', sorting);

    requestFunc(settings)
    .then(({total_pages, results}) => {
      setData(results);
      setTotalPages(total_pages);

      const additionalDataById = results.reduce((res, curr) => {
        res[curr.id] = curr;
        return res;
      }, {});

      setDataById({
        ...dataById,
        ...additionalDataById
      });
    })
  }, [settings]);

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route
              path='/catalog'
              exact
              render={(routerProps) => (
                <Catalog
                  {...routerProps}
                  data={data}
                  dataById={dataById}
                  settings={settings}
                  setSettings={setSettings}
                />
              )}
            />
            <Route
              path='/catalog/:id'
              render={(routerProps) => <CatalogItem {...routerProps} dataById={dataById} />}
            />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
