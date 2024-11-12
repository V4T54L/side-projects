import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent = ({data}) => {
  // const data = [
  //   { name: "Category A", value: 4000 },
  //   { name: "Category B", value: 3000 },
  //   { name: "Category C", value: 2000 },
  //   { name: "Category D", value: 2780 },
  //   { name: "Category E", value: 1890 },
  // ];

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartComponent;
