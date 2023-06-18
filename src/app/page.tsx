import { moviesApi } from '@api';
import HomePage from '@layouts/home';

export default async function Home() {
  const movies = await moviesApi.getAll();
  const genres = await moviesApi.getGenres();
  return <HomePage movies={movies} genres={genres} />;
}
