"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import SwipeToDelete from "react-swipe-to-delete-component"
import "react-swipe-to-delete-component/dist/swipe-to-delete.css"

import { ChevronRightIcon } from "@heroicons/react/20/solid"
import AddSet from "./addSet"

export default function Sets({ id }) {
  const [sets, setSets] = useState({})
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await fetch(`/api/get-sets/${id}/`)
        const data = await response.json()

        const grouped = data.reduce((acc, set) => {
          const dateKey = new Date(set.date).toLocaleDateString(undefined, {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          acc[dateKey] = acc[dateKey] || []
          acc[dateKey].push(set)
          return acc
        }, {})
        setSets(grouped)
      } catch (error) {
        console.log("Failed to fetch sets:", error)
      }
    }
    fetchSets()
  }, [id, refresh])

  return (
    <>
      <div className="flex flex-col">
        <div className="px-4">
          <h1 className="mb-1 text-lg text-slate-200">Sets</h1>
        </div>
        {Object.entries(sets).map(([date, setsForDate]) => (
          <div key={date} className="w-full">
            {/* Date Header */}
            <div className="px-4 py-2">
              <p className="text-sm text-gray-400">{date}</p>
            </div>
            <ul
              role="list"
              className="relative divide-y divide-neutral-800 overflow-hidden rounded-xl bg-zinc-900"
            >
              {setsForDate.map((set) => (
                <li key={set.id}>
                  <SwipeToDelete
                    key={set.id}
                    onDelete={() => handleDelete(set.id)}
                    classNameTag=""
                  >
                    <Link href={`/sets/${set.id}`}>
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
                              {new Date(set.date).toLocaleTimeString(
                                undefined,
                                {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                },
                              )}
                            </p>
                            <ChevronRightIcon
                              aria-hidden="true"
                              className="size-5 flex-none text-gray-400"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwipeToDelete>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <AddSet id={id} onAdd={() => setRefresh((prev) => !prev)} />
    </>
  )
}
