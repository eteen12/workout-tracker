"use client";

import { useState, useEffect } from "react";
import { addSet } from "@/utils/setsDb";

import { IoAdd } from "react-icons/io5";
import { IoIosList } from "react-icons/io";

export default function AddSet({ refreshedSets, id }) {
  const [isClicked, setIsClicked] = useState(false);
  const [hidden, setIsHidden] = useState(true);

  const [set, setSet] = useState({
    weight: "",
    reps: "",
    workoutId: id,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setIsHidden(false);

    setTimeout(() => {
      setIsClicked(true);
    });
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsClicked(false);

    setTimeout(() => {
      setIsHidden(true);
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSet(set);
    setSet({ weight: "", reps: "", workoutId: id });
    setIsClicked(false);

    setTimeout(() => {
      setIsHidden(true);
    }, 300);
    refreshedSets();
    refreshChart();
  };

  return (
    <>
      <div className="mb-safe fixed inset-x-0 bottom-0 flex justify-center gap-x-4 px-4 py-2 shadow-lg z-50">
        <button
          onClick={handleClick}
          aria-label="add set"
          className="rounded-full bg-blue-600 px-3 py-3 hover:opacity-70 transition3 hover:scale-95"
        >
          <IoAdd className="text-5xl text-black" />
        </button>
      </div>
      {/*POPUP*/}

      <div
        className={`transition3 absolute inset-0 z-20 h-full w-full transform ${
          isClicked ? "translate-y-0" : "translate-y-full"
        } ${hidden ? "hidden" : "block"}`}
      >
        {/**/}
        <div className="relative mt-32 h-full w-full rounded-t-xl bg-zinc-900">
          {/*ADD AND CLOSE BUTTONS*/}

          <div className="flex justify-between px-5 pt-4 text-lg text-blue-600">
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleSubmit}>Add</button>
          </div>
          {/*LIST IMAGE*/}

          <div className="flex justify-center py-4">
            <IoIosList className="size-20 flex-none text-blue-600" />
          </div>
          {/*ROUTINE INPUT*/}

          <div className="px-5">
            <label
              className="ml-2 block text-xs text-slate-200"
              htmlFor="weight"
            >
              Weight
            </label>
            <div className="mt-2">
              <input
                value={set.weight}
                onChange={(e) => setSet({ ...set, weight: e.target.value })}
                id="weight"
                name="weight"
                type="number"
                placeholder="35..."
                className="block w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400"
              />
              <p
                id="weight-description"
                className="ml-2 mt-2 text-sm text-gray-500"
              >
                <span className="text-blue-600">Input</span> the lbs
              </p>
            </div>
          </div>

          <div className="mt-4 px-5">
            <label className="ml-2 block text-xs text-slate-200" htmlFor="reps">
              Reps
            </label>
            <div className="mt-2">
              <input
                value={set.reps}
                onChange={(e) => setSet({ ...set, reps: e.target.value })}
                id="reps"
                name="reps"
                type="number"
                placeholder="8..."
                className="block w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400"
              />
              <p
                id="reps-description"
                className="ml-2 mt-2 text-sm text-gray-500"
              >
                <span className="text-blue-600">Input</span> the repetitions you
                did this set
              </p>
            </div>
          </div>
          {/*DESCRIPTION*/}
        </div>
      </div>
    </>
  );
}
