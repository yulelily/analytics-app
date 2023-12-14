import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useVideos = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/videos`,
    fetcher,
  );

  return { data, error, isLoading, mutate };
};

export default useVideos;
