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
    <div>
      <div className="flex-shrink-0">
        {/* next.js Image is blurry... */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>published at: {publishedAt}</p>
        <p>views: {maxViewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
