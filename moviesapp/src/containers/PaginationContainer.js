import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-js-pagination';
import { setSettings } from '../actions/settingsActions';
import '../styles/Pagination.css';

function PaginationContainer() {
  const { page } = useSelector(state => state.settings);
  const totalResults = useSelector(state => state.appData.totalResults);
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(page)

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    dispatch(setSettings({ page: pageNumber }))
  }

  useEffect(() => {
    setActivePage(page);
  }, [page])

  return (
    <Pagination 
      hideDisabled
      activePage={activePage}
      itemsCountPerPage={20}
      totalItemsCount={totalResults}
      pageRangeDisplayed={10}
      onChange={handlePageChange}
    />
  );
}

export default PaginationContainer;
