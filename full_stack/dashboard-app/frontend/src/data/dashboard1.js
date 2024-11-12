const dashboard = [
  {
    index: 1,
    type: "area",
    data: [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    ],
  },
  {
    index: 2,
    type: "bar",
    data: [
      { name: "Category A", value: 4000 },
      { name: "Category B", value: 3000 },
      { name: "Category C", value: 2000 },
      { name: "Category D", value: 2780 },
      { name: "Category E", value: 1890 },
    ],
  },
  {
    index: 3,
    type: "composed",
    data: [
      { name: "Jan", uv: 4000, pv: 2400 },
      { name: "Feb", uv: 3000, pv: 1398 },
      { name: "Mar", uv: 2000, pv: 9800 },
      { name: "Apr", uv: 2780, pv: 3908 },
      { name: "May", uv: 1890, pv: 4800 },
    ],
  },
  {
    index: 4,
    type: "funnel",
    data: [
      { name: "Step 1", value: 4000 },
      { name: "Step 2", value: 3000 },
      { name: "Step 3", value: 2000 },
      { name: "Step 4", value: 1500 },
      { name: "Step 5", value: 1200 },
    ],
  },
  {
    index: 5,
    type: "line",
    data: [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    ],
  },
  {
    index: 6,
    type: "pie",
    data: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
    ],
  },
  {
    index: 7,
    type: "radar",
    data: [
      { subject: "Math", A: 120, B: 110, fullMark: 150 },
      { subject: "Chinese", A: 130, B: 120, fullMark: 150 },
      { subject: "English", A: 80, B: 130, fullMark: 150 },
      { subject: "Geography", A: 70, B: 110, fullMark: 150 },
      { subject: "Physics", A: 110, B: 100, fullMark: 150 },
    ],
  },
  {
    index: 8,
    type: "scatter",
    data: [
      { x: 4000, y: 2400, z: 10 },
      { x: 3000, y: 2210, z: 10 },
      { x: 2000, y: 2290, z: 10 },
      { x: 2780, y: 2000, z: 10 },
      { x: 1890, y: 4800, z: 10 },
    ],
  },
  {
    index: 9,
    type: "treemap",
    data: [
      { name: "Group A", size: 400 },
      { name: "Group B", size: 300 },
      { name: "Group C", size: 200 },
      { name: "Group D", size: 100 },
      { name: "Group E", size: 50 },
    ],
  },
  {
    index: 10,
    type: "doughnut",
    data: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
    ],
  },
  {
    index: 11,
    type: "lineWithAnnotations",
    data: [
      { name: "Jan", value: 4000 },
      { name: "Feb", value: 3000 },
      { name: "Mar", value: 2000 },
      { name: "Apr", value: 2780 },
      { name: "May", value: 1890 },
    ],
  },
  {
    index: 12,
    type: "stackedBar",
    data: [
      { name: "A", value1: 4000, value2: 2400 },
      { name: "B", value1: 3000, value2: 2210 },
      { name: "C", value1: 2000, value2: 2290 },
      { name: "D", value1: 2780, value2: 2000 },
      { name: "E", value1: 1890, value2: 4800 },
    ],
  },
  {
    index: 13,
    type: "smallMultiples",
    data: {
      dataGroup1: [
        { name: "Jan", uv: 4000 },
        { name: "Feb", uv: 3000 },
        { name: "Mar", uv: 2000 },
      ],

      dataGroup2: [
        { name: "Jan", uv: 3000 },
        { name: "Feb", uv: 2000 },
        { name: "Mar", uv: 1000 },
      ],
    },
  },
  {
    index: 14,
    type: "slope",
    data: [
      { name: "Year 1", groupA: 4000, groupB: 2400 },
      { name: "Year 2", groupA: 3000, groupB: 2210 },
      { name: "Year 3", groupA: 2000, groupB: 2290 },
      { name: "Year 4", groupA: 2780, groupB: 2000 },
      { name: "Year 5", groupA: 1890, groupB: 4800 },
    ],
  },
  {
    index: 15,
    type: "gantt",
    data: [
      { task: "Task 1", start: 0, duration: 4 },
      { task: "Task 2", start: 2, duration: 3 },
      { task: "Task 3", start: 5, duration: 2 },
    ],
  },
  {
    index: 16,
    type: "candlestick",
    data: [
      { date: "2023-01-01", open: 100, close: 120, high: 130, low: 90 },
      { date: "2023-01-02", open: 120, close: 100, high: 140, low: 95 },
      { date: "2023-01-03", open: 100, close: 130, high: 135, low: 90 },
    ],
  },
  {
    index: 17,
    type: "bubble",
    data: [
      { x: 1, y: 1, z: 10 },
      { x: 2, y: 3, z: 30 },
      { x: 3, y: 2, z: 20 },
      { x: 4, y: 5, z: 40 },
    ],
  },
  {
    index: 18,
    type: "parallelCoordinates",
    data: [
      { feature1: 1, feature2: 3 },
      { feature1: 2, feature2: 2 },
      { feature1: 3, feature2: 5 },
    ],
  },
  {
    index: 19,
    type: "step",
    data: [
      { name: "January", value: 500 },
      { name: "February", value: 300 },
      { name: "March", value: 700 },
      { name: "April", value: 400 },
    ],
  },
  {
    index: 20,
    type: "radial",
    data: [
      { name: "A", uv: 60, fill: "#0088FE" },
      { name: "B", uv: 70, fill: "#00C49F" },
      { name: "C", uv: 80, fill: "#FFBB28" },
      { name: "D", uv: 90, fill: "#FF8042" },
    ],
  },
];

export default dashboard;
