import MoviesMappers from './movies/movies.mapper';

export type {
  Movie,
  MovieFromApi,
  Genre,
  MoviesInfos,
  MovieDetailsFromApi,
  MovieDetails,
  VideoFromApi,
  PaginationMovie,
  PaginationMovieFromApi,
} from './movies/movies.model';
export const moviesMappers = new MoviesMappers();
