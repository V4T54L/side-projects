import React, { useEffect, useState } from "react";
import { CreateDashboard, GetComponents } from "../api/newDashboard";
import { useNavigate } from "react-router-dom";

const NewDashboard = () => {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState({
    name: "Default Dashboard",
    charts: [{ component_id: 0, chartName: "", data: [] }],
  });

  const [components, setComponents] = useState([
    {
      id: 0,
      name: "component_name",
      field: {
        name: "string",
        value: "int",
      },
      example: [
        { name: "Category A", value: 4000 },
        { name: "Category B", value: 3000 },
      ],
    },
  ]);

  const [chartName, setChartName] = useState("Chart Name");
  const [component, setComponent] = useState({
    id: 0,
    name: "component_name",
    field: {
      name: "string",
      value: "int",
    },
    example: [
      { name: "Category A", value: 4000 },
      { name: "Category B", value: 3000 },
    ],
  });

  const [chartData, setChartData] = useState("");

  useEffect(() => {
    (async () => {
      const data = await GetComponents();
      if (data && data.length > 0) {
        setComponents(data);
        setComponent(data[0]);
      }
    })();
    setDashboard({ ...dashboard, charts: [] });
  }, []);

  function submitDashboard() {
    if (dashboard.charts.length <= 0) {
      return;
    }
    CreateDashboard(dashboard)
      .then((respStatus) => {
        console.log("Dashboard created :", respStatus);
      })
      .catch((err) => {
        console.error("Error creating dashboard : ", err);
      });
      navigate("/");
  }

  return (
    <div className="bg-background p-6 rounded-lg shadow-lg">
    <h1 className="font-heading text-2xl text-primary font-bold mb-4">New Dashboard</h1>
  
    <div className="mb-4">
      <label className="block text-muted mb-1" htmlFor="dashboard-name">Dashboard Name:</label>
      <input
        id="dashboard-name"
        className="border-2 border-slate-500 rounded-md px-3 py-2 w-full"
        value={dashboard.name}
        onChange={(e) => setDashboard({ ...dashboard, name: e.target.value })}
      />
    </div>
  
    <div className="w-full max-w-xl flex flex-col md:flex-row justify-between mb-4">
      <select
        className="border-2 border-slate-500 rounded-md px-3 py-2 w-full md:w-auto mb-2 md:mb-0"
        onChange={(e) => {
          setComponent(components[e.target.value]);
          setChartData("");
        }}
      >
        {components.map((e, idx) => (
          <option key={e.id} value={idx}>
            {e.name}
          </option>
        ))}
      </select>
  
      <input
        className="border-2 border-slate-500 rounded-md px-3 py-2 w-full md:w-auto mb-2 md:mb-0"
        value={chartName}
        onChange={(e) => setChartName(e.target.value)}
        placeholder="Chart Name"
      />
  
      <button
        className="bg-accent text-white rounded-md px-4 py-2 md:ml-2"
        onClick={() => {
          setChartData(JSON.stringify(component.example, null, 2));
        }}
      >
        Fill Example Value
      </button>
    </div>
  
    <div className="mb-4">
      <textarea
        className="w-full h-[50vh] border-2 border-slate-500 rounded-md p-2"
        placeholder={JSON.stringify(component.example, null, 2)}
        value={chartData}
        onChange={(e) => setChartData(e.target.value)}
      />
    </div>
  
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <button
        className="bg-green-100 text-green-800 border-2 border-green-800 rounded-full px-4 py-2 w-full md:w-auto"
        onClick={() => {
          if (chartData.length > 0) {
            setDashboard({
              ...dashboard,
              charts: [
                ...dashboard.charts,
                {
                  component_id: component.id,
                  name: chartName,
                  data: JSON.parse(chartData),
                },
              ],
            });
            setChartData("");
            setChartName("Default Chart Name");
          }
        }}
      >
        Add Chart to Dashboard
      </button>
  
      <button className="text-orange-600 bg-orange-100 border-2 border-orange-600 rounded-full px-4 py-2 w-full md:w-auto" onClick={submitDashboard}>
        Submit
      </button>
    </div>
  
    <div className="mt-6">
      {dashboard.charts.map((e, idx) => (
        <div key={idx} className="border-b border-muted py-2">
          <p className="text-text">{e.name}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default NewDashboard;
