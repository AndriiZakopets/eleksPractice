import React from 'react';
import './styles/App.css';
import Catalog from './Catalog';
import CatalogItem from './CatalogItem';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route exact path='/catalog'
                render={routerProps => <Catalog {...routerProps} />}
              />
              <Route path='/catalog/:id'
                render={routerProps => <CatalogItem {...routerProps} />}
              />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
