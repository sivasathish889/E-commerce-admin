import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useState } from "react";

const RevenueGraph = () => {
  const [graphData, setGraphData] = useState([
    {
      name: "Page A",
      amt: 1400,
    },
    {
      name: "Page B",
      amt: 1506,
    },
    {
      name: "Page C",
      amt: 989,
    },
    {
      name: "Page D",
      amt: 1228,
    },
    {
      name: "Page E",
      amt: 1100,
    },
    {
      name: "Page F",
      amt: 1700,
    },
  ]);
  return (
    <>
      <p className="text-xs md:text-sm font-bold ">Monthly Revenue</p>
      <p className="text-xs md:text-sm opacity-65">
        Revenue breakdown by month
      </p>
      <ComposedChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 0.918,
        }}
        responsive
        data={graphData}
        margin={{
          top: 20,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="amt"  barSize={30} fill="#8884d8" radius={[10, 10, 0, 0]} />
        <Line type="monotone" dataKey="amt" stroke="#ff7300" />
        <RechartsDevtools />
      </ComposedChart>
    </>
  );
};

export default RevenueGraph;
