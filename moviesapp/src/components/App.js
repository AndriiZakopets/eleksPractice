import React, { useState, useCallback } from 'react';
import './styles/App.css';
import Catalog from './Catalog';
import CatalogItem from './CatalogItem';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  const [cacheData, setCacheData] = useState({});

  const changeCacheData = useCallback(newData => {
    setCacheData(prevState => ({
      ...prevState,
      ...newData
    }))
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route
              path='/catalog'
              exact
              render={(routerProps) => <Catalog {...routerProps} changeCacheData={changeCacheData} />}
            />
            <Route
              path='/catalog/:id'
              render={(routerProps) => <CatalogItem {...routerProps} cacheData={cacheData} />}
            />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
