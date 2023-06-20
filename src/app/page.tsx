import { moviesApi } from '@api';
import HomePage from '@layouts/home';

export const metadata = {
  title: 'Movies',
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const { page, query }: { page?: string; query?: string } = searchParams ?? {};
  const currentPage = page ? +page : 1;

  const genres = await moviesApi.getGenres();
  const data = await moviesApi.getAll(page, query);

  const start = (currentPage - 1) * 5 - (data.page - 1) * 20;
  const end = currentPage * 5 - (data.page - 1) * 20;
  return (
    <HomePage
      movies={data.movies.slice(start, end)}
      genres={genres}
      totalPages={data.totalPages}
      query={query}
      page={currentPage}
    />
  );
}
