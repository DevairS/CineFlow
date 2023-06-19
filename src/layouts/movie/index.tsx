import { FC } from 'react';
import { ImageComponent, MovieGenres, MovieRating } from '@components';
import styles from './styles.module.css';

const Movie: FC = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-details']}>
        <header className={styles['wrapper-header']}>
          <span className={styles['movie-title']}>Thor: Ragnorok</span>
          <span className={styles['movie-release-date']}>25/10/2017</span>
        </header>
        <div className={styles['wrapper-details-content']}>
          <div className={styles['wrapper-sections']}>
            <div className={styles['wrapper-section']}>
              <span className={styles['section-title']}>Sinopse</span>
              <p className={styles['section-description']}>
                Against his father Odins will, The Mighty Thor - a powerful but
                arrogant warrior god - recklessly reignites an ancient war. Thor
                is cast down to Earth and forced to live among humans as
                punishment. Once here, Thor learns what it takes to be a true
                hero when the most dangerous villain of his world sends the
                darkest forces of Asgard to invade Earth.
              </p>
            </div>
            <div className={styles['wrapper-section']}>
              <span className={styles['section-title']}>Informações</span>
              <ul className={styles['section-list']}>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Estreia</p>
                  <p className={styles['section-description']}>25/10/2017</p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Duração</p>
                  <p className={styles['section-description']}>2h 10m</p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Gênero</p>
                  <p className={styles['section-description']}>ação</p>
                </li>
                <li className={styles['section-list-item']}>
                  <p className={styles['section-title']}>Classificação</p>
                  <p className={styles['section-description']}>12 anos</p>
                </li>
              </ul>
            </div>
            <div className={styles['wrapper-details-bottom']}>
              <div className={styles['details-bottom']}>
                <MovieGenres
                  genres={[
                    { id: 1, name: 'Ação' },
                    { id: 1, name: 'Ação' },
                    { id: 1, name: 'Ação' },
                  ]}
                />
                <MovieRating rating='75%' size='100px' />
              </div>
            </div>
          </div>
          <ImageComponent
            src='https://image.tmdb.org/t/p/w500/1wOu8rdvPxU1ObHi20VcRhfNpbo.jpg'
            alt='Thor: Ragnorok'
            width={280}
            height={390}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
