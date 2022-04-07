import { RootState } from '../store';

const getAllMovies = ({ movies }: RootState) => movies.movies;

export default getAllMovies;
