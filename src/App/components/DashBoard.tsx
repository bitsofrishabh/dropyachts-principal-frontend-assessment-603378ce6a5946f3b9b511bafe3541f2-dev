import React, { useEffect, useState } from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Line } from "react-chartjs-2";
import dataSet from "../../data/data";
import { FaChartArea, FaChartPie } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  //   responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
const labels = [
  "1/01/2020",
  "2/01/2020",
  "3/01/2020",
  "4/01/2020",
  "5/01/2020",
  "6/01/2020",
  "7/01/2020",
  "8/01/2020",
  "9/01/2020",
  "10/01/2020",
  "11/01/2020",
  "12/01/2020",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Clicks",
      data: dataSet.map((e) => e.clicks),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Impressions",
      data: dataSet.map((e) => e.impressions),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalImpressions, setTotalImpressions] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [chartData, setChartData] = useState([
    {
      label: "Clicks",
      data: dataSet.map((e) => e.clicks),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Impressions",
      data: dataSet.map((e) => e.impressions),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ]);

  const changeData = () => {
    const result = dataSet.filter(
      (e) => new Date(e.date) > startDate && new Date(e.date) < endDate
    );
    console.log("result", result);
    const total = result.reduce(
      (acc, item) => acc + parseInt(item.impressions),
      0
    );
    const clicks = result.reduce((acc, item) => acc + parseInt(item.clicks), 0);
    setChartData([
      {
        label: "Clicks",
        data: result.map((e) => e.clicks),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Impressions",
        data: result.map((e) => e.impressions),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ]);
    setTotalClicks(clicks);
    setTotalImpressions(total);
    console.log(totalImpressions, totalClicks);
    console.log(endDate);
  };

  // useEffect(() => {

  //   const newData = {
  //     labels: [
  //       "2023-01-01",
  //       "2023-01-02",
  //       "2023-01-03",
  //       "2023-01-04",
  //       "2023-01-05",
  //     ],
  //     datasets: [
  //       {
  //         ...data.datasets[0],
  //         data: [10, 20, 15, 25, 30],
  //       },
  //     ],
  //   };
  //   setChartData(newData);
  // }, [startDate, endDate]);

  return (
    <div className="ml-10">
      <div className="flex justify-start mt-4">
        <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="border p-2 mr-2"
        />
        <DatePicker
          selected={endDate}
          onChange={(date: any) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="border p-2"
        />
        <button
          className="bg-[#8A2BE2] ml-10 w-40 rounded-md text-xl font-serif"
          onClick={changeData}
        >
          Submit
        </button>
      </div>
      <div className="flex">
        <div className="border-black mt-3 bg-white w-1/4 shadow-lg ">
          <div className="mb-4 ml-2">
            <FaChartArea
              style={{ color: "#8A2BE2", fontSize: "30px", display: "inline" }}
            />
            <span className="font-semibold text-xl"> Total Clicks</span>
          </div>
          <div className="text-4xl font-bold ml-2">
            {totalClicks ? totalClicks : 0}
          </div>
        </div>
        <div className="border-black mt-3 ml-4 bg-white w-1/4 shadow-lg ">
          <div className="mb-4 ml-2">
            <FaChartPie
              style={{ color: "#8A2BE2", fontSize: "30px", display: "inline" }}
            />
            <span className="font-semibold text-xl"> Total Impressions</span>
          </div>
          <div className="text-4xl font-bold ml-2">
            {totalImpressions ? totalImpressions : 0}
          </div>
        </div>
      </div>
      <Line className="40vh" options={options} data={data} redraw={true} />
    </div>
  );
};

export default Dashboard;
