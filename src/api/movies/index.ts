import {
  Genre,
  Movie,
  MovieDetails,
  MoviesInfos,
  moviesMappers,
} from '@server/models';
import { clientApi } from '../config';

export const getAll = async (
  page: string,
  query: string
): Promise<{ infos: MoviesInfos; movies: Movie[] }> => {
  const data = await clientApi.get(
    `movies?page=${page}${query ? `&query=${query}` : ''}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const infos = {
    page: data.page,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
  const movies = moviesMappers.mapMoviesFromApi(data.results);

  return { infos, movies };
};

export const getOne = async (id: string): Promise<MovieDetails> => {
  const data = await clientApi.get(`movies/${id}`);
  return moviesMappers.mapMovieDetailsFromApi(data);
};

export const getGenres = async (): Promise<Genre[]> => {
  const data = await clientApi.get('movies/genres');
  return moviesMappers.mapGenresFromApi(data);
};

export const getVideosByMovieId = async (
  id: string
): Promise<string | undefined> => {
  const data = await clientApi.get(`movies/${id}/videos`);
  return moviesMappers.mapMovieVideoFromApi(data);
};
