"use client";

import { useState } from "react";
import { exportDataToJSON, importDataFromJSON } from "@/utils/indexedDb";
import { ButtonAction } from "@/components/reuseables/button";
import { PiFileArrowDown } from "react-icons/pi";

import Link from "next/link";
import NavBar from "@/components/layout/navbar";

export default function UserData() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = async () => {
    if (file) {
      await importDataFromJSON(file);
      alert("Data imported successfully!");
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="space-y-4 px-4 pt-20">
        {/* File Upload Box */}
        <div className="flex flex-col items-center justify-center h-40 w-full rounded-2xl navBg">
          {!file ? (
            <label
              htmlFor="file-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 text-gray-600 hover:text-blue-600"
            >
              <PiFileArrowDown className="text-3xl text-gray-600" />
              <span className="text-gray-600">Import File</span>
            </label>
          ) : (
            <div className="flex flex-col gap-2 justify-center items-center text-blue-600">
              <PiFileArrowDown className="text-3xl" />
              <p className="">{file.name}</p>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="sr-only"
          />
        </div>
        <p className="text-sm text-gray-500 pt-5">
          <span className="text-blue-600">So whats this?</span> Pretty please,
          read the{" "}
          <Link href={"/user-guide"} className="text-blue-600 underline">
            user guide
          </Link>{" "}
          if you want to keep your data safe
        </p>
        <div className="flex space-x-4 justify-center pt-5">
          <ButtonAction text={"Export data"} onClick={exportDataToJSON} />
          <ButtonAction text={"Import data"} onClick={handleImport} />
        </div>
      </div>
    </>
  );
}
