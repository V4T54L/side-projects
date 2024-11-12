import { useEffect, useState } from "react";
import { GetDashboards } from "../api/newDashboard";

const Homepage = () => {
  const [dashboards, setDashboards] = useState([
    { id: "", name: "", charts: [] },
  ]);

  useEffect(() => {
    (async () => {
      const data = await GetDashboards();
      setDashboards(data);
    })();
  }, []);
  return (
    <div className="m-4">
    {/* Title Section */}
    <h1 className="font-bold text-2xl mb-4">All Dashboards</h1>
    
    {/* Create New Dashboard Button */}
    <a 
      href="/new" 
      className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
    >
      Create New Dashboard
    </a>
  
    {/* Dashboards List */}
    <div className="flex flex-col space-y-4 py-6">
      {dashboards.map((dashboard) => (
        <div 
          key={dashboard.id} 
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-150"
        >
          <a href={`/${dashboard.id}`} className="block text-lg font-semibold text-primary hover:text-secondary">
            {dashboard.name}
          </a>
          <p className="text-muted text-sm mt-1">
            {dashboard.charts.length ? `${dashboard.charts.length} charts` : "No charts available"}
          </p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Homepage;
