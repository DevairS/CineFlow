import { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  rating: string;
  size?: string;
  fontSize?: string;
};

const MovieRating: FC<Props> = ({ rating, size, fontSize }) => {
  return (
    <div
      className={styles['details-vote']}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <span className={styles['details-vote-number']} style={{ fontSize }}>
        {rating}
      </span>
    </div>
  );
};

export default MovieRating;
