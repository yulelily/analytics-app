import { format } from "date-fns";

interface VideoCardProps {
  publishedAt: string;
  title: string;
  thumbnail: string;
  maxViewCount: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  publishedAt,
  title,
  thumbnail,
  maxViewCount,
}) => {
  return (
    <div className="grid justify-center items-center gap-4 w-full text-center">
      <h1 className="text-2xl text-semibold">{title}</h1>
      <div className="flex-shrink-0 flex justify-center items-center">
        {/* next.js Image is blurry... */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-[480px]" src={thumbnail} alt="thumbnail" />
      </div>
      <div className="flex flex-col justify-center items-center py-1">
        <p>Publish Date: {format(new Date(publishedAt), "MMM d, y")}</p>
        <p>Total Views: {maxViewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
