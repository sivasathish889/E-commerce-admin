import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useState } from "react";

const SalesChart = () => {
  const [chartData, setChartData] = useState([
    { name: "Page A", uv: 723 },
    { name: "Page B", uv: 3000 },
    { name: "Page C", uv: 2000 },
    { name: "Page D", uv: 2780 },
    { name: "Page E", uv: 1890 },
    { name: "Page F", uv: 2390 },
  ]);
  return (
    <>
      <p className="text-xs md:text-sm font-bold">Sales Performance</p>
      <p className="text-xs md:text-sm opacity-65">Monthly sales performance</p>
      <LineChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 0.918,
        }}
        responsive
        data={chartData}
        margin={{
          top: 20,
          right: 30, 
          bottom: 20, 
          left: 20, 
        }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          type="bumpX"
          dataKey="uv"
          stroke="purple"
          strokeWidth={2}
          name="Month"
        />
        <XAxis
          dataKey="name"
          style={{ fontSize: 12 }}
          width={20}
          tick={{ fontSize: 10 }} // Reduced font size
          interval="preserveStartEnd" // Ensures first and last ticks are shown
          tickMargin={5} // Added margin between ticks and axis
        />
        <YAxis width="auto"  />
        <Legend align="right" />
        <Tooltip />
        <RechartsDevtools />
      </LineChart>
    </>
  );
};

export default SalesChart;
