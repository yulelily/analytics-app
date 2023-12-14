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
    <div className="flex justify-center items-center w-screen">
      <div className="grid h-full w-full justify-center items-center gap-4 my-[16px]">
        {videos.map((vid: Record<string, any>) => (
          <div
            key={vid.videoId}
            className="flex flex-col gap-4 w-full hover:bg-gradient-to-r from-fuchsia-100/50 to-teal-100/50 shadow-md py-8 px-8 border-2 border-white/50 rounded-lg"
          >
            <VideoCard
              publishedAt={vid.publishedAt}
              title={vid.title}
              thumbnail={vid.thumbnail}
              maxViewCount={vid.maxViewCount}
            />
            <VideoGraph
              title={vid.title}
              updatedAt={vid.updatedAt}
              viewCount={vid.viewCount}
              likeCount={vid.likeCount}
              commentCount={vid.commentCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
