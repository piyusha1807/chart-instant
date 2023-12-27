"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import FileUploader from "./FileUploader";

const CustomTabs = () => {
  return (
    <Tabs.Root
      className="flex flex-col w-full mt-3 bg-white"
      defaultValue="upload"
    >
      <Tabs.List
        className="flex flex-wrap pt-3 px-3 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
        aria-label="Upload File"
      >
        <Tabs.Trigger
          className="inline-block p-3 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          value="upload"
        >
          Upload
        </Tabs.Trigger>
        <Tabs.Trigger
          className="inline-block p-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          value="byUrl"
        >
          By URL
        </Tabs.Trigger>
        <Tabs.Trigger
          className="inline-block p-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          value="database"
        >
          Database
        </Tabs.Trigger>
        <Tabs.Trigger
          className="inline-block p-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          value="example"
        >
          Example
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="upload"
      >
        <FileUploader />
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="byUrl"
      ></Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="database"
      >
        <p className="mb-5 text-mauve11 text-[15px] leading-normal">
          Make changes to your account here. Click save when youre done.
        </p>
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="example"
      >
        <p className="mb-5 text-mauve11 text-[15px] leading-normal">
          Make changes to your account here. Click save when youre done.
        </p>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default CustomTabs;
