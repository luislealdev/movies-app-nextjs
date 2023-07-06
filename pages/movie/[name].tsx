import { movieApi } from "@/api";
import { movie } from "@/interfaces";
import getMovieInfo from "@/utils/getMovieInfo";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  movie: movie;
}

const MoviePage: NextPage<Props> = ({ movie }) => {
  console.log(movie);

  return <div>{movie.title}</div>;
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
