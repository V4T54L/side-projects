import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   { date: "2023-01-01", open: 100, close: 120, high: 130, low: 90 },
//   { date: "2023-01-02", open: 120, close: 100, high: 140, low: 95 },
//   { date: "2023-01-03", open: 100, close: 130, high: 135, low: 90 },
// ];

const CandlestickChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="close" fill="#82ca9d" />
        <Bar dataKey="open" fill="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChartComponent;
