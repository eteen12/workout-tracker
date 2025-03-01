"use client";
import { useEffect, useState } from "react";

import { getWorkoutName } from "@/utils/setsDb";

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

const WorkoutChart = ({ data, workoutId }) => {
  const [workoutName, setWorkoutName] = useState("");

  useEffect(() => {
    const fetchWorkoutName = async () => {
      const name = await getWorkoutName(workoutId);
      setWorkoutName(name);
    };

    fetchWorkoutName();
  }, [workoutId]);
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: `${workoutName} Progress`,
        data: data.weights, 
        borderColor: "rgba(75, 192, 192, 1)",
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

export default WorkoutChart;
