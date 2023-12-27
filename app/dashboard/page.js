import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const CustomTabs = dynamic(() => import("@/components/Tabs"), { ssr: false });

const Dashboard = () => {
  return (
    <div>
      <CustomTabs />
      <div class="mt-6 flex items-center justify-end gap-x-6">
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

export default Dashboard;
