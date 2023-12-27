import React from "react";
import Link from "next/link";

const DesignChart = () => {
  return (
    <div>
      DesignChart
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <Link href="/dashboard">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Back
          </button>
        </Link>
        <Link href="/dashboard/prepareData">
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DesignChart;
