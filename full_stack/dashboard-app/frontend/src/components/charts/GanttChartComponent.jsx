import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const GanttChartComponent = ({ data }) => {
  // const data = [
  //   { task: "Task 1", start: 0, duration: 4 },
  //   { task: "Task 2", start: 2, duration: 3 },
  //   { task: "Task 3", start: 5, duration: 2 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="task" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="duration" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GanttChartComponent;
