import { describe, it } from 'vitest';
import MoviesMappers from '../../movies.mapper';
import { PaginationMovie, PaginationMovieFromApi } from '@server/models';

describe('mapMoviesFromApi', () => {
  const moviesMappers = new MoviesMappers();

  it('should correctly map the movies from the API response', () => {
    const data: PaginationMovieFromApi = {
      page: 1,
      total_pages: 3,
      total_results: 10,
      results: [
        {
          adult: false,
          backdrop_path: '/backdrop1.jpg',
          genre_ids: [1, 2, 3],
          id: 1,
          original_language: 'en',
          original_title: 'Movie 1',
          overview: 'Overview 1',
          popularity: 7.8,
          poster_path: '/poster1.jpg',
          release_date: '2022-01-01',
          title: 'Movie 1',
          video: false,
          vote_average: 7.6,
          vote_count: 100,
        },
        // More movie objects...
      ],
    };

    const expectedOutput: PaginationMovie = {
      apiPage: 1,
      page: 1,
      totalPages: 3,
      totalResults: 10,
      movies: [
        {
          id: 1,
          title: 'Movie 1',
          description: 'Overview 1',
          path: 'https://image.tmdb.org/t/p/w500/poster1.jpg',
          rating: '80%',
          releaseDate: '01/01/2022',
          genreIds: [1, 2, 3],
        },
        // More expected movie objects...
      ],
    };

    const result = moviesMappers.mapMoviesFromApi(data);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty movie array if no results are provided', () => {
    const data: PaginationMovieFromApi = {
      page: 1,
      total_pages: 1,
      total_results: 0,
      results: [],
    };

    const expectedOutput = {
      apiPage: 1,
      page: 1,
      totalPages: 1,
      totalResults: 0,
      movies: [],
    };

    const result = moviesMappers.mapMoviesFromApi(data);
    expect(result).toEqual(expectedOutput);
  });
});
