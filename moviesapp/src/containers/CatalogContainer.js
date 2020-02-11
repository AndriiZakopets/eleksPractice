import Catalog from '../components/Catalog';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByQuery, discoverMovies } from '../actions/asyncActions';
import { addWatchlistMovie } from '../actions/WatchListActions';

export default function CatalogContainer({ history, match }) {
  const settings = useSelector(state => state.settings);
  const { data } = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    const { searchQuery, sorting, page } = settings;
    const requestAction = searchQuery.trim() ? getMovieByQuery : discoverMovies;
    
    localStorage.setItem('page', JSON.stringify({ data: page }));
    localStorage.setItem('sorting', JSON.stringify({ data: sorting }));
    dispatch(requestAction(settings));
  }, [settings]);

  const redirect = id => {
    history.push(`${match.path}/${id}`);
  }

  const getRoute = id => `${match.path}/${id}`;

  const addToWatchList = movie => {
    dispatch(addWatchlistMovie(movie));
  }

  return (
    <Catalog
      data={data}
      redirect={redirect}
      getRoute={getRoute}
      addToWatchList={addToWatchList}
    />
  )
}
