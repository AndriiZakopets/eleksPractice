import Catalog from '../components/Catalog';
import API from '../API';
import actions from '../actions/reducerActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TRENDING = 'trending';
const POPULAR = 'popular';
const TOP = 'top';
const SEARCH = 'search';

const REQUEST_MAP = {
  [TRENDING]: API.getTrending,
  [POPULAR]: API.getPopular,
  [TOP]: API.getTopRated,
  [SEARCH]: API.getMovieByQuery
}

export default function CatalogContainer({ history }) {
  const data = useSelector(state => state.appData.data);
  const dataById = useSelector(state => state.appData.dataById);
  const settings = useSelector(state => state.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    const { searchQuery, sorting, page } = settings;
    const requstFuncKey = searchQuery.trim() ? SEARCH : sorting;
    const requestFunc = REQUEST_MAP[requstFuncKey];

    localStorage.setItem('page', page);
    localStorage.setItem('sorting', sorting);

    requestFunc(settings)
    .then(({total_pages, results}) => {
      dispatch(actions.setData(results));
      dispatch(actions.setTotalPages(total_pages));

      const additionalDataById = results.reduce((res, curr) => {
        res[curr.id] = curr;
        return res;
      }, {});

      dispatch(actions.setDataById({
        ...dataById,
        ...additionalDataById
      }));
    })
    .catch(error => {
      console.log(error);
    })
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
