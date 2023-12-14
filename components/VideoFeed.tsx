import VideoCard from "@/components/VideoCard";
import useVideos from "@/hooks/useVideos";
import VideoGraph from "./VideoGraph";

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
        <div key={vid.videoId} >
          <VideoCard
            publishedAt={vid.publishedAt}
            title={vid.title}
            thumbnail={vid.thumbnail}
            maxViewCount={vid.maxViewCount}
          />
          <VideoGraph updatedAt={vid.updatedAt} viewCount={vid.viewCount} likeCount={vid.likeCount} commentCount={vid.commentCount} />
        </div>
      ))}
    </>
  );
}
