import { Movie, MoviesInfos, moviesMappers } from '@server/models';
import { clientApi } from '../config';

export const getAll = async (
  page: string
): Promise<{ infos: MoviesInfos; movies: Movie[] }> => {
  const data = await clientApi.get(`movies?page=${page}`, {
    next: {
      revalidate: 30,
    },
  });
  const infos = {
    page: data.page,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
  const movies = moviesMappers.mapMoviesFromApi(data.results);

  return { infos, movies };
};

export const getOne = async (id: number) => {
  const data = await clientApi.get(`movies/${id}`);
  return data;
};

export const getGenres = async () => {
  const data = await clientApi.get('movies/genres');
  return moviesMappers.mapGenresFromApi(data);
};
