import { describe, it } from 'vitest';
import { VideoFromApi } from '@server/models';
import MoviesMappers from '../../movies.mapper';

describe('mapMovieVideoFromApi', () => {
  const moviesMappers = new MoviesMappers();
  it('should return the correct video URL when there is a matching video', () => {
    const videosFromApi: VideoFromApi[] = [
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Trailer',
        key: 'video1',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: true,
        published_at: '2023-06-20',
        id: '1',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Outro Tipo',
        key: 'video2',
        site: 'YouTube',
        size: 720,
        type: 'OutroTipo',
        official: true,
        published_at: '2023-06-20',
        id: '2',
      },
    ];

    const result = moviesMappers.mapMovieVideoFromApi(videosFromApi);

    expect(result).toBe('https://www.youtube.com/embed/video1');
  });

  it('should return undefined when there is no matching video', () => {
    const videosFromApi: VideoFromApi[] = [];

    const result = moviesMappers.mapMovieVideoFromApi(videosFromApi);

    expect(result).toBeUndefined();
  });

  it('Should return undefined when the input does not meet the requirements', () => {
    const videosFromApi: VideoFromApi[] = [
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Movie',
        key: 'video1',
        site: 'YouTube',
        size: 1080,
        type: 'Movie',
        official: true,
        published_at: '2023-06-20',
        id: '1',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Outro Tipo',
        key: 'video2',
        site: 'YouTube',
        size: 720,
        type: 'Movie',
        official: true,
        published_at: '2023-06-20',
        id: '2',
      },
    ];

    const result = moviesMappers.mapMovieVideoFromApi(videosFromApi);

    expect(result).toBeUndefined();
  });
});
