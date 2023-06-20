import { describe, it } from 'vitest';
import MoviesMappers from '../../movies.mapper';
import { MovieDetails, MovieDetailsFromApi } from '@server/models';

describe('mapMoviesFromApi', () => {
  const moviesMappers = new MoviesMappers();

  it('should correctly map the movie details from the API response', () => {
    const movieFromApi: MovieDetailsFromApi = {
      adult: false,
      backdrop_path: '/6l1SV3CWkbbe0DcAK1lyOG8aZ4K.jpg',
      belongs_to_collection: {
        id: 9485,
        name: 'Velozes & Furiosos: Coleção',
        poster_path: '/zQdytnqfsWKJlqazqfMBL2L7aql.jpg',
        backdrop_path: '/z5A5W3WYJc3UVEWljSGwdjDgQ0j.jpg',
      },
      budget: 340000000,
      genres: [
        { id: 28, name: 'Ação' },
        { id: 80, name: 'Crime' },
        { id: 53, name: 'Thriller' },
      ],
      homepage: 'https://www.universalpics.com.br/micro/fast-x',
      id: 385687,
      imdb_id: 'tt5433140',
      original_language: 'en',
      original_title: 'Fast X',
      overview:
        'Ao longo de muitas missões e contra probabilidades impossíveis, Dom Toretto e sua família foram mais espertos, mais nervosos e superaram todos os inimigos em seu caminho. Agora, eles enfrentam o oponente mais letal que já enfrentaram: uma ameaça terrível emergindo das sombras do passado, alimentada por vingança de sangue e determinada a destruir esta família e destruir tudo - e todos - que Dom ama, para sempre. .',
      popularity: 8893.249,
      poster_path: '/4CWoalqAsRzXD9AFbByD1KnH40E.jpg',
      production_companies: [
        {
          id: 33,
          logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
          name: 'Universal Pictures',
          origin_country: 'US',
        },
        {
          id: 333,
          logo_path: '/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png',
          name: 'Original Film',
          origin_country: 'US',
        },
        {
          id: 1225,
          logo_path: '/rIxhJMR7oK8b2fMakmTfRLY2TZv.png',
          name: 'One Race',
          origin_country: 'US',
        },
        {
          id: 34530,
          logo_path: null,
          name: 'Perfect Storm Entertainment',
          origin_country: 'US',
        },
      ],
      production_countries: [
        { iso_3166_1: 'US', name: 'United States of America' },
      ],
      release_date: '2023-05-17',
      revenue: 686700000,
      runtime: 142,
      spoken_languages: [
        { english_name: 'Italian', iso_639_1: 'it', name: 'Italiano' },
        { english_name: 'Portuguese', iso_639_1: 'pt', name: 'Português' },
        { english_name: 'Spanish', iso_639_1: 'es', name: 'Español' },
      ],
      status: 'Released',
      tagline: 'O fim da estrada está chegando.',
      title: 'Velozes & Furiosos 10',
      video: false,
      vote_average: 7.35,
      vote_count: 1792,
      videos: [],
      genre_ids: [],
    };

    const expectedOutput: MovieDetails = {
      id: 385687,
      title: 'Velozes & Furiosos 10',
      description:
        'Ao longo de muitas missões e contra probabilidades impossíveis, Dom Toretto e sua família foram mais espertos, mais nervosos e superaram todos os inimigos em seu caminho. Agora, eles enfrentam o oponente mais letal que já enfrentaram: uma ameaça terrível emergindo das sombras do passado, alimentada por vingança de sangue e determinada a destruir esta família e destruir tudo - e todos - que Dom ama, para sempre. .',
      path: 'https://image.tmdb.org/t/p/w500/4CWoalqAsRzXD9AFbByD1KnH40E.jpg',
      releaseDate: '17/05/2023',
      rating: '70%',
      genres: [
        { id: 28, name: 'Ação' },
        { id: 80, name: 'Crime' },
        { id: 53, name: 'Thriller' },
      ],
      genreIds: [28, 80, 53],
      duration: '2h 22min',
      budget: '$340.000.000,00',
      revenue: '$686.700.000,00',
      profit: '$346.700.000,00',
      originalLanguage: 'en',
      status: 'Released',
    };

    const result = moviesMappers.mapMovieDetailsFromApi(movieFromApi);

    expect(result).toEqual(expectedOutput);
  });
});
