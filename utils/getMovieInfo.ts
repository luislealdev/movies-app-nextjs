import { movieApi } from "@/api";

const getMovieInfo = async (name: string) => {
  const { data } = await movieApi.get(`/search/movie?query=${name}`);

  return {
    ...data,
  };
};

export default getMovieInfo;
