import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BubbleChartComponent = ({ data }) => {
  // const data = [
  //   { x: 1, y: 1, z: 10 },
  //   { x: 2, y: 3, z: 30 },
  //   { x: 3, y: 2, z: 20 },
  //   { x: 4, y: 5, z: 40 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="X Axis" />
        <YAxis type="number" dataKey="y" name="Y Axis" />
        <Tooltip />
        <Scatter data={data} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleChartComponent;
