import { movieApi } from "@/api";

const getCastInfo = async (id: number) => {
  const { data } = await movieApi.get(`/movie/${id}/credits?language=en-US`);

  return {
    ...data,
  };
};

export default getCastInfo;
