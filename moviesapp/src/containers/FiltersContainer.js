import React, { useState, useCallback } from 'react';
import Filters from '../components/Filters';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import settingsActions from '../actions/settingsActions';

function FiltersContainer() {
  const [tempSearchQuery, setTempSearchQuery] = useState(''); 
  const settings = useSelector(state => state.settings);

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
    />
  );
}

export default FiltersContainer;
