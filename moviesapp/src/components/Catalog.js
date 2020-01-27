import React from 'react';
import API from '../API'
import './styles/Catalog.css';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from './ListItem';

class Catalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sorting: localStorage.getItem('sorting') ? localStorage.getItem('sorting') : 'trending',
      page: localStorage.getItem('page') ? localStorage.getItem('page') : 1,
      searchQuery: '',
      data: [],
      ifSortingDisabled: false
    }

    this.changeData(this.state.page);

    this.searchOnEnter = this.searchOnEnter.bind(this);
    this.changeData = this.changeData.bind(this);
  }

  searchOnEnter(e) {
    const str = e.target.value;
    if (e.keyCode !== 13) return;

    this.setState({ isSortingDisabled: /\S/.test(str), searchQuery: str }, this.changeData);
  }

  changeData() {
    const changeState = resp => {
      const data = resp['results'];
      this.setState({ data });
    }

    if (this.state.isSortingDisabled) {
      API.getMovieByQuery(1, this.state.searchQuery).then(changeState);
    } else {
      if (this.state.sorting === 'trending') API.getTrending(1).then(changeState);
      if (this.state.sorting === 'popular') API.getPopular(1).then(changeState);
      if (this.state.sorting === 'top') API.getTopRated(1).then(changeState);
    }
  }

  onSelectChange = (e) => {
    localStorage.setItem('sorting', e.target.value);
    this.setState({ sorting: e.target.value }, this.changeData)
  }

  render() {
    return (
      <div className="Catalog">
        <div className="filters">
          <TextField defaultValue={this.state.searchQuery} label="Search" onKeyUp={this.searchOnEnter} />
          <Select disabled={this.state.isSortingDisabled} onChange={this.onSelectChange} value={this.state.sorting} >
            <MenuItem value="trending">trending</MenuItem>
            <MenuItem value="popular">popular</MenuItem>
            <MenuItem value="top">top</MenuItem>
          </Select>
        </div>
        <div className="list">
          {
            this.state.data.map(movie => <ListItem key={movie.id} history={this.props.history} movie={movie}/>)
          }
        </div>
      </div>
    );
  }
}

export default Catalog;
