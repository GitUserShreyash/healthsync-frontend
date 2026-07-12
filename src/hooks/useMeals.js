import { useState } from 'react'

export default function useMeals() {
  const [meals, setMeals] = useState([])

  const addMeal = (meal) => {
    setMeals((currentMeals) => [...currentMeals, meal])
  }

  return { meals, setMeals, addMeal }
}
