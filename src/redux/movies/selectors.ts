import { StoreState } from '../rootReducer';
import { IMovies } from './types';

const getAllMovies = ({ movies }: StoreState): { movies: IMovies[] } => ({
  movies,
});

export default getAllMovies;
