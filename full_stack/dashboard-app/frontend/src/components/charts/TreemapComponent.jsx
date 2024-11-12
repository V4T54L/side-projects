import React from "react";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

const TreemapComponent = ({ data }) => {
  // const data = [
  //   { name: 'Group A', size: 400 },
  //   { name: 'Group B', size: 300 },
  //   { name: 'Group C', size: 200 },
  //   { name: 'Group D', size: 100 },
  //   { name: 'Group E', size: 50 },
  // ];

  const formattedData = [
    {
      name: "Parent",
      children: data,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <Treemap
        data={formattedData}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      >
        <Tooltip />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default TreemapComponent;
