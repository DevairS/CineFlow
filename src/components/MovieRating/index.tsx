import { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  rating: string;
  className?: string;
};

const MovieRating: FC<Props> = ({ rating, className }) => {
  return (
    <div className={styles['details-vote'] + ' ' + className}>
      <span className={styles['details-vote-number']}>{rating}</span>
    </div>
  );
};

export default MovieRating;
