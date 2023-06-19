import { moviesApi } from '@api';
import Movie from '@layouts/movie';

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [movie, video] = await Promise.all([
    moviesApi.getOne(id),
    moviesApi.getVideosByMovieId(id),
  ]);
  return <Movie movie={movie} video={video} />;
}
