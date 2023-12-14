import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useVideos = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/videos`,
    fetcher,
  );

  return { data, error, isLoading, mutate };
};

export default useVideos;
