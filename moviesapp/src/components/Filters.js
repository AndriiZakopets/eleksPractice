import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Filters( {onSortingChange, onSearchQueryChange, searchQuery, sorting} ) {
  return (
    <div className="filters">
      <TextField
        label="Search"
        value={searchQuery}
        onChange={onSearchQueryChange}
      />
      <Select
        disabled={!!searchQuery.trim()}
        onChange={onSortingChange}
        value={sorting}
      >
        <MenuItem value='trending'>
          trending
        </MenuItem>
        <MenuItem value='popular'>
          popular
        </MenuItem>
        <MenuItem value='top'>
          top
        </MenuItem>
      </Select>
    </div>
  );
}

export default Filters;
