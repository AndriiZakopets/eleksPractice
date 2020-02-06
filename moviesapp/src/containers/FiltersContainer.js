import React, { useState, useCallback } from 'react';
import Filters from '../components/Filters';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import { setSettings } from '../actions/settingsActions';
import { SORTINGS } from '../constants';

function FiltersContainer() {
  const settings = useSelector(state => state.settings);
  const [tempSearchQuery, setTempSearchQuery] = useState(settings.searchQuery); 
  const isFetching = useSelector(state => state.appData.isFetching);
  const isFetched = useSelector(state => state.appData.isFetched);
  const fetchError = useSelector(state => state.appData.error);

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
      sorting={settings.sorting}
      sortingArr={SORTINGS}
      isFetching={isFetching}
      isFetched={isFetched}
      error={fetchError}
    />
  );
}

export default FiltersContainer;
