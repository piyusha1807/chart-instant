import { useState } from "react";

const CopyPaste = ({ onSave }) => {
  const [value, setValue] = useState("");

  const handleChange = (inputValue) => {
    setValue(inputValue);

    const lines = inputValue.split("\n");
    const jsonData = lines.map((line) => line.split("\t"));
    onSave({ data: jsonData });
  };

  return (
    <>
      <label
        htmlFor="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Paste your data from Excel, Word, or any other source into the text area
        below.
      </label>
      <textarea
        id="message"
        rows="10"
        class="block overflow- text-nowrap p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Paste your copied data here..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
      <p className="mt-4 text-sm text-gray-500">
        Supported formats: CSV, tab-separated, and plain text.
      </p>
    </>
  );
};

export default CopyPaste;
