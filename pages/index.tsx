import { movieApi } from "@/api";
import { MainLayout } from "@/components/Layout";
import { Aside, MoviesList } from "@/components/ui";
import { movie, moviesList } from "@/interfaces";
import { GetStaticProps, NextPage } from "next";

interface Props {
  movies: movie[];
}

const Home: NextPage<Props> = ({ movies }) => {
  return (
    <MainLayout>
      <main className="flex sm:flex-column lg:flex-row gap-x-8">
        <Aside />
        <MoviesList movies={movies} />
      </main>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await movieApi.get("movie/popular");
  const { data: genreData } = await movieApi.get("/genre/movie/list");
  const genres = genreData.genres;

  const movies = data.results.map((movie: movie) => ({
    ...movie,
    genders: movie.genre_ids.map(
      (numero) =>
        genres.find((object: { id: number; "": any }) => object.id === numero)
          .name
    ),
  }));

  return {
    props: {
      movies,
    },
  };
};

export default Home;
