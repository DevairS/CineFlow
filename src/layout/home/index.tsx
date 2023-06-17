import { Movie } from '@server/models';
import styles from './styles.module.css';

interface Props {
  movies: Movie[];
}

export default function HomePage({ movies }: Props) {
  console.log(movies);
  return <div className={styles['card-text']}>test teste teste lorem</div>;
}
