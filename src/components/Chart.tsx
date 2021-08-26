import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io("https://socket-test-aster.herokuapp.com/", {
  transports: ["websocket"],
});
interface IChart {
  chart: boolean;
  name: number;
  value: number;
}

import { Bar } from "react-chartjs-2";
const Chart = () => {
  const [data, setData] = useState<IChart[]>([]);
  useEffect(() => {
    socket.on("cpu", (res) => {
      setData((currentData) => [...currentData, res]);
    });
  }, []);
  const data2 = {
    labels: data.map((res) => {
      return res.name;
    }),

    datasets: [
      {
        label: "Value",
        data: data.map((res) => {
          return res.value;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-900">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Cpu Test
        </h4>

        <Bar data={data2} options={options} width={441} height={220} />
      </div>
    </>
  );
};

export default Chart;