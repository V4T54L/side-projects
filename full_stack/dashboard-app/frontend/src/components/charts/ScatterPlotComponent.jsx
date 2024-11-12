import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ScatterPlotComponent = ({data}) => {
  // const data = [
  //   { x: 4000, y: 2400, z: 10 },
  //   { x: 3000, y: 2210, z: 10 },
  //   { x: 2000, y: 2290, z: 10 },
  //   { x: 2780, y: 2000, z: 10 },
  //   { x: 1890, y: 4800, z: 10 },
  // ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis dataKey="x" name="X Axis" />
        <YAxis dataKey="y" name="Y Axis" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="A Series" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterPlotComponent;