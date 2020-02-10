import React from 'react';
import '../styles/App.css';
import CatalogContainer from '../containers/CatalogContainer.js';
import CatalogItemContainer from '../containers/CatalogItemContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Redirect } from 'react-router';
import WatchListContainer from '../containers/WatchListContainer';
import ReactNotification from 'react-notifications-component';

export default function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Router>
        <Switch>
            <Route
              path='/catalog'
              exact
              component={CatalogContainer}
            />
            <Route
              path='/catalog/:id'
              component={CatalogItemContainer}
            />
            <Route 
              path='/watchlist'
              component={WatchListContainer}
            />
            <Redirect to='/catalog' />
        </Switch>
      </Router>
    </div>
  )
}
