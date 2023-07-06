import { movieApi } from "@/api";
import { MainLayout } from "@/components/Layout";
import { movie } from "@/interfaces";
import getMovieInfo from "@/utils/getMovieInfo";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

interface Props {
  movie: movie;
}

const MoviePage: NextPage<Props> = ({ movie }) => {
  console.log(movie);

  return (
    <MainLayout>
      <main>
        <div
          className="md:flex sm:block bg-cover bg-center"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          }}
        >
          <div className="basis-1/4 ">
            <Image
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={500}
              className="max-width auto-height rounded-lg md:py-8 md:px-4 sm:p-24"
            />
          </div>
          <div className="basis-3/4 grid content-center">
            <h1 className="text-2xl text-white">{movie.title}</h1>
            <p>{movie.release_date}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await movieApi.get("/movie/popular");
  const results = data.results;

  return {
    paths: results.map((movie: movie) => ({
      params: { name: movie.title.toLowerCase().replace(" ", "+") },
    })),
    fallback: true, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const resp = await getMovieInfo(name);
  const movie = resp.results[0];

  return {
    props: {
      movie,
    },
  };
};

export default MoviePage;
