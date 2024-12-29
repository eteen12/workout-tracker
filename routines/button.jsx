"use client";

import { useState } from "react";
import { exportDataToJSON, importDataFromJSON } from "@/utils/indexedDb";

export default function WorkoutManager({ refreshedRoutines }) {
  const [file, setFile] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle import
  const handleImport = async () => {
    if (file) {
      await importDataFromJSON(file, refreshedRoutines);
      alert("Data imported successfully!");
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Export Button */}
      <button
        onClick={exportDataToJSON}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Export Data
      </button>

      {/* Import Button */}
      <div>
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="mb-2"
        />
        <button
          onClick={handleImport}
          className="bg-green-500 text-white p-2 rounded"
        >
          Import Data
        </button>
      </div>
    </div>
  );
}
