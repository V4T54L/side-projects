const randomDashboard = [
  {
    index: 1,
    type: "area",
    data: [
      { name: "January", uv: 3500, pv: 2800, amt: 2500 },
      { name: "February", uv: 4000, pv: 2200, amt: 2700 },
      { name: "March", uv: 4500, pv: 3000, amt: 2900 },
      { name: "April", uv: 5000, pv: 3400, amt: 3200 },
      { name: "May", uv: 5700, pv: 3900, amt: 3600 },
    ],
  },
  {
    index: 2,
    type: "bar",
    data: [
      { name: "Product A", value: 2000 },
      { name: "Product B", value: 4000 },
      { name: "Product C", value: 3000 },
      { name: "Product D", value: 2500 },
      { name: "Product E", value: 3500 },
    ],
  },
  {
    index: 3,
    type: "line",
    data: [
      { name: "Day 1", uv: 1200, pv: 700 },
      { name: "Day 2", uv: 1300, pv: 800 },
      { name: "Day 3", uv: 1400, pv: 900 },
      { name: "Day 4", uv: 1600, pv: 1100 },
      { name: "Day 5", uv: 2000, pv: 1300 },
      { name: "Day 6", uv: 2200, pv: 1500 },
      { name: "Day 7", uv: 2400, pv: 1700 },
    ],
  },
  {
    index: 4,
    type: "pie",
    data: [
      { name: "Category X", value: 100 },
      { name: "Category Y", value: 200 },
      { name: "Category Z", value: 300 },
      { name: "Category W", value: 400 },
    ],
  },
  {
    index: 5,
    type: "funnel",
    data: [
      { name: "Visit", value: 10000 },
      { name: "Sign Up", value: 6500 },
      { name: "Payment", value: 3000 },
      { name: "Confirmation", value: 1500 },
    ],
  },
  {
    index: 6,
    type: "radar",
    data: [
      { subject: "Sales", A: 150, B: 130, fullMark: 200 },
      { subject: "Marketing", A: 120, B: 110, fullMark: 200 },
      { subject: "Development", A: 170, B: 100, fullMark: 200 },
      { subject: "Support", A: 90, B: 80, fullMark: 200 },
      { subject: "Management", A: 100, B: 130, fullMark: 200 },
    ],
  },
  {
    index: 7,
    type: "bubble",
    data: [
      { x: 10, y: 10, z: 5 },
      { x: 20, y: 30, z: 10 },
      { x: 30, y: 20, z: 20 },
      { x: 40, y: 50, z: 30 },
      { x: 50, y: 40, z: 40 },
    ],
  },
  {
    index: 8,
    type: "scatter",
    data: [
      { x: 1, y: 1, z: 5 },
      { x: 2, y: 3, z: 15 },
      { x: 3, y: 2, z: 10 },
      { x: 4, y: 5, z: 20 },
      { x: 5, y: 6, z: 25 },
    ],
  },
  {
    index: 9,
    type: "radial",
    data: [
      { name: "Metric 1", uv: 40, fill: "#0088FE" },
      { name: "Metric 2", uv: 60, fill: "#00C49F" },
      { name: "Metric 3", uv: 80, fill: "#FFBB28" },
      { name: "Metric 4", uv: 100, fill: "#FF8042" },
    ],
  },
  {
    index: 10,
    type: "treemap",
    data: [
      { name: "Group 1", size: 600 },
      { name: "Group 2", size: 300 },
      { name: "Group 3", size: 200 },
      { name: "Group 4", size: 100 },
      { name: "Group 5", size: 50 },
    ],
  },
  {
    index: 11,
    type: "stackedBar",
    data: [
      { name: "Series 1", value1: 3000, value2: 1500 },
      { name: "Series 2", value1: 2500, value2: 2000 },
      { name: "Series 3", value1: 2000, value2: 1800 },
      { name: "Series 4", value1: 1500, value2: 1000 },
      { name: "Series 5", value1: 1000, value2: 500 },
    ],
  },
  {
    index: 12,
    type: "gantt",
    data: [
      { task: "Planning", start: 1, duration: 3 },
      { task: "Execution", start: 4, duration: 5 },
      { task: "Closure", start: 10, duration: 2 },
    ],
  },
  {
    index: 13,
    type: "candlestick",
    data: [
      { date: "2023-01-01", open: 150, close: 170, high: 180, low: 140 },
      { date: "2023-01-02", open: 170, close: 160, high: 190, low: 150 },
      { date: "2023-01-03", open: 160, close: 180, high: 200, low: 155 },
    ],
  },
  {
    index: 14,
    type: "slope",
    data: [
      { name: "2023", groupA: 1500, groupB: 1300 },
      { name: "2024", groupA: 2000, groupB: 2200 },
      { name: "2025", groupA: 2500, groupB: 2700 },
    ],
  },
  {
    index: 15,
    type: "smallMultiples",
    data: {
      dataGroup1: [
        { name: "Q1", uv: 2000 },
        { name: "Q2", uv: 3000 },
        { name: "Q3", uv: 4000 },
      ],
      dataGroup2: [
        { name: "Q1", uv: 1500 },
        { name: "Q2", uv: 2500 },
        { name: "Q3", uv: 3500 },
      ],
    },
  },
  {
    index: 16,
    type: "step",
    data: [
      { name: "Step 1", value: 100 },
      { name: "Step 2", value: 200 },
      { name: "Step 3", value: 300 },
      { name: "Step 4", value: 400 },
    ],
  },
  {
    index: 17,
    type: "funnel",
    data: [
      { name: "Initiated", value: 8000 },
      { name: "Contacted", value: 6000 },
      { name: "Proposal", value: 3000 },
      { name: "Negotiation", value: 1000 },
    ],
  },
  {
    index: 18,
    type: "area",
    data: [
      { name: "Product X", uv: 3000, pv: 2000, amt: 1800 },
      { name: "Product Y", uv: 4000, pv: 3000, amt: 2600 },
      { name: "Product Z", uv: 3500, pv: 2200, amt: 2400 },
    ],
  },
  {
    index: 19,
    type: "radar",
    data: [
      { subject: "Q1", A: 120, B: 110, fullMark: 150 },
      { subject: "Q2", A: 130, B: 125, fullMark: 150 },
      { subject: "Q3", A: 140, B: 130, fullMark: 150 },
    ],
  },
  {
    index: 20,
    type: "bubble",
    data: [
      { x: 5, y: 10, z: 15 },
      { x: 10, y: 20, z: 25 },
      { x: 15, y: 30, z: 35 },
    ],
  },
];

export default randomDashboard;
