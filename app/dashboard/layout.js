import React from "react";
import Stepper from "@/components/Stepper";

export default function layout({ children }) {
  return (
    <div className="w-full">
      <Stepper />
      {children}
    </div>
  );
}
