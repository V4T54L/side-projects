import Dashboard from "./components/Dashboard";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewDashboard from "./components/NewDashboard";
import React from "react";
import Homepage from "./components/Homepage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Dashboard />} />
          <Route path="/new" element={<NewDashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <Dashboard /> */}
    </React.Fragment>
  );
}

export default App;
