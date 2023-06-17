import { Movie } from '@server/models';
import styles from './styles.module.css';
import SearchMovies from '@components/SearchMovies';

interface Props {
  movies: Movie[];
}

export default function HomePage({ movies }: Props) {
  console.log(movies);
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-content']}>
        <div className={styles['wrapper-search']}>
          <SearchMovies />
        </div>
        <div>
          <h1>Home Page</h1>
        </div>
      </div>
    </div>
  );
}
