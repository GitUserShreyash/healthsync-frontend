import { useState } from 'react'
import { getProgress } from '../services/progressService';

export default function useProgress() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProgress = async (days) => {
    setLoading(true);
    setError(null);
    try {
      const progressData = await getProgress(days);
      setProgress(progressData);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load progress.");
    } finally {
      setLoading(false);
    }
  };

  return {
    progress,
    loading,
    error,
    fetchProgress,
  };

}
