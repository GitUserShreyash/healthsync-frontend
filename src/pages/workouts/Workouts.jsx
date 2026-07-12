import { useState } from "react";

import WorkoutSummary from "../../components/workout/WorkoutSummary";
import WorkoutDetailsModal from "../../components/workout/WorkoutDetailsModal";
import WeeklyPlan from "../../components/workout/WeeklyPlan";
import WorkoutHistory from "../../components/workout/WorkoutHistory";
import LogWorkoutModal from "../../components/workout/LogWorkoutModal";

export default function Workouts() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  // Dummy data (replace with API later)
  const weeklyPlan = [
    {
      id: 1,
      day: "Monday",
      workoutName: "Chest",
      duration: 45,
      calories: 320,
      completed: true,
    },
    {
      id: 2,

      day: "Monday",

      workoutName: "Chest",

      muscleGroup: "Chest",

      duration: 45,

      calories: 320,

      completed: false,

      exercises: [
        {
          id: 1,
          exerciseName: "Bench Press",
          sets: 4,
          reps: 10,
          weight: 80,
          restSeconds: 90,
        },

        {
          id: 2,
          exerciseName: "Incline Press",
          sets: 3,
          reps: 12,
          weight: 60,
          restSeconds: 60,
        },

        {
          id: 3,
          exerciseName: "Cable Fly",
          sets: 3,
          reps: 15,
          weight: 25,
          restSeconds: 45,
        },

        {
          id: 4,
          exerciseName: "Push Ups",
          sets: 3,
          reps: 20,
          weight: 0,
          restSeconds: 30,
        },
      ],
    },
    {
      id: 3,
      day: "Wednesday",
      workoutName: "Legs",
      duration: 60,
      calories: 500,
      completed: false,
    },
    {
      id: 4,
      day: "Thursday",
      workoutName: "Shoulders",
      duration: 40,
      calories: 280,
      completed: false,
    },
    {
      id: 5,
      day: "Friday",
      workoutName: "Arms",
      duration: 35,
      calories: 250,
      completed: false,
    },
    {
      id: 6,
      day: "Saturday",
      workoutName: "Cardio",
      duration: 30,
      calories: 300,
      completed: false,
    },
  ];

  const history = [
    {
      id: 1,
      workoutName: "Chest Workout",
      duration: 45,
      calories: 320,
      date: "11 Jul 2026",
      notes: "Great session!",
    },
    {
      id: 2,
      workoutName: "Back Workout",
      duration: 50,
      calories: 360,
      date: "10 Jul 2026",
      notes: "Deadlift PR",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Workouts</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-600 text-white px-5 py-3 rounded-xl"
        >
          + Log Workout
        </button>
      </div>

      <WorkoutSummary />

      <WeeklyPlan plans={weeklyPlan} onOpen={setSelectedPlan} />

      <WorkoutHistory history={history} />

      {showModal && <LogWorkoutModal onClose={() => setShowModal(false)} />}

      {selectedPlan && (
        <WorkoutDetailsModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
}
