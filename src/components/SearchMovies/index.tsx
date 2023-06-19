'use client';
import { FC, KeyboardEvent } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const SearchMovies: FC = () => {
  const router = useRouter();

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/?page=1&query=${e.currentTarget.value}`);
    }
  };

  return (
    <input
      type='text'
      placeholder='Busque um filme por nome, ano ou gênero...'
      className={styles.input}
      onKeyUp={handlePressEnter}
    />
  );
};

export default SearchMovies;
