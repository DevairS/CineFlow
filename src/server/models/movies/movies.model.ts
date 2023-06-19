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

export type MoviesInfos = {
  page: number;
  totalPages: number;
  totalResults: number;
};
