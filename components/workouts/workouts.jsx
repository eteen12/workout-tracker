"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import SwipeToDelete from "react-swipe-to-delete-component"
import "react-swipe-to-delete-component/dist/swipe-to-delete.css"

import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { IoIosList } from "react-icons/io"
import AddWorkout from "./addWorkout"

export default function Workouts({ id }) {
  const [workout, setWorkout] = useState(null)

  useEffect(() => {
    {
      /*GET ALL ROUTINES*/
    }

    const fetchRoutine = async () => {
      try {
        const response = await fetch(`/api/get-workouts/${id}`)
        const data = await response.json()
        console.log("Response received:", response)
        setWorkout(data)
      } catch (error) {
        console.log("Error in frontend catch block:", error)
      }
    }
    fetchRoutine()
  }, [id])
  {
    /*DELETE A ROUTINE*/
  }

  const handleDelete = async (workoutId) => {
    try {
      const response = await fetch(`/api/delete-workout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ workoutId }),
      })
      const data = await response.json
      console.log("Deleted workout", data)
    } catch (error) {
      console.log("Cannot delete this workout", error)
    }
  }

  if (!workout) return <p>Loading...</p>

  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h1 className="mb-1 text-lg text-slate-200">{workout.category}</h1>
      </div>
      <ul
        role="list"
        className="divide-y divide-neutral-800 overflow-hidden rounded-xl bg-zinc-900"
      >
        <AddWorkout routineId={id} />
        {workout.workouts.map((thisWorkout) => (
          <SwipeToDelete
            key={thisWorkout.id}
            onDelete={() => handleDelete(thisWorkout.id)}
            classNameTag=""
          >
            <Link href={`/sets/${thisWorkout.id}`}>
              <li className="relative flex justify-between gap-x-6 bg-zinc-900 px-4 py-2">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-slate-200">
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {thisWorkout.name}
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
      {workout.length <= 0 && (
        <p
          id="routine-name-description"
          className="ml-4 mt-2 text-sm text-gray-500"
        >
          <span className="text-blue-600">Add your</span> first routine here
        </p>
      )}
    </div>
  )
}
