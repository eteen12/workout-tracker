"use client";
import { useEffect, useState } from "react";
import { getWorkoutName, getSets } from "@/utils/setsDb";
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
  Colors,
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

const WorkoutChartPerDay = ({ workoutId, refreshedSets }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [setsData, setSetsData] = useState([]);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      const name = await getWorkoutName(workoutId);
      setWorkoutName(name);

      const sets = await getSets(workoutId);

      const groupedData = sets.reduce((acc, set) => {
        const dateKey = new Date(set.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });

        if (!acc[dateKey]) {
          acc[dateKey] = { totalWeight: 0, count: 0 };
        }

        acc[dateKey].totalWeight += Number(set.weight);
        acc[dateKey].count += 1;

        return acc;
      }, {});

      const averagedSets = Object.keys(groupedData).map((date) => ({
        date,
        avgWeight: groupedData[date].totalWeight / groupedData[date].count,
      }));

      setSetsData(averagedSets);
    };

    fetchWorkoutData();
  }, [workoutId, refreshedSets]);

  const chartData = {
    labels: setsData.map((set) => set.date),
    datasets: [
      {
        label: `${workoutName} Progress (Avg per Day)`,
        data: setsData.map((set) => set.avgWeight),
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
        grid: {
          color: "gray",
        },
        ticks: {
          color: "white",
        },
        border: {
          color: "gray",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default WorkoutChartPerDay;
