import styles from './styles.module.css';
import { FC } from 'react';
import Link from 'next/link';

type Props = {
  query?: string;
  totalPages: number;
  page: number;
};

const Pagination: FC<Props> = ({ totalPages, query, page: currentPage }) => {
  const pages = [];
  const numPagesNavigation = 5;

  let pageStart = Math.max(1, currentPage - 2);
  const pageEnd = Math.min(pageStart + numPagesNavigation - 1, totalPages);

  if (pageEnd - pageStart + 1 < numPagesNavigation) {
    pageStart = Math.max(1, pageEnd - numPagesNavigation + 1);
  }

  for (let i = pageStart; i <= pageEnd; i++) {
    pages.push(i);
  }
  return (
    <div className={styles['wrapper-pagination']}>
      {pages.map((page) => (
        <div
          key={page}
          className={
            page === currentPage
              ? styles['button-active']
              : styles['button-pagination']
          }
        >
          {page === currentPage ? (
            <span className={styles['button-text']}>{page}</span>
          ) : (
            <Link
              className={styles['button-text']}
              href={{
                pathname: '/',
                query: { page: page, query: query },
              }}
            >
              {page}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
