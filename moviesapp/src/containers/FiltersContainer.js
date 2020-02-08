import React, { useState, useCallback } from 'react';
import Filters from '../components/Filters';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import { setSettings } from '../actions/settingsActions';
import { SORTINGS } from '../constants';

export default function FiltersContainer() {
  const { sorting, searchQuery } = useSelector(state => state.settings);
  const { isFetching, isFetched, fetchError } = useSelector(state => state.movies);

  const [tempSearchQuery, setTempSearchQuery] = useState(searchQuery); 

  const dispatch = useDispatch();

  const changeSettingsDebounced = useCallback(
    debounce(newSettings => {
      dispatch(setSettings({ ...newSettings }))
    }, 400), 
    []
  );

  const onSearchQueryChange = e => {
    setTempSearchQuery(e.target.value);
    changeSettingsDebounced({ searchQuery: e.target.value });
  }

  const onSortingChange = e => {
    dispatch(setSettings({ sorting: e.target.value }));
  }

  return (
    <Filters 
      onSortingChange={onSortingChange}
      onSearchQueryChange={onSearchQueryChange}
      searchQuery={tempSearchQuery}
      sorting={sorting}
      sortingKeys={SORTINGS}
      isFetching={isFetching}
      isFetched={isFetched}
      error={fetchError}
    />
  );
}
