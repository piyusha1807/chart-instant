"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Button, TextButton } from "@/components/Button";
import CustomTabs from "@/components/Tabs";
import SelectChart from "@/components/SelectChart";
import ImproveChart from "@/components/ImproveChart";
import Visual from "@/components/Visual";
import ConfigureChart from "@/components/ConfigureChart";
import { generateOptions, convertArrayToObject } from "@/lib/utils";
import data from "./data.json";

const DesignChart = () => {
  const { masterData } = useSelector((state) => state.dashboardReducer);
  const masterDataJson = convertArrayToObject(masterData);
  const dataHeaderOptions = masterDataJson
    ? generateOptions(Object.keys(masterDataJson))
    : [];

  const [trace, setTrace] = useState([
    {
      x: [],
      y: [],
      type: "bar",
    },
  ]);
  const [layout, setLayout] = useState({
    width: 650,
    height: 450,
    title: {
      text: "Enter Chart Title",
      font: {
        size: 13,
      },
      x: -1,
      y: 2,
    },
    xaxis: {
      title: {
        text: "X Axis",
        font: {
          size: "22",
        },
      },
      showgrid: true,
      showline: false,
      visible: true,
      gridwidth: "1",
    },
    yaxis: {
      title: {
        text: "Y Axis",
        font: {
          size: "22",
        },
      },
      showline: false,
    },
    showlegend: true,
    legend: {
      x: 1.0,
      y: 1.0,
    },
    plot_bgcolor: "#ffffff",
    paper_bgcolor: "#ffffff",
  });

  const handleChartChange = (chartId) => {
    if (
      [
        "columnChart",
        "stackedColumnChart",
        "groupedColumnChart",
        "barChart",
        "stackedBarChart",
        "groupedBarChart",
        "lineChart",
        "scatterChart",
      ].includes(chartId)
    ) {
      const updatedTrace = trace.map((traceItem) => ({
        ...traceItem,
        type: [
          "columnChart",
          "stackedColumnChart",
          "groupedColumnChart",
          "barChart",
          "stackedBarChart",
          "groupedBarChart",
        ].includes(chartId)
          ? "bar"
          : undefined,
        mode: ["lineChart"].includes(chartId)
          ? "lines"
          : ["scatterChart"].includes(chartId)
          ? "markers"
          : undefined,
        orientation: [
          "columnChart",
          "stackedColumnChart",
          "groupedColumnChart",
        ].includes(chartId)
          ? undefined
          : "h",
      }));
      setTrace(updatedTrace);

      if (["stackedColumnChart", "stackedBarChart"].includes(chartId)) {
        setLayout({ ...layout, barmode: "stack" });
      } else if (["groupedColumnChart", "groupedBarChart"].includes(chartId)) {
        setLayout({ ...layout, barmode: "group" });
      } else {
        setLayout({ ...layout, barmode: undefined });
      }
    }
  };

  const handleConfigurationChage = (type, options) => {
    if (type === "horizontalAxis") {
      const updatedTrace = trace.map((traceItem) => ({
        ...traceItem,
        x: masterDataJson[options.value],
        xObj: options,
      }));
      setTrace(updatedTrace);
    } else if (type === "verticalAxis") {
      const updatedTrace = options.map((optionItem) => ({
        ...trace[0],
        y: masterDataJson[optionItem.value],
        yObj: optionItem,
      }));
      setTrace(updatedTrace);
    }
  };

  const tabList = [
    {
      value: "selectChart",
      title: "Select Chart",
      children: <SelectChart onChartChange={handleChartChange} />,
    },
    {
      value: "configure",
      title: "Configure",
      children: (
        <ConfigureChart
          trace={trace}
          dataHeaderOptions={dataHeaderOptions}
          onConfigurationChage={handleConfigurationChage}
        />
      ),
    },
    {
      value: "improve",
      title: "Improve",
      children: <ImproveChart />,
    },
    {
      value: "addDetails",
      title: "Add Details",
      children: <p>Add Details</p>,
    },
  ];

  useEffect(() => {
    const keys = Object.keys(masterDataJson);
    handleConfigurationChage("horizontalAxis", {
      label: keys[0],
      value: keys[0],
    });
    handleConfigurationChage("verticalAxis", [
      { label: keys[1], value: keys[1] },
    ]);
  }, []);

  return (
    <div>
      <div className="w-full mt-3 flex gap-y-3">
        <div className="h-96 w-4/6">
          <Visual
            data={trace}
            layout={layout}
            config={{
              displaylogo: false,
              responsive: true,
            }}
          />
        </div>
        <div className="w-2/6">
          <CustomTabs tabList={tabList} defaultActiveValue="selectChart" />
          <div className="mt-6 flex items-center justify-end gap-x-3">
            <Link href="/dashboard/prepareData">
              <TextButton>Back</TextButton>
            </Link>
            <Link href="/dashboard/saveShare">
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignChart;
