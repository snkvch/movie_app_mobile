import axiosInstance from './axiosInstance';

async function getMoviesFetch(textInput?: string) {
  const defaultMovie = 'Friends';
  const movie = textInput || defaultMovie;
  const response = await axiosInstance.get(`${movie}&type=movie`);
  return response;
}

export default getMoviesFetch;
