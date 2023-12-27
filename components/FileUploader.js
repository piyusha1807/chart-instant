import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { PhotoIcon } from "@heroicons/react/24/solid";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [fileStatus, setFileStatus] = useState("idle");

  const onDrop = (files) => {
    if (files && files.length > 0) {
      setFile(files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setFileData(jsonData);
        setFileStatus("uploaded");
      };

      reader.readAsBinaryString(files[0]);
    } else {
      setFileStatus("error");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv, .xls, .xlsx"] },
  });

  return (
    <div
      {...getRootProps()}
      className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
    >
      <div className="text-center">
        {fileStatus === "idle" && (
          <>
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  {...getInputProps()}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              xlsx, csv up to 10MB
            </p>
          </>
        )}
        {fileStatus === "uploaded" && (
          <>
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <p className="pl-1">File Uploaded successfully!</p>
            <p htmlFor="file-upload" className="font-semibold text-indigo-600">
              {file.name}
            </p>
            <p className="text-xs leading-5 text-gray-600">
              Size: {file.size} bytes
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
{
  /* <Dropzone
                acceptedFiles={[".csv", ".xlsx"]}
                maxFileSize={5000000} // Limit file size to 5MB
                onChange={handleFileUpload}
                filesLimit={1}
                dropzoneText="Drag and drop a CSV/XLSX file here or click to browse"
              />
              {fileData && (
                <div>
                  <h3>Uploaded File Data</h3>
                  <pre>{JSON.stringify(fileData, null, 2)}</pre>
                </div>
              )} */
}
{
  /* <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here...</p>
                ) : (
                  <p>Drag and drop CSV or Excel files, or click to select</p>
                )}
                {fileName}
              </div>
            </div> */
}
