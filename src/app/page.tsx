import { moviesApi } from '@api';
import HomePage from '../layout/home';

export default async function Home() {
  const movies = await moviesApi.getAll();
  return <HomePage movies={movies} />;
}
