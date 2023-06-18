import { moviesApi } from '@api';
import HomePage from '@layouts/home';

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const { page } = searchParams || { page: '1' };

  const data = await moviesApi.getAll(page);
  const genres = await moviesApi.getGenres();

  return <HomePage movies={data.movies} genres={genres} infos={data.infos} />;
}
