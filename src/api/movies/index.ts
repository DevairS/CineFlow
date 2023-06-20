import {
  Genre,
  MovieDetails,
  PaginationMovie,
  moviesMappers,
} from '@server/models';
import { clientApi } from '../config';

export const getAll = async (
  page = '1',
  query: string
): Promise<PaginationMovie> => {
  const data = await clientApi.get(
    `movies?page=${page}${query ? `&query=${query}` : ''}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  return moviesMappers.mapMoviesFromApi(data);
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
