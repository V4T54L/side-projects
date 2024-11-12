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

const ParallelCoordinatesComponent = ({ data }) => {
  // const data = [
  //   { feature1: 1, feature2: 3 },
  //   { feature1: 2, feature2: 2 },
  //   { feature1: 3, feature2: 5 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="feature1" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="feature2" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ParallelCoordinatesComponent;
