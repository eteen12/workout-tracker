"use client";
import { useEffect, useState } from "react";

import { getWorkoutName, getSets } from "@/utils/setsDb";

// components/WorkoutChart.js
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const WorkoutChartPerSet = ({ workoutId }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [setsData, setSetsData] = useState([]);

  useEffect(() => {
    const fetchWorkoutName = async () => {
      const name = await getWorkoutName(workoutId);
      setWorkoutName(name);

      const sets = await getSets(workoutId);
      setSetsData(sets);
    };

    fetchWorkoutName();
  }, [workoutId]);
  const chartData = {
    labels: setsData.map((set) =>
      new Date(set.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    ),
    datasets: [
      {
        label: `${workoutName} Progress Per Set`,
        data: setsData.map((set) => set.weight),
        borderColor: "rgb(37 99 235)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default WorkoutChartPerSet;
