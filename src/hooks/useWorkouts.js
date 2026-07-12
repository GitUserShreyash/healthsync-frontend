import { useState } from 'react'

export default function useWorkouts() {
  const [workouts, setWorkouts] = useState([])

  const addWorkout = (workout) => {
    setWorkouts((currentWorkouts) => [...currentWorkouts, workout])
  }

  return { workouts, setWorkouts, addWorkout }
}
