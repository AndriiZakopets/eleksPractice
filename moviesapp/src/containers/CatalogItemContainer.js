import React, { useEffect } from 'react';
import CatalogItem from '../components/CatalogItem';
import { getMovieById } from '../actions/asyncActions';
import { useSelector, useDispatch } from 'react-redux';

export default function CatalogItemContainer(props) {
  const { dataById } = useSelector(state => state.movies);
  const id = props.match.params.id;
  
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id, dataById[id])
    if (!dataById[id]) {
      dispatch(getMovieById(id))
    }
  }, [id]);

  return (
    <CatalogItem
      movie={dataById[id]}
    />
  )
}