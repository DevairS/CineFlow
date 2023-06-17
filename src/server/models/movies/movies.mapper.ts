import { Movie, MovieFromApi } from './movies.model';

export default class MoviesMappers {
  mapMoviesFromApi(moviesFromApi: MovieFromApi[]): Movie[] {
    return moviesFromApi.map((movieFromApi) => {
      return {
        id: movieFromApi.id,
        title: movieFromApi.title,
        posterPath: movieFromApi.poster_path,
        releaseDate: movieFromApi.release_date,
        voteAverage: movieFromApi.vote_average,
        voteCount: movieFromApi.vote_count,
      };
    });
  }
}
