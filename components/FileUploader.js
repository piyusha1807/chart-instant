import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { PhotoIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

const FileUploader = ({ onSave }) => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [fileStatus, setFileStatus] = useState("idle");

  const onDrop = (files) => {
    setFile(null);
    setFileData(null);
    setFileStatus("loading");

    if (files && files.length > 0) {
      const allowedFormats = ["csv", "xls", "xlsx"];
      const maxSize = 10 * 1024 * 1024; // 10MB

      const uploadedFile = files[0];

      if (
        !allowedFormats.includes(
          uploadedFile.name.split(".").pop().toLowerCase()
        )
      ) {
        setFileStatus("error: Invalid format");
        return;
      }

      if (uploadedFile.size > maxSize) {
        setFileStatus("error: File size exceeds limit");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setFileData(jsonData);
        onSave({ data: jsonData });
        setFileStatus("uploaded");
      };

      reader.readAsBinaryString(uploadedFile);
      setFile(uploadedFile);
    } else {
      setFileStatus("error: No file selected");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv", ".xls", ".xlsx"] },
    noClick: true,
    noKeyboard: true,
  });

  const handleRetry = () => {
    setFile(null);
    setFileData(null);
    setFileStatus("idle");
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div
        {...getRootProps()}
        className={`w-full max-w-md p-6 mx-auto border-2 border-dashed rounded-md ${
          isDragActive ? "bg-gray-50" : ""
        }`}
      >
        <input
          {...getInputProps()}
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
        />
        <div className="flex flex-col items-center">
          <PhotoIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
          {fileStatus === "idle" && (
            <>
              <label
                htmlFor="file-upload"
                className="mt-4 text-sm font-semibold text-blue-600 cursor-pointer"
              >
                Upload a file
              </label>
              <p className="mt-1 text-xs text-gray-600">or drag and drop</p>
            </>
          )}
          {fileStatus === "uploaded" && (
            <>
              <p className="mt-4 text-sm font-semibold text-blue-600">
                File Uploaded successfully!
              </p>
              <p className="mt-1 text-xs text-gray-600">{file.name}</p>
            </>
          )}
          {fileStatus === "loading" && (
            <p className="mt-4 text-sm font-semibold text-blue-600">
              Loading...
            </p>
          )}
          {fileStatus.startsWith("error") && (
            <div className="mt-4 text-sm text-red-500">
              <p className="font-semibold">Error: {fileStatus.split(":")[1]}</p>
              <button
                onClick={handleRetry}
                className="flex items-center mt-2 text-blue-600 hover:underline focus:outline-none"
              >
                <ArrowPathIcon className="w-4 h-4 mr-1" />
                Retry
              </button>
            </div>
          )}

          <p className="mt-2 text-xs text-gray-600">
            {fileStatus === "uploaded"
              ? `Size: ${file.size} bytes`
              : "xlsx, csv up to 10MB"}
          </p>
        </div>
      </div>
      {fileData && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Uploaded File Data</h3>
          <pre className="mt-2 overflow-x-auto text-sm text-gray-700">
            {JSON.stringify(fileData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
