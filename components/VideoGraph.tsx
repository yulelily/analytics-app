import { format } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

ChartJS.defaults.color = "Black";

interface VideoGraphProps {
  title: string;
  updatedAt: string[];
  viewCount: string[];
  likeCount: string[];
  commentCount: string[];
}

const VideoGraph: React.FC<VideoGraphProps> = ({
  title,
  updatedAt,
  viewCount,
  likeCount,
  commentCount,
}) => {
  const [display, setDisplay] = useState(false);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${title}`,
      },
    },
  };

  const labels = useMemo(() => {
    return updatedAt.map((t: string) => {
      return format(new Date(t), "PP");
    });
  }, [updatedAt]);

  const dataViews = useMemo(() => {
    return {
      labels: labels.map((data) => data),
      datasets: [
        {
          label: "Views",
          data: viewCount.map((data) => data),
          borderColor: "DeepSkyBlue",
          backgroundColor: "DeepSkyBlue",
        },
      ],
    };
  }, [labels, viewCount]);

  const dataLikes = useMemo(() => {
    return {
      labels: labels.map((data) => data),
      datasets: [
        {
          label: "Likes",
          data: likeCount.map((data) => data),
          borderColor: "Plum",
          backgroundColor: "Plum",
        },
      ],
    };
  }, [labels, likeCount]);

  const dataComments = useMemo(() => {
    return {
      labels: labels.map((data) => data),
      datasets: [
        {
          label: "Comments",
          data: commentCount.map((data) => data),
          borderColor: "PaleVioletRed",
          backgroundColor: "PaleVioletRed",
        },
      ],
    };
  }, [labels, commentCount]);

  const onClick = useCallback(
    (e: any) => {
      e.stopPropagation();

      if (display) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
    },
    [display],
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        type="button"
        onClick={(e) => onClick(e)}
        className="cursor-pointer bg-rose-50 py-1 px-3 rounded-md"
      >
        {display ? "Hide" : "View Graphs"}
      </button>
      <div className="w-11/12">
        {display && <Line options={options} data={dataViews} />}
      </div>
      <div className="w-11/12">
        {display && <Line options={options} data={dataLikes} />}
      </div>
      <div className="w-11/12">
        {display && <Line options={options} data={dataComments} />}
      </div>
    </div>
  );
};

export default VideoGraph;
