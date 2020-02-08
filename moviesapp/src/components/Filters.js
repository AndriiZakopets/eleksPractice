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
  sortingKeys,
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
        {sortingKeys.map((el, i) => (
          <MenuItem value={el[0]} key={i}>
            {el[1]}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default Filters;
