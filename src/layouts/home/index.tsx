import styles from './styles.module.css';
import Link from 'next/link';
import { Genre, Movie } from '@server/models';
import { MovieCard, SearchMovies } from '@components';
import Pagination from './pagination';

interface Props {
  movies: Movie[];
  genres: Genre[];
  query?: string;
  totalPages: number;
  page: number;
}

export default function HomePage({
  movies,
  genres,
  totalPages,
  query,
  page,
}: Props) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-content']}>
        <div className={styles['wrapper-search']}>
          <SearchMovies />
        </div>
        <div className={styles['wrapper-cards']}>
          {query && movies.length === 0 && (
            <h1
              className={styles['message-not-movies']}
            >{`Não encontramos resultados para "${query}"`}</h1>
          )}
          {movies.map((movie) => (
            <Link
              href={`/movie/${movie.id}`}
              key={movie.id}
              style={{ textDecoration: 'none' }}
            >
              <MovieCard
                movie={movie}
                genres={genres.filter((genre) =>
                  movie.genreIds.includes(genre.id)
                )}
              />
            </Link>
          ))}
        </div>
      </div>
      <Pagination totalPages={totalPages} query={query} page={page} />
    </div>
  );
}
