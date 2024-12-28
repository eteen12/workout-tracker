"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getWorkouts, deleteWorkout } from "@/utils/workoutsDb";

import SwipeToDelete from "react-swipe-to-delete-component";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { IoIosList } from "react-icons/io";
import AddWorkout from "./addWorkouts";

export default function DisplayWorkouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const fetchedWorkouts = await getWorkouts();
      setWorkouts(fetchedWorkouts);
    };
    fetchWorkouts();
  }, []);

  const refreshedWorkouts = async () => {
    const fetchedWorkouts = await getWorkouts();
    setWorkouts(fetchedWorkouts);
  };

  const handleDelete = async (id) => {
    try {
      await deleteWorkout(id);
      refreshedWorkouts();
    } catch (error) {
      console.log("Failed to delete your workout", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h1 className="mb-1 text-lg text-slate-200">Workouts</h1>
      </div>
      <ul
        role="list"
        className="divide-y divide-neutral-800 overflow-hidden rounded-xl bg-zinc-900"
      >
        <AddWorkout refreshedWorkouts={refreshedWorkouts} />
        {workouts.map((workout) => (
          <SwipeToDelete
            key={workout.id}
            onDelete={() => handleDelete(workout.id)}
            classNameTag=""
          >
            <Link href={`/sets/${workout.id}`}>
              <li className="relative flex justify-between gap-x-6 bg-zinc-900 px-4 py-2">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-slate-200">
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {workout.name}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="flex">
                    <p className="text-sm text-gray-400"></p>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </div>
                </div>
              </li>
            </Link>
          </SwipeToDelete>
        ))}
      </ul>
      {workouts.length <= 0 && (
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
