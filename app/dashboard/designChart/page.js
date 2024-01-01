import React from "react";
import Link from "next/link";
import { Button, TextButton } from "@/components/Button";

const DesignChart = () => {
  return (
    <div>
      <div className="w-full mt-3 bg-white">
        DesignChart
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-3">
        <Link href="/dashboard/prepareData">
          <TextButton>Back</TextButton>
        </Link>
        <Link href="/dashboard/saveShare">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default DesignChart;
