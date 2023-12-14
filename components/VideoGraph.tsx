import { format } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface VideoGraphProps {
  updatedAt: string[];
  viewCount: string[];
  likeCount: string[];
  commentCount: string[];
}

const VideoGraph: React.FC<VideoGraphProps> = ({updatedAt, viewCount, likeCount, commentCount}) => {
  const [display, setDisplay] = useState(false);

  const labels = useMemo(() => {
    return updatedAt.map((t: string) => {
      return format(new Date(t), "MMM d, y")
    });
  }, [updatedAt]);

  const data = useMemo(() => {
    return {
      labels: labels.map((data) => data),
      datasets: [
        {
          label: "Views",
          data: viewCount.map((data) => data),
          borderColor: "DeepSkyBlue",
          backgroundColor: "LightSkyBlue"
          },
        {
          label: "Likes",
          data: likeCount.map((data) => data)
        },
        {
          label: "Comments",
          data: commentCount.map((data) => data)
        }
      ],

    }
  }, [labels, viewCount, likeCount, commentCount]);

  const onClick = useCallback((e: any) => {
    e.stopPropagation();

    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [display]);

  return (
    <div>
      <button type="button" onClick={(e) => onClick(e)} className="cursor-pointer bg-rose-50 p-3 rounded-full" >View Graphs</button>
      {display && <Line data={data} />}
    </div>
  );
}

export default VideoGraph;