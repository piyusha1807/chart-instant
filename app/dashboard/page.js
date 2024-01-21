"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FileUploader from "@/components/FileUploader";
import CopyPaste from "@/components/CopyPaste";
import CustomTabs from "@/components/Tabs";
import { Button } from "@/components/Button";
import { useDispatch } from "react-redux";
import { saveMasterData } from "@/redux/dashboardSlice";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSave = ({ data }) => {
    dispatch(saveMasterData(data));
  };

  const handleNext = () => {
    router.push("/dashboard/prepareData");
  };

  const tabList = [
    {
      value: "upload",
      title: "Upload",
      children: <FileUploader onSave={handleSave} />,
    },
    {
      value: "copyPaste",
      title: "Copy & Paste",
      children: <CopyPaste onSave={handleSave} />,
    },
    {
      value: "googleSheet",
      title: "Google Sheet",
      children: <p>Google Sheet</p>,
    },
    { value: "byURl", title: "By URL", children: <p>By URL</p> },
    { value: "example", title: "Example", children: <p>Example</p> },
  ];

  return (
    <div>
      <CustomTabs tabList={tabList} defaultActiveValue="upload" />
      <div className="mt-6 flex items-center justify-end gap-x-3">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default Dashboard;
