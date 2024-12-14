"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

import { IoAdd } from "react-icons/io5"

export default function AddRoutine() {
  const handleClick = (e) => {
    e.preventDefault()
    alert("HELLO!")
  }

  return (
    <div className="relative flex gap-x-4 px-4 py-2 sm:px-6">
      <button onClick={handleClick} aria-label="add workout routine">
        <IoAdd className="text-3xl text-blue-600" />
      </button>
      <h2 className="text-blue-600">Add New Routine</h2>
    </div>
  )
}
