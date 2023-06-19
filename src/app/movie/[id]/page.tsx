import Movie from '@layouts/movie';

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <Movie />;
}
