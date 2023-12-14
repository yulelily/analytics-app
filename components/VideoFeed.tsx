import VideoCard from "@/components/VideoCard";
import useVideos from "@/hooks/useVideos";

export default function VideoFeed() {
  const { data: videos, error } = useVideos();

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!videos) {
    return <p>Loading</p>;
  }

  return (
    <>
      {videos.map((vid: Record<string, any>) => (
        <VideoCard
          key={vid.videoId}
          publishedAt={vid.publishedAt}
          title={vid.title}
          thumbnail={vid.thumbnail}
          maxViewCount={vid.maxViewCount}
        />
      ))}
    </>
  );
}
