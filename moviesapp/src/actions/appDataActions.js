export default {
  setFetching(fetching, fetched) {
    return {
      type: 'SET_FETCHING',
      payload: {
        isFetching: fetching,
        isFetched: fetched
      }
    }
  },

  setError(error) {
    return {
      type: 'SET_ERROR',
      payload: error
    }
  },
  
  setData({ data, totalResults }) {
    return {
      type: 'SET_DATA',
      payload: { data, totalResults }
    }
  },

  setDataById(dataById) {
    return {
      type: 'SET_DATA_BY_ID',
      payload: dataById
    }
  }
}