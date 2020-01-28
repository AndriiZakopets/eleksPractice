import React from 'react';
import API from '../API'
import './styles/Catalog.css';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from './ListItem';

const TRENDING = 'trending';
const POPULAR = 'popular';
const TOP = 'top';

const REQUEST_MAP = {
  [TRENDING]: API.getTrending,
  [POPULAR]: API.getPopular,
  [TOP]: API.getTopRated
}

class Catalog extends React.Component {
  state = {
    settings: {
      sorting: localStorage.getItem('sorting') || 'trending',
      page: localStorage.getItem('page') || 1,
      searchQuery: ''
    },
    data: []
  };

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.settings !== prevState.settings) {
      this.fetchData();
    }
  }

  changeData = ({ results }) => {
    this.setState({ data: results });
  }

  changeSettings = (update = {}) => {
    this.setState(prevState => ({
      settings: {
        ...prevState.settings,
        page: 1,
        ...update
      }
    }))
  }

  searchOnEnter = e => {
    const searchQuery = e.target.value;
    if (e.keyCode !== 13) return;

    this.changeSettings({ searchQuery });
  }

  fetchData = () => {
    const { searchQuery, sorting, page } = this.state.settings;

    if (searchQuery) {
      API.getMovieByQuery(page, searchQuery).then(this.changeData);
    } else {
      const requestFunc = REQUEST_MAP[sorting];

      if (requestFunc) {
        requestFunc(page).then(this.changeData);
      }
    }
  }

  onSelectChange = e => {
    localStorage.setItem('sorting', e.target.value);
    this.changeSettings({ sorting: e.target.value })
  }

  render() {
    const { data, settings: { searchQuery, sorting } } = this.state;

    return (
      <div className="Catalog">
        <div className="filters">
          <TextField
            label="Search"
            defaultValue={searchQuery}
            onKeyUp={this.searchOnEnter}
          />
          <Select
            disabled={!!searchQuery}
            onChange={this.onSelectChange}
            value={sorting}
          >
            <MenuItem value="trending">
              trending
            </MenuItem>
            <MenuItem value="popular">
              popular
            </MenuItem>
            <MenuItem value="top">
              top
            </MenuItem>
          </Select>
        </div>
        <div className="list">
          {
            data.map(movie => (
              <ListItem
                movie={movie}
                key={movie.id}
                history={this.props.history}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Catalog;
