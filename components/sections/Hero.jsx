"use client"
import { useState, useEffect } from "react"

import AddRoutine from "./addRoutine"
import RoutineList from "./routineList"

export default function Hero() {
  const [routines, setRoutines] = useState([])

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await fetch(`/api/getroutines/`)
        const data = await response.json()
        setRoutines(data)
      } catch (error) {
        console.log("Error fetching routines", error)
      }
    }
    fetchRoutines()
  }, []) //the empty array means it runs once on component mount

  const addRoutine = (newRoutine) => {
    setRoutines((prevRoutines) => [...prevRoutines, newRoutine])
  }

  return (
    <div>
      <RoutineList routines={routines} addRoutine={addRoutine} />
    </div>
  )
}
