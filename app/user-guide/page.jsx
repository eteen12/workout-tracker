import NavBar from "@/components/layout/navbar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className="px-4 py-24">
        <h1 className="mb-1 text-lg text-slate-200 underline">User Guide</h1>
        <div className="py-12">
          <h2 className="mb-5 text-lg text-slate-200">Data Management</h2>

          <p className="text-gray-400">
            <span className="text-blue-600 ">Step 1.</span> <br /> Export data
            you have added to save and reuse. It does not matter where you save
            it.
          </p>
          <div className="relative h-[400px] my-5 navBg">
            <Image
              alt="user data settings pointing to import data button"
              src={"/user-guide/exportData.webp"}
              className="object-contain"
              fill
            />
          </div>
          <p className="text-gray-400 mb-5">
            <span className="text-blue-600">Step 2.</span> <br /> Click add file
            and upload your file from google drive, apple files, android files
            ect.
          </p>
          <div className="relative h-[400px] my-5 navBg">
            <Image
              alt="user data settings pointing to import data button"
              src={"/user-guide/addFile.webp"}
              className="object-contain"
              fill
            />
          </div>
          <p className="text-gray-400 mb-5">
            <span className="text-blue-600">Step 3.</span> <br /> Press the
            import data button and your good to go. You might need to refresh
            the "app".
          </p>
          <div className="relative h-[400px] my-5 navBg">
            <Image
              alt="user data settings pointing to import data button"
              src={"/user-guide/importData.webp"}
              className="object-contain"
              fill
            />
          </div>
          <p className="text-gray-400 mb-5 italic text-sm" id="data-management">
            <span className="text-blue-600">What is this for?</span> This
            feature is here to keep your data safe while I’m constantly
            tinkering and messing around with the app. Every time I fix a bug or
            redeploy, your data gets wiped. You can also share your data between
            devices. So, download your data, and you can easily re-upload it to
            keep using your old info.
          </p>
        </div>
      </div>
    </div>
  );
}
