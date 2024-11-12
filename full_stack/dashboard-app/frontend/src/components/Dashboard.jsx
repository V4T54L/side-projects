import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AreaChartComponent from "./charts/AreaChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import LineChartComponent from "./charts/LineChartComponent";
import RadarChartComponent from "./charts/RadarChartComponent";
import ComposedChartComponent from "./charts/ComposedChartComponent";
import FunnelChartComponent from "./charts/FunnelChartComponent";
import ScatterPlotComponent from "./charts/ScatterPlotComponent";
import TreemapComponent from "./charts/TreemapComponent";
import DoughnutChartComponent from "./charts/DoughnutChartComponent";
import LineChartWithAnnotationsComponent from "./charts/LineChartWithAnnotationsComponent";
import StackedBarChartComponent from "./charts/StackedBarChartComponent";
import SmallMultiplesComponent from "./charts/SmallMultiplesComponent";
import SlopeChartComponent from "./charts/SlopeChartComponent";
import GanttChartComponent from "./charts/GanttChartComponent";
import CandlstickChartComponent from "./charts/CandlestickChartComponent";
import ParallelCoordinatesComponent from "./charts/ParallelCoordinatesComponent";
import StepChartComponent from "./charts/StepChartComponent";
import BubbleChartComponent from "./charts/BubbleChartComponent";
import RadialBarChartComponent from "./charts/RadialBarChartComponent";

import { GetComponents, GetDashboardByID } from "../api/dashboard";
import { ConvertComponentsToHashmap } from "../utils/common";

const Dashboard = () => {
  const { id } = useParams();

  const componentLookUp = useRef({});

  const [dashboard, setDashboard] = useState({
    id: "<Dashboard ID>",
    component_id: "<Dashboard ID>",
    name: "<Dashboard Name>",
    charts: [],
  });

  useEffect(() => {
    (async () => {
      const data = await GetComponents();
      if (data && data.length > 0) {
        const components = await ConvertComponentsToHashmap(data);
        componentLookUp.current = components;
      }
      const data1 = await GetDashboardByID(id);
      if (data1) {
        setDashboard(data1);
      }
    })();
  }, []);

  const charts = {
    area: AreaChartComponent,
    bar: BarChartComponent,
    composed: ComposedChartComponent,
    funnel: FunnelChartComponent,
    line: LineChartComponent,
    pie: PieChartComponent,
    radar: RadarChartComponent,
    scatter: ScatterPlotComponent,

    treemap: TreemapComponent,
    doughnut: DoughnutChartComponent,
    lineWithAnnotations: LineChartWithAnnotationsComponent,
    stackedBar: StackedBarChartComponent,
    smallMultiples: SmallMultiplesComponent,
    slope: SlopeChartComponent,
    gantt: GanttChartComponent,
    candlestick: CandlstickChartComponent,
    bubble: BubbleChartComponent,
    parallelCoordinates: ParallelCoordinatesComponent,
    step: StepChartComponent,
    radial: RadialBarChartComponent,
  };

  return (
    <div className="flex flex-col space-y-6 p-6 bg-background min-h-screen">
    <h1 className="text-3xl font-bold text-primary">{dashboard.name}</h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dashboard && dashboard.charts.map((e) => {
        const chartName = componentLookUp.current[e.component_id];
        const ChartComponent = charts[chartName];
        return ChartComponent ? (
          <div
            key={e.id}
            className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-4 bg-gray-50 border-b">
              <h2 className="font-semibold text-lg text-text">{e.name}</h2>
            </div>
            <div className="p-4">
              <ChartComponent data={e.data} />
            </div>
          </div>
        ) : null;
      })}
    </div>
  </div>
  );
};

export default Dashboard;
