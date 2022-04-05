import axios, { AxiosResponse } from 'axios';

import { IMovies } from '../redux/movies/types';
import {
  REACT_APP_API_BASE,
  REACT_APP_API_KEY,
} from '../utils/constants/imdbId';

function fetchMovies(textInput: string): Promise<AxiosResponse<IMovies[]>> {
  const defaultMovie = 'Friends';
  const movie = textInput || defaultMovie;
  return axios.request({
    method: 'get',
    url: `${REACT_APP_API_BASE}/?apiKey=${REACT_APP_API_KEY}&s=${movie}&type=movie`,
  });
}

export function fetchMovieDetails(imdbID: string) {
  return axios.get(
    `${REACT_APP_API_BASE}/?apiKey=${REACT_APP_API_KEY}&i=${imdbID}&Plot=full`,
  );
}

export default fetchMovies;
