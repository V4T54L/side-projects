import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RadialBarChartComponent = ({ data }) => {
  // const data = [
  //   { name: 'A', uv: 60, fill: '#0088FE' },
  //   { name: 'B', uv: 70, fill: '#00C49F' },
  //   { name: 'C', uv: 80, fill: '#FFBB28' },
  //   { name: 'D', uv: 90, fill: '#FF8042' },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadialBarChart
        cx={200}
        cy={200}
        innerRadius={20}
        outerRadius={140}
        data={data}
      >
        <RadialBar minAngle={15} label background clockWise dataKey="uv" />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartComponent;
