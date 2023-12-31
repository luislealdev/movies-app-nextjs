import { movie } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface Props {
  movie: movie;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  
  return (
    <Link href={`movie/${movie.title.toLowerCase().replace(" ", "+")}`}>
      <div className="bg-slate-50 flex flex-col drop-shadow-md rounded-lg md:hover:scale-110">
        <div className="object-contain">
          <Image
            width={100}
            height={100}
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="rounded-t-lg object-contain max-width auto-height"
          />
        </div>
        <div className="p-2">
          <h6 className="font-sans text-sm font-bold">{movie.title}</h6>
          <p className="font-sans text-sm text-slate-400">
            {movie.release_date}
          </p>
          <p className="font-sans text-sm">
            Calif: <b>{movie.vote_average}</b>
          </p>
          <br />
          <p className="font-sans text-sm font-bold">Genres</p>
          <ul>
            {movie.genders.map((genre) => (
              <li key={genre} className="font-sans text-sm">
                · {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};
