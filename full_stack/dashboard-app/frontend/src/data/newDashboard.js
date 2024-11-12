const newDashboard = [
  {
    index: 1,
    type: "line",
    data: [
      { name: "Week 1", uv: 4500, pv: 2400 },
      { name: "Week 2", uv: 3000, pv: 1800 },
      { name: "Week 3", uv: 5000, pv: 3200 },
      { name: "Week 4", uv: 7000, pv: 4600 },
      { name: "Week 5", uv: 6000, pv: 3100 },
    ],
  },
  {
    index: 2,
    type: "bar",
    data: [
      { name: "Item A", value: 3500 },
      { name: "Item B", value: 2500 },
      { name: "Item C", value: 4500 },
      { name: "Item D", value: 3200 },
      { name: "Item E", value: 2900 },
    ],
  },
  {
    index: 3,
    type: "area",
    data: [
      { name: "Q1", uv: 4200, pv: 2350 },
      { name: "Q2", uv: 3100, pv: 1500 },
      { name: "Q3", uv: 4800, pv: 3000 },
      { name: "Q4", uv: 5500, pv: 3800 },
    ],
  },
  {
    index: 4,
    type: "pie",
    data: [
      { name: "Sector 1", value: 550 },
      { name: "Sector 2", value: 400 },
      { name: "Sector 3", value: 150 },
      { name: "Sector 4", value: 720 },
    ],
  },
  {
    index: 5,
    type: "radar",
    data: [
      { subject: "Literature", A: 95, B: 85, fullMark: 100 },
      { subject: "History", A: 80, B: 90, fullMark: 100 },
      { subject: "Science", A: 85, B: 75, fullMark: 100 },
      { subject: "Art", A: 60, B: 80, fullMark: 100 },
    ],
  },
  {
    index: 6,
    type: "doughnut",
    data: [
      { name: "Group X", value: 450 },
      { name: "Group Y", value: 350 },
      { name: "Group Z", value: 200 },
      { name: "Group W", value: 100 },
    ],
  },
  {
    index: 7,
    type: "scatter",
    data: [
      { x: 1500, y: 3000, z: 15 },
      { x: 2500, y: 4000, z: 20 },
      { x: 3000, y: 5000, z: 25 },
      { x: 4000, y: 6000, z: 30 },
    ],
  },
  {
    index: 8,
    type: "bubble",
    data: [
      { x: 2, y: 5, z: 20 },
      { x: 3, y: 4, z: 30 },
      { x: 4, y: 7, z: 40 },
      { x: 5, y: 6, z: 50 },
    ],
  },
  {
    index: 9,
    type: "heatmap",
    data: [
      { day: "Monday", hour: "8 AM", value: 5 },
      { day: "Monday", hour: "9 AM", value: 10 },
      { day: "Tuesday", hour: "10 AM", value: 15 },
      { day: "Wednesday", hour: "11 AM", value: 20 },
      { day: "Thursday", hour: "12 PM", value: 25 },
      { day: "Friday", hour: "1 PM", value: 30 },
    ],
  },
  {
    index: 10,
    type: "funnel",
    data: [
      { name: "Visit", value: 8000 },
      { name: "Sign Up", value: 4000 },
      { name: "Payment", value: 2000 },
      { name: "Confirmation", value: 1200 },
    ],
  },
  {
    index: 11,
    type: "candlestick",
    data: [
      { date: "2023-02-01", open: 120, close: 140, high: 150, low: 115 },
      { date: "2023-02-02", open: 135, close: 125, high: 145, low: 120 },
      { date: "2023-02-03", open: 125, close: 155, high: 160, low: 120 },
    ],
  },
  {
    index: 12,
    type: "gantt",
    data: [
      { task: "Project A", start: 1, duration: 5 },
      { task: "Task B", start: 3, duration: 6 },
      { task: "Analysis C", start: 2, duration: 4 },
    ],
  },
  {
    index: 13,
    type: "step",
    data: [
      { name: "Step 1", value: 500 },
      { name: "Step 2", value: 600 },
      { name: "Step 3", value: 700 },
      { name: "Step 4", value: 800 },
    ],
  },
  {
    index: 14,
    type: "slope",
    data: [
      { name: "2019", groupA: 2000, groupB: 3000 },
      { name: "2020", groupA: 2500, groupB: 2200 },
      { name: "2021", groupA: 3000, groupB: 1800 },
      { name: "2022", groupA: 2700, groupB: 3200 },
    ],
  },
  {
    index: 15,
    type: "parallelCoordinates",
    data: [
      { metric1: 5, metric2: 7 },
      { metric1: 3, metric2: 4 },
      { metric1: 8, metric2: 2 },
    ],
  },
  {
    index: 16,
    type: "radial",
    data: [
      { name: "A", uv: 40, fill: "#0088FE" },
      { name: "B", uv: 70, fill: "#00C49F" },
      { name: "C", uv: 90, fill: "#FFBB28" },
      { name: "D", uv: 60, fill: "#FF8042" },
    ],
  },
  {
    index: 17,
    type: "treemap",
    data: [
      { name: "Module A", size: 600 },
      { name: "Module B", size: 400 },
      { name: "Module C", size: 500 },
      { name: "Module D", size: 300 },
    ],
  },
  {
    index: 18,
    type: "smallMultiples",
    data: {
      dataGroup1: [
        { name: "1st Quarter", value: 700 },
        { name: "2nd Quarter", value: 800 },
        { name: "3rd Quarter", value: 750 },
      ],
      dataGroup2: [
        { name: "1st Quarter", value: 600 },
        { name: "2nd Quarter", value: 400 },
        { name: "3rd Quarter", value: 500 },
      ],
    },
  },
  {
    index: 19,
    type: "stackedBar",
    data: [
      { name: "Region 1", sales: 4000, expenses: 2400 },
      { name: "Region 2", sales: 3000, expenses: 1400 },
      { name: "Region 3", sales: 2000, expenses: 1200 },
      { name: "Region 4", sales: 2780, expenses: 2100 },
    ],
  },
  {
    index: 20,
    type: "bubble",
    data: [
      { x: 1, y: 1, z: 15 },
      { x: 2, y: 5, z: 25 },
      { x: 3, y: 2, z: 30 },
      { x: 4, y: 3, z: 35 },
    ],
  },
];

export default newDashboard;
