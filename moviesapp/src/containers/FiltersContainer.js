import React, { useCallback } from 'react';
import Filters from '../components/Filters';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions/reducerActions';

function FiltersContainer() {
  const settings = useSelector(state => state.settings);
  const tempSearchQuery = useSelector(state => state.tempSearchQuery);
  console.log(settings.searchQuery);

  const dispatch = useDispatch();

  const changeSettings = (prevSettings, newSettings = {}) => {
    dispatch(actions.setSettings({
      ...prevSettings,
      page: 1,
      ...newSettings
    }));
  }

  const changeSettingsDebounced = useCallback(debounce(changeSettings, 1000), []);

  const onSearchQueryChange = e => {
    dispatch(actions.setTempSearchQuery(e.target.value));
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
