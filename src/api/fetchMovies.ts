import { AxiosResponse } from 'axios';
import { IMovies } from '../redux/movies/types';
import axiosInstance from './axiosInstance';

async function getMoviesFetch(
  textInput: string,
): Promise<AxiosResponse<IMovies[]>> {
  const defaultMovie = 'Friends';
  const movie = defaultMovie || textInput;
  const response = await axiosInstance.get(`${movie}&type=movie`);
  return response;
}

export default getMoviesFetch;
