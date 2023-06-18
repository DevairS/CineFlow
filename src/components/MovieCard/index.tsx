import { Genre, Movie } from '@server/models';
import styles from './styles.module.css';
import Image from 'next/image';
import { FC } from 'react';
import MovieGenres from '../MovieGenres';

type Props = {
  movie: Movie;
  genres: Genre[];
};

const MovieCard: FC<Props> = ({ movie, genres }) => {
  const loaderImage = ({ src }: { src: string }) => {
    return `https://image.tmdb.org/t/p/original${src}`;
  };
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-imagem']}>
        <Image
          loader={loaderImage}
          src={movie.posterPath}
          alt='filme'
          width={180}
          height={280}
        />
      </div>
      <div className={styles['wrapper-details']}>
        <div className={styles['wrapper-details-header']}>
          <div className={styles['details-vote']}>
            <span className={styles['details-vote-number']}>
              {movie.voteAverage * 10}%
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
