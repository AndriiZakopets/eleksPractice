import React, { useEffect } from 'react';
import CatalogItem from '../components/CatalogItem';
import { getMovieById } from '../actions/asyncActions';
import { useSelector, useDispatch } from 'react-redux';

function CatalogItemContainer(props) {
  const id = props.match.params.id;
  const dataById = useSelector(state => state.appData.dataById);
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

export default React.memo(CatalogItemContainer);
