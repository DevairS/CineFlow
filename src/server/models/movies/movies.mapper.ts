import {
  convertDateToFormattedString,
  convertImagePathToURL,
  convertRantingToPorcentage,
  convertToDollarFormat,
  convertToHourMinute,
} from '@utils/formatters';
import {
  Genre,
  Movie,
  MovieDetails,
  MovieDetailsFromApi,
  MovieFromApi,
  VideoFromApi,
} from './movies.model';

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

  mapMovieDetailsFromApi(movieFromApi: MovieDetailsFromApi): MovieDetails {
    return {
      id: movieFromApi.id,
      title: movieFromApi.title,
      description: movieFromApi.overview,
      path: convertImagePathToURL(movieFromApi.poster_path),
      releaseDate: convertDateToFormattedString(movieFromApi.release_date),
      rating: convertRantingToPorcentage(movieFromApi.vote_average),
      genres: movieFromApi.genres,
      genreIds: movieFromApi.genres.map((genre) => genre.id),
      duration: convertToHourMinute(movieFromApi.runtime),
      budget: convertToDollarFormat(movieFromApi.budget),
      revenue: convertToDollarFormat(movieFromApi.revenue),
      profit: convertToDollarFormat(movieFromApi.revenue - movieFromApi.budget),
      originalLanguage: movieFromApi.original_language,
      status: movieFromApi.status,
    };
  }

  mapMovieVideoFromApi(videosFromApi: VideoFromApi[]): string | undefined {
    const video = (videosFromApi || []).find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return video && `https://www.youtube.com/embed/${video.key}`;
  }
}
