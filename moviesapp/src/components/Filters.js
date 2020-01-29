import debounce from 'lodash/debounce'
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Filters( {settings, changeSettings} ) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState(settings.sorting);
  const [isSortingDisabled, setIsSortingDisabled] = useState(false);

  const onChange = (searchQuery) => {
    changeSettings({ searchQuery });
  }

  const onChangeSettingsDebounced = debounce(onChange, 1000);

  useEffect(() => {
    setIsSortingDisabled(!!searchQuery.trim());
    onChangeSettingsDebounced(searchQuery);
  }, [searchQuery]);

  const onSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const onSortingChange = (e) => {
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
        disabled={isSortingDisabled}
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
