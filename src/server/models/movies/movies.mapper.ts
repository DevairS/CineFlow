import {
  convertDateToFormattedString,
  convertImagePathToURL,
  convertRantingToPorcentage,
} from '@utils/formatters';
import { Genre, Movie, MovieFromApi } from './movies.model';

export default class MoviesMappers {
  mapMoviesFromApi(moviesFromApi: MovieFromApi[]): Movie[] {
    return moviesFromApi.map((movieFromApi) => {
      return {
        id: movieFromApi.id,
        title: movieFromApi.title,
        description: movieFromApi.overview,
        path: convertImagePathToURL(movieFromApi.poster_path),
        releaseDate: convertDateToFormattedString(movieFromApi.release_date),
        rating: convertRantingToPorcentage(movieFromApi.vote_average),
        genreIds: movieFromApi.genre_ids,
      };
    });
  }

  mapGenresFromApi(genresFromApi: { genres: Genre[] }): Genre[] {
    return genresFromApi.genres;
  }
}
