import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import API from '../API'
import CatalogContainer from '../containers/CatalogContainer.js';
import CatalogItem from './CatalogItem';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route
              path='/catalog'
              exact
              component={CatalogContainer}
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
