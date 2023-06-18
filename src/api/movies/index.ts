import { Movie, moviesMappers } from '@server/models';
import { clientApi } from '../config';

export const getAll = async (): Promise<Movie[]> => {
  const data = await clientApi.get('movies', {
    next: {
      revalidate: 30,
    },
  });
  return moviesMappers.mapMoviesFromApi(data.results);
};

export const getOne = async (id: number) => {
  const data = await clientApi.get(`movies/${id}`);
  return data;
};

export const getGenres = async () => {
  const data = await clientApi.get('movies/genres');
  return moviesMappers.mapGenresFromApi(data);
};
