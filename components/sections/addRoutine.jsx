"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

import { IoAdd } from "react-icons/io5"
import { IoIosList } from "react-icons/io"

export default function AddRoutine() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsClicked(true)
  }
  const handleClose = (e) => {
    e.preventDefault()
    setIsClicked(false)
  }

  return (
    <>
      <div className="relative flex gap-x-4 px-4 py-2 sm:px-6">
        <button onClick={handleClick} aria-label="add workout routine">
          <IoAdd className="text-3xl text-blue-600" />
        </button>
        <h2 className="text-blue-600">Add New Routine</h2>
      </div>

      {/*POPUP*/}

      <div
        className={`transition3 absolute inset-0 z-20 h-full w-full transform ${
          isClicked ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/**/}
        <div className="relative mt-32 h-full w-full rounded-t-xl bg-zinc-900">
          {/*ADD AND CLOSE BUTTONS*/}

          <div className="flex justify-between px-5 pt-4 text-lg text-blue-600">
            <button onClick={handleClose}>Cancel</button>
            <button>Add</button>
          </div>
          {/*LIST IMAGE*/}

          <div className="flex justify-center py-4">
            <IoIosList className="size-20 flex-none text-blue-600" />
          </div>
          {/*ROUTINE INPUT*/}

          <div className="px-5">
            <label
              className="ml-2 block text-xs text-slate-200"
              htmlFor="routine-name"
            >
              ROUTINE
            </label>
            <div className="mt-2">
              <input
                id="routine-name"
                name="routine-name"
                type="text"
                placeholder="Chest and Triceps..."
                className="block w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400"
              />
              <p
                id="routine-name-description"
                className="ml-2 mt-2 text-sm text-gray-500"
              >
                <span className="text-blue-600">Order workouts</span> by splits,
                days of the week, ect
              </p>
            </div>
          </div>
          {/*DESCRIPTION*/}

          <div className="mt-8 px-5">
            <label
              className="ml-2 block text-xs text-slate-200"
              htmlFor="routine-description"
            >
              DESCRIPTION
            </label>
            <div className="mt-2">
              <input
                id="routine-description"
                name="routine-description"
                type="text"
                placeholder="Set a description"
                className="block w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
