import { movie } from "@/interfaces";
import { FC } from "react";
import { MovieCard } from "./MovieCard";
interface Props {
  movies: movie[];
}
export const MoviesList: FC<Props> = ({ movies }) => {
  return (
    <section className="basis-3/4 grid md:grid-cols-2 gap-8 p-8 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.poster_path} />
      ))}
    </section>
  );
};
