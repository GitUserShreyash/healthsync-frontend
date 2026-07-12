import { useState } from 'react'

export default function useProgress() {
  const [progress, setProgress] = useState([])

  const addProgressEntry = (entry) => {
    setProgress((currentProgress) => [...currentProgress, entry])
  }

  return { progress, setProgress, addProgressEntry }
}
