import { useState } from 'react'

export default function useHydration() {
  const [hydrationEntries, setHydrationEntries] = useState([])

  const addHydrationEntry = (entry) => {
    setHydrationEntries((currentEntries) => [...currentEntries, entry])
  }

  return { hydrationEntries, setHydrationEntries, addHydrationEntry }
}
