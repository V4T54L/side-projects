const randomDashboard2 = [
  {
    index: 1,
    type: "area",
    data: [
      { name: "Page A", uv: 1500, pv: 1200, amt: 2400 },
      { name: "Page B", uv: 2500, pv: 1800, amt: 2210 },
      { name: "Page C", uv: 3200, pv: 1300, amt: 2290 },
      { name: "Page D", uv: 2800, pv: 2200, amt: 2000 },
      { name: "Page E", uv: 1900, pv: 2700, amt: 2181 },
    ],
  },
  {
    index: 2,
    type: "bar",
    data: [
      { name: "Category A", value: 3000 },
      { name: "Category B", value: 2900 },
      { name: "Category C", value: 3100 },
      { name: "Category D", value: 2150 },
      { name: "Category E", value: 1800 },
    ],
  },
  {
    index: 3,
    type: "line",
    data: [
      { name: "Week 1", uv: 4000, pv: 2400 },
      { name: "Week 2", uv: 3000, pv: 1398 },
      { name: "Week 3", uv: 2400, pv: 9800 },
      { name: "Week 4", uv: 2780, pv: 3900 },
      { name: "Week 5", uv: 1750, pv: 4800 },
    ],
  },
  {
    index: 4,
    type: "pie",
    data: [
      { name: "Segment A", value: 450 },
      { name: "Segment B", value: 250 },
      { name: "Segment C", value: 300 },
      { name: "Segment D", value: 150 },
    ],
  },
  {
    index: 5,
    type: "radar",
    data: [
      { subject: "Communication", A: 130, B: 110, fullMark: 150 },
      { subject: "Teamwork", A: 90, B: 140, fullMark: 150 },
      { subject: "Technical Skills", A: 110, B: 130, fullMark: 150 },
      { subject: "Problem-Solving", A: 120, B: 100, fullMark: 150 },
      { subject: "Creativity", A: 140, B: 115, fullMark: 150 },
    ],
  },
  {
    index: 6,
    type: "scatter",
    data: [
      { x: 5000, y: 3000, z: 20 },
      { x: 2000, y: 2100, z: 15 },
      { x: 1500, y: 1900, z: 30 },
      { x: 3000, y: 4000, z: 10 },
      { x: 3500, y: 2800, z: 25 },
    ],
  },
  {
    index: 7,
    type: "doughnut",
    data: [
      { name: "Group X", value: 400 },
      { name: "Group Y", value: 300 },
      { name: "Group Z", value: 200 },
    ],
  },
  {
    index: 8,
    type: "candlestick",
    data: [
      { date: "2023-01-01", open: 210, close: 240, high: 250, low: 200 },
      { date: "2023-01-02", open: 220, close: 230, high: 245, low: 215 },
      { date: "2023-01-03", open: 230, close: 225, high: 235, low: 200 },
    ],
  },
  {
    index: 9,
    type: "bubble",
    data: [
      { x: 2, y: 2, z: 15 },
      { x: 3, y: 6, z: 25 },
      { x: 5, y: 4, z: 30 },
      { x: 4, y: 3, z: 10 },
    ],
  },
  {
    index: 10,
    type: "stackedBar",
    data: [
      { name: "Product A", value1: 5000, value2: 3000 },
      { name: "Product B", value1: 4500, value2: 2200 },
      { name: "Product C", value1: 4000, value2: 4100 },
    ],
  },
  {
    index: 11,
    type: "slope",
    data: [
      { name: "Phase 1", groupA: 3000, groupB: 2500 },
      { name: "Phase 2", groupA: 3200, groupB: 2800 },
      { name: "Phase 3", groupA: 2600, groupB: 3100 },
    ],
  },
  {
    index: 12,
    type: "funnel",
    data: [
      { name: "Visit", value: 9000 },
      { name: "Sign Up", value: 4500 },
      { name: "Purchase", value: 3000 },
      { name: "Referral", value: 1500 },
    ],
  },
  {
    index: 13,
    type: "gantt",
    data: [
      { task: "Design Phase", start: 0, duration: 5 },
      { task: "Development Phase", start: 5, duration: 6 },
      { task: "Testing Phase", start: 10, duration: 4 },
    ],
  },
  {
    index: 14,
    type: "smallMultiples",
    data: {
      dataGroup1: [
        { name: "Apr", uv: 2500 },
        { name: "May", uv: 2700 },
        { name: "Jun", uv: 2900 },
      ],
      dataGroup2: [
        { name: "Apr", uv: 3000 },
        { name: "May", uv: 2000 },
        { name: "Jun", uv: 2300 },
      ],
    },
  },
  {
    index: 15,
    type: "parallelCoordinates",
    data: [
      { feature1: Math.random() * 10, feature2: Math.random() * 10 },
      { feature1: Math.random() * 10, feature2: Math.random() * 10 },
      { feature1: Math.random() * 10, feature2: Math.random() * 10 },
    ],
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
    type: "treemap",
    data: [
      { name: "Sector A", size: 500 },
      { name: "Sector B", size: 400 },
      { name: "Sector C", size: 300 },
      { name: "Sector D", size: 200 },
      { name: "Sector E", size: 100 },
    ],
  },
  {
    index: 18,
    type: "radial",
    data: [
      { name: "Metric 1", uv: 75, fill: "#8884d8" },
      { name: "Metric 2", uv: 65, fill: "#82ca9d" },
      { name: "Metric 3", uv: 85, fill: "#d0ed57" },
    ],
  },
  {
    index: 19,
    type: "multiAxis",
    data: [
      { category: "A", value1: 200, value2: 150 },
      { category: "B", value1: 300, value2: 250 },
      { category: "C", value1: 100, value2: 500 },
      { category: "D", value1: 400, value2: 350 },
    ],
  },
  {
    index: 20,
    type: "waterfall",
    data: [
      { name: "Start", value: 5000 },
      { name: "Net Income", value: 2000 },
      { name: "Expenses", value: -1500 },
      { name: "Final Total", value: 5500 },
    ],
  },
];

export default randomDashboard2;
