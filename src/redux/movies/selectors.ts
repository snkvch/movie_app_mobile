import { RootState } from '../store';

const getAllMovies = ({ movies }: RootState) => movies.movies;
const watchlistSelector = ({ movies }: RootState) => movies.watchlist;

export { getAllMovies, watchlistSelector };
