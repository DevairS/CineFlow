import { FC } from 'react';
import {
  ImageComponent,
  MovieGenres,
  MovieRating,
  VideoPlayer,
} from '@components';
import styles from './styles.module.css';
import { MovieDetails } from '@server/models';

type Props = {
  movie: MovieDetails;
  video?: string;
};

const Movie: FC<Props> = ({ movie, video }) => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-details']}>
        <header className={styles['wrapper-header']}>
          <span className={styles['movie-title']}>{movie.title}</span>
          <span className={styles['movie-release-date']}>
            {movie.releaseDate}
          </span>
        </header>
        <div className={styles['wrapper-details-content']}>
          <div className={styles['wrapper-sections']}>
            <div
              className={
                styles['wrapper-section'] +
                ' ' +
                styles['wrapper-section-with-image']
              }
            >
              <div>
                <div className={styles['section-title']}>Sinopse</div>
                <p className={styles['section-description']}>
                  {movie.description}
                </p>
              </div>
              <div className={styles['wrapper-image-section']}>
                <ImageComponent
                  src={movie.path}
                  alt={movie.title}
                  width={280}
                  height={390}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className={styles['wrapper-section']}>
              <span className={styles['section-title']}>Informações</span>
              <ul className={styles['section-list']}>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Situação</p>
                  <p className={styles['section-description']}>
                    {movie.status === 'Released' ? 'Lançado' : 'Produção'}
                  </p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Idioma</p>
                  <p className={styles['section-description']}>2h 10m</p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Duração</p>
                  <p className={styles['section-description']}>
                    {movie.duration}
                  </p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Orçamento</p>
                  <p className={styles['section-description']}>
                    {movie.budget}
                  </p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Receita</p>
                  <p className={styles['section-description']}>
                    {movie.revenue}
                  </p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Lucro</p>
                  <p className={styles['section-description']}>
                    {movie.profit}
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles['wrapper-details-bottom']}>
              <div className={styles['details-bottom']}>
                <MovieGenres genres={movie.genres} />
                <MovieRating
                  rating={movie.rating}
                  className={styles['rating']}
                />
              </div>
            </div>
          </div>
          <div className={styles['wrapper-image']}>
            <ImageComponent
              src={movie.path}
              alt={movie.title}
              width={280}
              height={390}
            />
          </div>
        </div>
      </div>
      {video && <VideoPlayer src={video} className={styles['youtube-video']} />}
    </div>
  );
};

export default Movie;
