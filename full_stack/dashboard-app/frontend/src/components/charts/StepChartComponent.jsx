import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StepChartComponent = ({ data }) => {
  // const data = [
  //   { name: "January", value: 500 },
  //   { name: "February", value: 300 },
  //   { name: "March", value: 700 },
  //   { name: "April", value: 400 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="step" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StepChartComponent;
