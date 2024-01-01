"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { useSelector } from "react-redux";
import { Button, TextButton } from "@/components/Button";
import "handsontable/dist/handsontable.full.min.css";

registerAllModules();

const PrepareData = () => {
  const { data } = useSelector((state) => state.uploadReducer);

  const handleTableChange = (change, source) => {
    console.log(change, source);
    if (source == "edit") {
      console.log(change, source, data[2][2]);
      data[2][2] = change[3];
      console.log({ data });
    }
  };

  return (
    <div>
      <div className="w-full mt-3 bg-white">
        <HotTable
          id="hot"
          data={JSON.parse(JSON.stringify(data)) || []}
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
