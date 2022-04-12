import axios from 'axios';

import {
  REACT_APP_API_BASE,
  REACT_APP_API_KEY,
} from '../utils/constants/imdbId';

const axiosInstance = axios.create({
  baseURL: `${REACT_APP_API_BASE}/?apiKey=${REACT_APP_API_KEY}&`,
});

export default axiosInstance;
