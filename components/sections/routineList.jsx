"use client"

import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { IoIosList } from "react-icons/io"
import AddRoutine from "./addRoutine"
import SwipeToDelete from "react-swipe-to-delete-component"
import "react-swipe-to-delete-component/dist/swipe-to-delete.css"

export default function RoutineList({ routines, addRoutine, setRoutines }) {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/deleteroutine`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })

      if (!response.ok) {
        throw new Error("Failed to delete the routine")
      }

      setRoutines((prevRoutines) =>
        prevRoutines.filter((routine) => routine.id !== id),
      )
    } catch (error) {
      console.log("Error deleting routine. Error on front end catch", error)
    }
  }
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h1 className="mb-1 text-xl text-slate-200">Routines</h1>
      </div>
      <ul
        role="list"
        className="bg divide-y divide-neutral-800 overflow-hidden rounded-xl shadow-sm"
      >
        <AddRoutine addRoutine={addRoutine} />
        {routines.map((routine) => (
          <SwipeToDelete
            key={routine.id}
            onDelete={() => handleDelete(routine.id)}
          >
            <li
              key={routine.id}
              className="relative flex justify-between gap-x-6 bg-zinc-900 px-4 py-2 sm:px-6"
            >
              <div className="flex min-w-0 gap-x-4">
                <IoIosList className="size-8 flex-none text-blue-600" />

                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-slate-200">
                    <a href={routine.category}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {routine.category}
                    </a>
                  </p>
                  <p className="mt-1 flex text-xs/5 text-gray-400">
                    {routine.description}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <div className="flex">
                  <p className="text-sm text-gray-400">1</p>
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </div>
              </div>
            </li>
          </SwipeToDelete>
        ))}
      </ul>
    </div>
  )
}
