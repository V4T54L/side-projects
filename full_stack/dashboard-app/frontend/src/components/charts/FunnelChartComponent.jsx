import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FunnelChartComponent = ({ data }) => {
  // const data = [
  //   { name: "Step 1", value: 4000 },
  //   { name: "Step 2", value: 3000 },
  //   { name: "Step 3", value: 2000 },
  //   { name: "Step 4", value: 1500 },
  //   { name: "Step 5", value: 1200 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FunnelChartComponent;
