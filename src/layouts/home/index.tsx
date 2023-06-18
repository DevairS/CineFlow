import { Genre, Movie } from '@server/models';
import styles from './styles.module.css';
import { MovieCard, SearchMovies } from '@components';

interface Props {
  movies: Movie[];
  genres: Genre[];
}

export default function HomePage({ movies, genres }: Props) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-content']}>
        <div className={styles['wrapper-search']}>
          <SearchMovies />
        </div>
        <div className={styles['wrapper-cards']}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              genres={genres.filter((genre) =>
                movie.genreIds.includes(genre.id)
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
