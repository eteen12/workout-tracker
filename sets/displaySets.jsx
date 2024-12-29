"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { getSets, deleteSet } from "@/utils/setsDb";

import SwipeToDelete from "react-swipe-to-delete-component";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { IoIosList } from "react-icons/io";
import AddSet from "./editSets";

export default function DisplaySets({ workoutId }) {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    const fetchSets = async () => {
      const fetchedSets = await getSets(workoutId);
      console.log("Fetched sets:", fetchedSets);
      setSets(fetchedSets);
    };
    fetchSets();
  }, []);

  const refreshedSets = async () => {
    const fetchedSets = await getSets(workoutId);
    setSets(fetchedSets);
  };

  const handleDelete = async (id) => {
    try {
      await deleteSet(id);
      refreshedSets();
    } catch (error) {
      console.log("Failed to delete your set", error);
    }
  };

  const groupedSets = sets.reduce((acc, set) => {
    const dateKey = new Date(set.date).toLocaleDateString(undefined, {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    acc[dateKey] = acc[dateKey] || [];
    acc[dateKey].push(set);
    return acc;
  }, {});

  return (
    <>
      <div className="flex flex-col px-4 py-24">
        <div className="px-4">
          <h1 className="mb-1 text-lg text-slate-200">Sets for {workoutId}</h1>
        </div>
        {Object.entries(groupedSets).map(([date, sets]) => (
          <div key={date} className="w-full">
            {/* Date Header */}
            <div className="px-4 py-2">
              <p className="text-sm text-gray-400">{date}</p>
            </div>
            <ul
              role="list"
              className="relative divide-y divide-neutral-800 overflow-hidden rounded-xl bg-zinc-900"
            >
              {sets.map((set) => (
                <li key={set.id}>
                  <SwipeToDelete
                    key={set.id}
                    onDelete={() => handleDelete(set.id)}
                    classNameTag=""
                  >
                    <div className="relative flex w-full justify-between gap-x-6 bg-zinc-900 px-4 py-2">
                      <div className="flex justify-between gap-x-4">
                        <p className="w-full text-sm/6 font-semibold text-slate-200">
                          {set.reps} reps
                        </p>
                      </div>
                      <div>
                        <p className="w-full text-sm/6 font-semibold text-slate-200">
                          {set.weight} lbs
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-x-4">
                        <div className="flex">
                          <p className="text-sm text-gray-400">
                            {new Date(set.date).toLocaleTimeString(undefined, {
                              hour: "numeric",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </p>
                          <ChevronRightIcon
                            aria-hidden="true"
                            className="size-5 flex-none text-gray-400"
                          />
                        </div>
                      </div>
                    </div>
                  </SwipeToDelete>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <AddSet refreshedSets={refreshedSets} workoutId={workoutId} />
      </div>
    </>
  );
}
