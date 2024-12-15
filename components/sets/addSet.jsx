"use client"

import { useEffect, useState } from "react"

import { IoAdd } from "react-icons/io5"
import { IoIosList } from "react-icons/io"

export default function AddSet({ id, onAdd }) {
  const [isClicked, setIsClicked] = useState(false)
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    setIsClicked(true)
  }
  const handleClose = (e) => {
    e.preventDefault()
    setIsClicked(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(reps, weight, id)
    try {
      const response = await fetch(`/api/add-set`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weight, reps, workoutId: id }),
      })

      if (!response.ok) {
        const error = await response.json()
        console.log("Error: ", error)
      }
      setReps("")
      setWeight("")
      setIsClicked(false)
      onAdd()
    } catch (error) {
      alert("Error submitting, you reached the catch clause")
    }
  }
  return (
    <>
      <div className="mb-safe fixed inset-x-0 bottom-0 flex justify-center gap-x-4 px-4 py-2 shadow-lg">
        <button
          onClick={handleClick}
          aria-label="add set"
          className="rounded-full bg-blue-600 px-4 py-4"
        >
          <IoAdd className="text-6xl text-black" />
        </button>
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
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
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
                value={reps}
                onChange={(e) => setReps(e.target.value)}
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
  )
}
