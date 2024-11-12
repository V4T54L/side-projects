import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StackedBarChartComponent = ({data}) => {
  // const data = [
  //   { name: "A", value1: 4000, value2: 2400 },
  //   { name: "B", value1: 3000, value2: 2210 },
  //   { name: "C", value1: 2000, value2: 2290 },
  //   { name: "D", value1: 2780, value2: 2000 },
  //   { name: "E", value1: 1890, value2: 4800 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value1" fill="#8884d8" stackId="a" />
        <Bar dataKey="value2" fill="#82ca9d" stackId="a" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChartComponent;
