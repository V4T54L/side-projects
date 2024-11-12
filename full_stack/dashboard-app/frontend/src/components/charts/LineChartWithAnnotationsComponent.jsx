import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const LineChartWithAnnotationsComponent = ({ data }) => {
  // const data = [
  //   { name: 'Jan', value: 4000 },
  //   { name: 'Feb', value: 3000 },
  //   { name: 'Mar', value: 2000 },
  //   { name: 'Apr', value: 2780 },
  //   { name: 'May', value: 1890 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine x="Apr" stroke="red" label="Important Event" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartWithAnnotationsComponent;
