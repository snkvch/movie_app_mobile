import { RootState } from '../store';

const getMovieDetails = ({ details }: RootState) => details.details;

export default getMovieDetails;
