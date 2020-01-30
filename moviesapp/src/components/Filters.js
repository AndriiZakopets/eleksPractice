import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Filters( {changeSettings, settings} ) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState(settings.sorting);

  const changeSettingsDebounced = useCallback(debounce(changeSettings, 400), []);

  const onSearchQueryChange = e => {
    setSearchQuery(e.target.value);
    changeSettingsDebounced({ searchQuery: e.target.value });
  }

  const onSortingChange = e => {
    setSorting(e.target.value);
    changeSettings({ sorting: e.target.value });
  }

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
