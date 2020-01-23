import React from 'react';
import './App.css';
import Catalog from './components/Catalog';
import CatalogItem from './components/CatalogItem';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// const PAGE_SIZE = 5;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPageIds: [],
      itemsById: {}
    }

    this.addData = this.addData.bind(this);
  }

  addData(data) {
    this.setState({...data});
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route path='/catalog'
              render={routerProps => <Catalog appAddData={this.addData} {...routerProps} itemsIds={this.state.currentPageIds} items={this.state.itemsById} />}
            />
            <Route path='/catalog/:id' component={CatalogItem}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
