import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useVideo = (videoId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    videoId ? `http://localhost:3000/api/videos/${videoId}` : null,
    fetcher,
  );

  return { data, error, isLoading, mutate };
};

export default useVideo;
