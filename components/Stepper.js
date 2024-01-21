import React from "react";
import { useRouter } from "next/navigation";

const Stepper = ({ steps, activeStep }) => {
  const router = useRouter();

  return (
    <ol className="flex items-center justify-center w-full p-2 space-x-2 text-sm font-normal text-center bg-white rounded-sm dark:text-gray-400 sm:text-sm dark:bg-gray-800 dark:border-gray-700 sm:p-3 sm:space-x-4 rtl:space-x-reverse">
      {steps.map((step, index) => (
        <li
          key={step.number}
          className={`flex items-center cursor-pointer ${
            step.number <= activeStep ? "text-gray-900" : "text-gray-600"
          }`}
          onClick={() => router.push(step?.link)}
        >
          <span
            className={`flex items-center justify-center w-7 h-7 me-2 text-sm text-gray-900 border border-gray-300 bg-gray-100 rounded-full shrink-0 ${
              step.number < activeStep
                ? "text-white border-gray-900 bg-gray-900"
                : ""
            } ${step.number === activeStep ? "border-gray-900" : ""}`}
          >
            {step.number}
          </span>
          {step.title}
          {index !== steps.length - 1 && (
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4"
              />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
