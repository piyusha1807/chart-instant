import React, { useState, useCallback, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import * as Tabs from "@radix-ui/react-tabs";

const CustomTabs = ({ tabList, defaultActiveValue }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(initialTab || defaultActiveValue);

  const createQueryString = useCallback((value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', value);
    router.push(`${pathname}?${params.toString()}`);
  }, [router, searchParams, pathname]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    createQueryString(value);
  };

  useEffect(() => {
    setActiveTab(initialTab || defaultActiveValue);
  }, [searchParams])

  return (
    <Tabs.Root
      className="flex flex-col w-full mt-3 bg-white"
      defaultValue={defaultActiveValue}
      value={activeTab}
      onValueChange={handleTabChange}
    >
      <Tabs.List
        className="flex flex-wrap gap-2 pt-2 px-3 text-xs font-medium text-center text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-400"
        aria-label="Upload Data"
      >
        {tabList.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            className={`inline-block py-2 px-3 border-t border-l border-r rounded-t-md dark:bg-gray-800 dark:text-blue-500 ${tab.value === activeTab ? "bg-gray-900 text-white border-gray-900" : "bg-gray-100 border-gray-300"}`}
            value={tab.value}
          >
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabList.map((tab) => (
        <Tabs.Content
          key={tab.value}
          className="grow p-5 bg-white rounded-b-sm outline-none"
          value={tab.value}
        >
          {tab.children}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default CustomTabs;
