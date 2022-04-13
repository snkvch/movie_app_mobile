import axiosInstance from './axiosInstance';

export async function getMoviesFetch(textInput?: string) {
  const defaultMovie = 'Friends';
  const movie = textInput || defaultMovie;
  const response = await axiosInstance.get(`&s=${movie}&type=movie`);
  return response;
}

export async function getMovieDetailsFetch(imdbID: string) {
  const response = await axiosInstance.get(`&i=${imdbID}&Plot=full`);
  return response;
}
