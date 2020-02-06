import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress'

function Filters({
  onSortingChange,
  onSearchQueryChange,
  searchQuery,
  sorting,
  sortingArr,
  isFetching,
  isFetched,
  error
}) {
  return (
    <div className="filters">
      <TextField
        label="Search"
        value={searchQuery}
        onChange={onSearchQueryChange}
      />
      {isFetching ?
        <CircularProgress /> :
        isFetched ?
          'success.' :
          error
      }
      <Select
        disabled={!!searchQuery.trim()}
        onChange={onSortingChange}
        value={sorting}
      >
        {sortingArr.map((sortingElem, i) => (
          <MenuItem value={sortingElem} key={i}>
            {sortingElem}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default Filters;
