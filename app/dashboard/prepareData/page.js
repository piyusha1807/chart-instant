"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextButton } from "@/components/Button";
import "handsontable/dist/handsontable.full.min.css";
import { saveMasterData, saveStep } from "@/redux/dashboardSlice";

registerAllModules();

const PrepareData = () => {
  const dispatch = useDispatch();
  const { masterData } = useSelector((state) => state.dashboardReducer);

  const handleTableChange = (change, source) => {
    if (source == "edit") {
      const copiedData = JSON.parse(JSON.stringify(masterData));
      copiedData[change[0][0]][change[0][1]] = change[0][3];
      dispatch(saveMasterData(copiedData));
    }
  };

  return (
    <div>
      <div className="w-full mt-3 bg-white">
        <HotTable
          id="hot"
          data={JSON.parse(JSON.stringify(masterData)) || []}
          width="100%"
          height="25rem"
          colHeaders={true}
          rowHeaders={true}
          customBorders={true}
          dropdownMenu={true}
          multiColumnSorting={true}
          filters={true}
          manualColumnResize={true}
          manualRowResize={true}
          afterChange={handleTableChange}
          licenseKey="non-commercial-and-evaluation" // for non-commercial use only
        />
        
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-3">
        <Link href="/dashboard">
          <TextButton>Back</TextButton>
        </Link>
        <Link href="/dashboard/designChart">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default PrepareData;
