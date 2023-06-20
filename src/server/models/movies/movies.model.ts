export interface VideoFromApi {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface MovieFromApi {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type Movie = {
  id: number;
  title: string;
  description: string;
  path: string;
  releaseDate: string;
  rating: string;
  genreIds: number[];
};

export type Genre = {
  id: number;
  name: string;
};

export type MoviesInfosFromApi = {
  page: number;
  total_pages: number;
  total_results: number;
};

export type MoviesInfos = {
  page: number;
  totalPages: number;
  totalResults: number;
};

export interface PaginationMovieFromApi extends MoviesInfosFromApi {
  results: MovieFromApi[];
}

export interface PaginationMovie extends MoviesInfos {
  apiPage: number;
  movies: Movie[];
}

export interface ProductionCompany {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailsFromApi extends MovieFromApi {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  videos: VideoFromApi[];
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  originalLanguage: string;
  duration: string;
  budget: string;
  revenue: string;
  profit: string;
  status: string;
}
