import React from 'react';
import './styles/App.css';
import Catalog from './Catalog';
import CatalogItem from './CatalogItem';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route
              path='/catalog'
              component={Catalog}
              exact
            />
            <Route
              path='/catalog/:id'
              component={CatalogItem}
            />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
