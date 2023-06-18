import { Genre, Movie, MovieFromApi } from './movies.model';

export default class MoviesMappers {
  convertDateToCorrectFormat(date: string): string {
    const dateParts = date.split('-');
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  }

  mapMoviesFromApi(moviesFromApi: MovieFromApi[]): Movie[] {
    return moviesFromApi.map((movieFromApi) => {
      return {
        id: movieFromApi.id,
        title: movieFromApi.title,
        description: movieFromApi.overview,
        path: movieFromApi.poster_path,
        releaseDate: this.convertDateToCorrectFormat(movieFromApi.release_date),
        rating: `${movieFromApi.vote_average * 10}%`,
        genreIds: movieFromApi.genre_ids,
      };
    });
  }

  mapGenresFromApi(genresFromApi: { genres: Genre[] }): Genre[] {
    return genresFromApi.genres;
  }
}
