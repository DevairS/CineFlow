'use client';
import { FC, KeyboardEvent } from 'react';
import styles from './styles.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchMovies: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

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
      defaultValue={query || ''}
    />
  );
};

export default SearchMovies;
