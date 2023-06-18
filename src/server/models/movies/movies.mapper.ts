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
        posterPath: movieFromApi.poster_path,
        releaseDate: this.convertDateToCorrectFormat(movieFromApi.release_date),
        voteAverage: movieFromApi.vote_average,
        voteCount: movieFromApi.vote_count,
        genreIds: movieFromApi.genre_ids,
      };
    });
  }

  mapGenresFromApi(genresFromApi: { genres: Genre[] }): Genre[] {
    return genresFromApi.genres;
  }
}
