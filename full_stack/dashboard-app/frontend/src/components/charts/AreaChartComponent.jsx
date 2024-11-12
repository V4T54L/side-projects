import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = ({data}) => {
  // const data = [
  //   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  //   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  //   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  //   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  //   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
