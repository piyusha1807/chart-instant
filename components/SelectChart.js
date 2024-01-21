import { useState } from "react";
import Image from "next/image";

const ChartList = [
  { id: "columnChart", icon: "/columnChart.svg", name: "Column Chart" },
  {
    id: "stackedColumnChart",
    icon: "/stackedColumnChart.svg",
    name: "Stacked Column Chart",
  },
  {
    id: "groupedColumnChart",
    icon: "/groupedColumnChart.svg",
    name: "Grouped Column Chart",
  },
  { id: "barChart", icon: "/barChart.svg", name: "Bar Chart" },
  {
    id: "stackedBarChart",
    icon: "/stackedBarChart.svg",
    name: "Stacked Bar Chart",
  },
  {
    id: "groupedBarChart",
    icon: "/groupedBarChart.svg",
    name: "Grouped Bar Chart",
  },
  { id: "pieChart", icon: "/pieChart.svg", name: "Pie Chart" },
  { id: "donutChart", icon: "/donutChart.svg", name: "Donut Chart" },
  { id: "lineChart", icon: "/donutChart.svg", name: "Line Chart" },
  { id: "scatterChart", icon: "/donutChart.svg", name: "Scatter Chart" },
];

const SelectChart = ({ onChartChange }) => {
  const [selectedChart, setSelectedChart] = useState(null);

  const handleChartChange = (chartId) => {
    setSelectedChart(chartId);
    onChartChange(chartId);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {ChartList.map((chart) => (
        <button
          key={chart.id}
          className={`h-28 w-28 flex flex-col items-center gap-2 rounded-sm border p-3 text-sm transition-all hover:bg-accent ${
            selectedChart === chart.id ? "bg-accent" : ""
          }`}
          onClick={() => handleChartChange(chart.id)}
        >
          <Image
            className={`h-12 w-12 object-cover`}
            src={chart.icon}
            height={48}
            width={48}
            alt={`${chart.name || "Chart Type"}`}
          />
          <span className="text-xs font-medium">{chart.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SelectChart;
