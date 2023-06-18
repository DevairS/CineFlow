import { Genre } from '@server/models';
import { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  genres: Genre[];
};
const MovieGenres: FC<Props> = ({ genres }) => {
  return (
    <div className={styles['wrapper']}>
      {genres.map((genre) => (
        <div key={genre.id} className={styles['tag']}>
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default MovieGenres;
