import { FC } from 'react';
import styles from './styles.module.css';

const SearchMovies: FC = () => {
  return (
    <input
      type='text'
      placeholder='Busque um filme por nome, ano ou gênero...'
      className={styles.input}
    />
  );
};

export default SearchMovies;
