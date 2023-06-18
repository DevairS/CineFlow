import { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { MoviesInfos } from '@server/models';

type Props = {
  infos: MoviesInfos;
};

const Pagination: FC<Props> = ({ infos }) => {
  const pages = [];
  const numPagesNavigation = 5;
  const currentPage = infos.page;
  const totalPages = infos.totalPages;

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
          <Link className={styles['button-text']} href={`/?page=${page}`}>
            {page}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
