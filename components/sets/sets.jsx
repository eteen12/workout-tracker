"use client"
import { useState, useEffect } from "react"

export default function Sets({ id }) {
  const [sets, setSets] = useState([])

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await fetch(`/api/get-sets/${id}/`)
        const data = await response.json()
        setSets(data)
      } catch (error) {
        console.log("yeah i aint fetching this, come to the catch lol")
        console.log(error)
      }
    }
    fetchSets()
  }, [id])
  return (
    <div>
      <p className="text-white">{id}</p>
      {sets.length ? (
        <ul>
          {sets.map((set) => (
            <li key={set.id}>
              <p className="text-white">Weight: {set.weight}</p>
              <p className="text-white">Reps: {set.reps}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">Loading sets...</p>
      )}
    </div>
  )
}
