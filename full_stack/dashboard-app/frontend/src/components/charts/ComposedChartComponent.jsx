import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ComposedChartComponent = ({ data }) => {
  // const data = [
  //   { name: "Jan", uv: 4000, pv: 2400 },
  //   { name: "Feb", uv: 3000, pv: 1398 },
  //   { name: "Mar", uv: 2000, pv: 9800 },
  //   { name: "Apr", uv: 2780, pv: 3908 },
  //   { name: "May", uv: 1890, pv: 4800 },
  // ];

  return (
    <ComposedChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" barSize={20} fill="#413EA0" />
      <Line type="monotone" dataKey="uv" stroke="#FF7300" />
    </ComposedChart>
  );
};

export default ComposedChartComponent;
