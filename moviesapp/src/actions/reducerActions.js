export default {
  setData(data) {
    return {
      type: 'SET_DATA',
      data
    }
  },
  setDataById(dataById) {
    return {
      type: 'SET_DATA_BY_ID',
      dataById
    }
  },
  setTotalPages(totalPages) {
    return {
      type: 'SET_TOTAL_PAGES',
      totalPages
    }
  },
  setSettings(settings) {
    return {
      type: 'SET_SETTINGS',
      settings
    }
  },
  setTempSearchQuery(tempSearchQuery) {
    return {
      type: 'SET_TEMP_SEARCH_QUERY',
      tempSearchQuery
    }
  }
}