import { useEffect, useState } from "react";

import {
  getWorkoutSummary,
  getTodayWorkout,
  getWorkoutPlan,
  logWorkout,
  getWorkoutHistory,
  deleteWorkout,
  getTodayStatus,
} from "../services/workoutService";

function useWorkouts() {
  const [summary, setSummary] = useState(null);

  const [todayWorkout, setTodayWorkout] = useState(null);

  const [todayStatus, setTodayStatus] = useState(null);

  const [plans, setPlans] = useState([]);

  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);

      const [summaryData, todayData, planData, historyData, todayStatusData] = await Promise.all(
        [
          getWorkoutSummary(),
          getTodayWorkout(),
          getWorkoutPlan(),
          getWorkoutHistory(),
          getTodayStatus(),
        ],
      );

      setSummary(summaryData);
      setTodayStatus(todayStatusData);
      setTodayWorkout(todayData);
      setPlans(planData);
      setHistory(historyData);

      setError(null);
    } catch (err) {
      setError(err.message || "Failed to load workouts");
    } finally {
      setLoading(false);
    }
  };


  const addWorkout = async (request) => {
    try {
      const workout = await logWorkout(request);

      await loadData();

      return {
        success: true,
        data: workout,
      };
    } catch (err) {
      return {
        success: false,
        message: err.message || "Unable to log workout",
      };
    }
  };

  const removeWorkout = async (id) => {
    try {
      await deleteWorkout(id);

      await loadData();

      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        message: err.message || "Unable to delete workout",
      };
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    summary,
    todayWorkout,
    plans,
    history,
    todayStatus,

    loading,
    error,

    refresh: loadData,

    addWorkout,
    removeWorkout,
  };
}

export default useWorkouts;
