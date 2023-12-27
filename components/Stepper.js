import React from "react";

const Stepper = () => {
  return (
    <ol class="flex items-center justify-center w-full p-2 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-md dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      <li class="flex items-center text-primary dark:text-blue-500">
        <span class="flex items-center justify-center w-7 h-7 me-2 text-sm text-white border border-primary bg-primary rounded-full shrink-0 dark:border-blue-500">
          1
        </span>
        Upload Data
        <svg
          class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4"
          />
        </svg>
      </li>
      <li class="flex items-center">
        <span class="flex items-center justify-center w-7 h-7 me-2 text-sm text-primary border border-primary bg-gray-100 rounded-full shrink-0 dark:border-gray-400">
          2
        </span>
        Prepare Data
        <svg
          class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4"
          />
        </svg>
      </li>
      <li class="flex items-center">
        <span class="flex items-center justify-center w-7 h-7 me-2 text-sm text-primary border border-gray-200 bg-gray-100 rounded-full shrink-0 dark:border-gray-400">
          3
        </span>
        Design Chart
        <svg
          class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4"
          />
        </svg>
      </li>
      <li class="flex items-center">
        <span class="flex items-center justify-center w-7 h-7 me-2 text-sm text-primary border border-gray-200 bg-gray-100 rounded-full shrink-0 dark:border-gray-400">
          4
        </span>
        Save & Share
      </li>
    </ol>
  );
};

export default Stepper;
