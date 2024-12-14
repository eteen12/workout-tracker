"use client"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { IoIosList } from "react-icons/io"
import { IoAdd } from "react-icons/io5"
import AddRoutine from "./addRoutine"

const routines = [
  {
    category: "BACK",
    link: "#",
    description: "asl",
    workouts: "4",
  },
]

export default function Hero() {
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   alert("HELLO!")
  // }

  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h1 className="mb-1 text-xl text-slate-200">Routines</h1>
      </div>
      <ul
        role="list"
        className="bg divide-y divide-neutral-800 overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-900/5"
      >
        {/*ADD NEW ROUTINE BUTTON*/}
        {/* <li className="relative flex gap-x-4 px-4 py-2 sm:px-6">
          <button onClick={handleClick} aria-label="add workout routine">
            <IoAdd className="text-3xl text-blue-600" />
          </button>
          <h2 className="text-blue-600">Add New Routine</h2>
        </li> */}
        <AddRoutine />
        {routines.map((routine) => (
          <li
            key={routine.link}
            className="relative flex justify-between gap-x-6 px-4 py-2 sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4">
              <IoIosList className="size-8 flex-none text-blue-600" />

              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-slate-200">
                  <a href={routine.link}>
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
        ))}
      </ul>
    </div>
  )
}
