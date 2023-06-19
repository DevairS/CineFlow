import { Genre, Movie } from '@server/models';
import styles from './styles.module.css';
import { FC } from 'react';
import MovieGenres from '../MovieGenres';
import ImageComponent from '../Image';
import MovieRating from '../MovieRating';

type Props = {
  movie: Movie;
  genres: Genre[];
};

const MovieCard: FC<Props> = ({ movie, genres }) => {
  return (
    <div className={styles['wrapper']}>
      <ImageComponent
        src={movie.path}
        alt={movie.title}
        width={180}
        height={280}
      />
      <div className={styles['wrapper-details']}>
        <div className={styles['wrapper-details-header']}>
          <div className={styles['details-vote']}>
            <MovieRating rating={movie.rating} size='70px' />
          </div>
          <div className={styles['wrapper-details-content']}>
            <span className={styles['details-title']}>{movie.title}</span>
            <span className={styles['details-release-date']}>
              {movie.releaseDate}
            </span>
          </div>
        </div>
        <div className={styles['wrapper-details-texts']}>
          <p className={styles['details-description']}>{movie.description}</p>
          <MovieGenres genres={genres} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
