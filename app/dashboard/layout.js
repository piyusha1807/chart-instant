"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Stepper from "@/components/Stepper";

const steps = [
  { number: 1, title: "Upload Data", key: "", link: "/dashboard" },
  {
    number: 2,
    title: "Prepare Data",
    key: "prepareData",
    link: "/dashboard/prepareData",
  },
  {
    number: 3,
    title: "Design Chart",
    key: "designChart",
    link: "/dashboard/designChart",
  },
  {
    number: 4,
    title: "Save & Share",
    key: "saveShare",
    link: "/dashboard/saveShare",
  },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const pageName = pathname.split("/")[2] || "";
    const pageNumber = steps.find((step) => step.key === pageName)?.number || 1;
    setActiveStep(pageNumber);
  }, [pathname]);

  return (
    <div className="w-full">
      <Stepper steps={steps} activeStep={activeStep} />
      {children}
    </div>
  );
}
