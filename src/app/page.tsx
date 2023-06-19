import { moviesApi } from '@api';
import HomePage from '@layouts/home';

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const { page, query }: { page?: string; query?: string } = searchParams ?? {};

  const genres = await moviesApi.getGenres();
  const data = await moviesApi.getAll(page, query);

  return (
    <HomePage
      movies={data.movies}
      genres={genres}
      infos={data.infos}
      query={query}
    />
  );
}
