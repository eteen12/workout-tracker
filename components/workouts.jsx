"use client"

import { useState, useEffect } from "react"

export default function Workouts({ id }) {
  const [workout, setWorkout] = useState(null)

  useEffect(() => {
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

  if (!workout) return <p>Loading...</p>

  return (
    <div>
      <h2>Workouts:</h2>
      {workout.workouts?.map((workoutItem) => (
        <div key={workoutItem.id}>
          <h3>{workoutItem.name}</h3>
          <ul>
            {workoutItem.sets?.map((set) => (
              <li key={set.id}>
                <strong>Weight:</strong> {set.weight}kg <strong>Reps:</strong>{" "}
                {set.reps}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
