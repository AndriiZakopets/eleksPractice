import Catalog from '../components/Catalog';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByQuery, discoverMovies } from '../actions/asyncActions';

export default function CatalogContainer({ history }) {
  const data = useSelector(state => state.appData.data);
  const settings = useSelector(state => state.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    const { searchQuery, sorting, page } = settings;
    const requestAction = searchQuery.trim() ? getMovieByQuery : discoverMovies;

    localStorage.setItem('page', page);
    localStorage.setItem('sorting', sorting);
    dispatch(requestAction(settings));
  }, [settings]);


  const redirect = id => {
    history.push(`catalog/${id}`);
  }

  return (
    <Catalog
      data={data}
      redirect={redirect}
    />
  )
}
