import { movieApi } from "@/api";
import { MainLayout } from "@/components/Layout";
import { CastList } from "@/components/ui";
import { castPerson, movie } from "@/interfaces";
import getCastInfo from "@/utils/getCastInfo";
import getMovieInfo from "@/utils/getMovieInfo";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

interface Props {
  movie: movie;
  cast: castPerson[];
}

const MoviePage: NextPage<Props> = ({ movie, cast }) => {

  return (
    <MainLayout>
      <main>
        <div
          className="relative bg-fixed bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(60, 60, 60, 0.9), rgba(60, 60, 60, 0.9)), url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          }}
        >
          <div className="flex flex-col md:lg:flex-row lg:flex-row p-10">
            <div className="basis-1/4">
              <Image
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={500}
                className="max-width auto-height rounded-lg md:py-8 md:px-4 sm:p-24"
              />
            </div>
            <div className="basis-3/4 grid content-center">
              <div className="flex justify-between">
                <div>
                  {" "}
                  <h1 className="text-2xl text-white">{movie.title}</h1>
                  <p className="text-slate-200">{movie.release_date}</p>
                </div>
                <div>
                  <p className="text-5xl text-white">{movie.vote_average}</p>
                </div>
              </div>
              <h2 className="text-xl mt-10 text-white">Overview</h2>
              <p className="text-base text-white p-5">{movie.overview}</p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h3 className="text-lg font-bold">Top Billed Cast</h3>
          <CastList cast={cast} />
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

  const cast = await getCastInfo(movie.id);

  return {
    props: {
      movie,
      //Return just the first 10
      cast: cast.cast.slice(0, 10),
    },
  };
};

export default MoviePage;
