import MoviesMappers from './movies/movies.mapper';

export type { Movie, MovieFromApi } from './movies/movies.model';
export const moviesMappers = new MoviesMappers();