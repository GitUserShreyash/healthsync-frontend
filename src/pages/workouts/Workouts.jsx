import TodayWorkoutCard from "../../components/workout/TodayWorkoutCard";
import WorkoutSummary from "../../components/workout/WorkoutSummary";
import WeeklyPlan from "../../components/workout/WeeklyPlan";
import WorkoutHistory from "../../components/workout/WorkoutHistory";

import useWorkouts from "../../hooks/useWorkouts";
import { useEffect, useState } from "react";

export default function Workouts() {
  const {
    summary,
    todayWorkout,
    plans,
    todayStatus,
    history,
    loading,
    error,
    addWorkout,
  } = useWorkouts();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todayStatus) {
      setCompleted(todayStatus ?? false);
    }
  }, [todayWorkout]);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Loading workouts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 text-red-600 rounded-xl p-4">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Workouts</h1>

        <p className="text-gray-500 mt-1">
          Track your workout progress and stay consistent
        </p>
      </div>

      <TodayWorkoutCard
        workout={todayWorkout}
        logWorkout={addWorkout}
        completed={completed}
        setCompleted={setCompleted}
      />

       <WorkoutSummary summary={summary} />

      <WeeklyPlan weeklyPlan={plans} />

      <WorkoutHistory workouts={history} />
    </div>
  );
}
