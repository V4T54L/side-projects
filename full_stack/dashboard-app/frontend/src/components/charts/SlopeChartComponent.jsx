import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SlopeChartComponent = ({ data }) => {
  // const data = [
  //   { name: "Year 1", groupA: 4000, groupB: 2400 },
  //   { name: "Year 2", groupA: 3000, groupB: 2210 },
  //   { name: "Year 3", groupA: 2000, groupB: 2290 },
  //   { name: "Year 4", groupA: 2780, groupB: 2000 },
  //   { name: "Year 5", groupA: 1890, groupB: 4800 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="groupA" stroke="#ff7300" />
        <Line type="monotone" dataKey="groupB" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SlopeChartComponent;
