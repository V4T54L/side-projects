import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

const RadarChartComponent = ({ data }) => {
  // const data = [
  //   { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  //   { subject: 'Chinese', A: 130, B: 120, fullMark: 150 },
  //   { subject: 'English', A: 80, B: 130, fullMark: 150 },
  //   { subject: 'Geography', A: 70, B: 110, fullMark: 150 },
  //   { subject: 'Physics', A: 110, B: 100, fullMark: 150 },
  // ];

  return (
    <RadarChart outerRadius={90} width={400} height={400} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Student A"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Student B"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Tooltip />
    </RadarChart>
  );
};

export default RadarChartComponent;
