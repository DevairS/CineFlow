import styles from './styles.module.css';
import Link from 'next/link';
import { Genre, Movie, MoviesInfos } from '@server/models';
import { MovieCard, SearchMovies } from '@components';
import Pagination from './pagination';

interface Props {
  movies: Movie[];
  genres: Genre[];
  infos: MoviesInfos;
  query?: string;
}

export default function HomePage({ movies, genres, infos, query }: Props) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-content']}>
        <div className={styles['wrapper-search']}>
          <SearchMovies />
        </div>
        <div className={styles['wrapper-cards']}>
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
        <Pagination infos={infos} query={query} />
      </div>
    </div>
  );
}
