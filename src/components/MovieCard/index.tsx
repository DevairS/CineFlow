import { Genre, Movie } from '@server/models';
import styles from './styles.module.css';
import { FC } from 'react';
import MovieGenres from '../MovieGenres';
import ImageComponent from '../Image';

type Props = {
  movie: Movie;
  genres: Genre[];
};

const MovieCard: FC<Props> = ({ movie, genres }) => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-imagem']}>
        <ImageComponent
          src={`https://image.tmdb.org/t/p/w500${movie.path}`}
          alt={movie.title}
          width={180}
          height={280}
        />
      </div>
      <div className={styles['wrapper-details']}>
        <div className={styles['wrapper-details-header']}>
          <div className={styles['details-vote']}>
            <span className={styles['details-vote-number']}>
              {movie.rating}
            </span>
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
