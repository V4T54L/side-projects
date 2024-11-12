import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SmallMultiplesComponent = ({ data }) => {
  // const dataGroup1 = [
  //   { name: "Jan", uv: 4000 },
  //   { name: "Feb", uv: 3000 },
  //   { name: "Mar", uv: 2000 },
  // ];

  // const dataGroup2 = [
  //   { name: "Jan", uv: 3000 },
  //   { name: "Feb", uv: 2000 },
  //   { name: "Mar", uv: 1000 },
  // ];
  const dataGroup1 = data.dataGroup1;
  const dataGroup2 = data.dataGroup2;

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={dataGroup1}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={dataGroup2}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SmallMultiplesComponent;
