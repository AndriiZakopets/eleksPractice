import axios from 'axios';

const api_key = '4f7b4e11c29b41270f152fa71698f126';

export default {
  async getDetails(id) {
    try {
      console.log('getDetails');
      return (await axios.get(`https://api.themoviedb.org/3/movie/${id}`, { params: { api_key } })).data;
    } catch(error) {
      throw error;
    }
  },
  async getPopular(page = 1) {
    try {
      console.log('getPopular');
      return (await axios.get(`https://api.themoviedb.org/3/movie/popular`, { params: { api_key, page } })).data;
    } catch(error) {
      throw error;
    }
  },
  async getTopRated(page = 1) {
    try {
      console.log('getTopRated');
      return (await axios.get(`https://api.themoviedb.org/3/movie/top_rated`, { params: { api_key, page } })).data;
    } catch(error) {
      throw error;
    }
  },
  async getTrending(page = 1) {
    try {
      console.log('getTrending');
      return (await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, { params: { api_key, page } })).data;
    } catch(error) {
      throw error;
    }
  },
  async getMovieByQuery(page = 1, query) {
    try {
      console.log('getMovieByQuery');
      return (await axios.get(`https://api.themoviedb.org/3/search/movie`, { params: { api_key, page, query } })).data;
    } catch(error) {
      throw error;
    }
  }
}