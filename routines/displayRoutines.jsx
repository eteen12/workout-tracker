"use client";
import { useEffect, useState } from "react";
import { getRoutines } from "@/utils/routinesDb";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { IoIosList } from "react-icons/io";
import AddRoutine from "./editRoutines";



export default function DisplayRoutines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      const fetchedRoutines = await getRoutines();
      setRoutines(fetchedRoutines);
    };
    fetchRoutines();
  }, []);

  const refreshedRoutines = async () =>{
    const fetchedRoutines = await getRoutines();
    setRoutines(fetchedRoutines);
  }

  return (
    <div className="flex flex-col px-4">
      <div className="px-4">
        <h1 className="mb-1 text-lg text-slate-200">Routines</h1>
      </div>
      <AddRoutine refreshedRoutines={refreshedRoutines} />
      <ul
        role="list"
        className="divide-y divide-neutral-800 overflow-hidden rounded-xl bg-zinc-900"
      >
        {routines.map((routine) => (
          <li
            key={routine.id}
            className="relative flex justify-between gap-x-6 bg-zinc-900 px-4 py-2"
          >
            <div className="flex min-w-0 gap-x-4">
              <IoIosList className="size-8 flex-none text-blue-600" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-slate-200">
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {routine.category}
                </p>
                <p className="mt-1 flex text-xs/5 text-gray-400">
                  {routine.description}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="flex">
                <p className="text-sm text-gray-400">{routine.workoutCount}</p>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {routines.length <= 0 && (
        <p
          id="routine-name-description"
          className="ml-4 mt-2 text-sm text-gray-500"
        >
          <span className="text-blue-600">Add your</span> first routine here
        </p>
      )}
    </div>
    
  );
}
