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
import DragContainer from '../Beautiful-dnd/DragContainer';

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
              component={CatalogItemContainer}
            />
            <Route 
              path='/beautiful'
              component={DragContainer}
            />
            <Redirect to='/catalog' />
        </Switch>
      </Router>
    </div>
  )
}
