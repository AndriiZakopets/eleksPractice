import React, { useState, useCallback } from 'react';
import Filters from '../components/Filters';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import settingsActions from '../actions/settingsActions';
import { SORTINGS } from '../constants';

function FiltersContainer() {
  const [tempSearchQuery, setTempSearchQuery] = useState(''); 
  const settings = useSelector(state => state.settings);
  const isFetching = useSelector(state => state.appData.isFetching);
  const isFetched = useSelector(state => state.appData.isFetched);
  const fetchError = useSelector(state => state.appData.error);

  const dispatch = useDispatch();

  const changeSettings = (prevSettings, newSettings = {}) => {
    dispatch(settingsActions.setSettings({
      ...prevSettings,
      page: 1,
      ...newSettings
    }));
  };

  const changeSettingsDebounced = useCallback(debounce(changeSettings, 400), []);

  const onSearchQueryChange = e => {
    setTempSearchQuery(e.target.value);
    changeSettingsDebounced(settings, { searchQuery: e.target.value });
  }

  const onSortingChange = e => {
    changeSettings(settings, { sorting: e.target.value });
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
