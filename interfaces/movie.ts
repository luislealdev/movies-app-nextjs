export interface movie {
  genre_ids: number[];
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  genres: string[];
  backdrop_path: string;
  overview: string;
}

export interface moviesList {
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
}
