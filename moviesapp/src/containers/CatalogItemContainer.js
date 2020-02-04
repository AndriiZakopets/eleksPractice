import React, { useState, useEffect } from 'react';
import CatalogItem from '../components/CatalogItem';
import API from '../API';
import { useSelector } from 'react-redux';

function CatalogItemContainer(props) {
  const id = props.match.params.id;
  const dataById = useSelector(state => state.dataById);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (dataById[id]) {
      setMovie({
        ...dataById[id]
      });
    } else {
      API.getDetails(id)
      .then(movie => {
        setMovie({ ...movie });
      });
    }
  }, [id]);

  return (
    <CatalogItem
        movie={movie}
    />
  );
}

export default React.memo(CatalogItemContainer);
