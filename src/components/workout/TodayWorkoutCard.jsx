import React, { useState } from "react";
import WorkoutCompletionForm from "./WorkoutCompletionForm";

export default function TodayWorkoutCard({ workout, logWorkout, completed, setCompleted }) {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState("");
  const [duration, setDuration] = useState(
    workout?.targetDurationMinutes || 30,
  );
  

  if (!workout) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800">Today's Workout</h2>

        <p className="text-gray-500 mt-3">No workout scheduled for today.</p>
      </div>
    );
  }

  const formatWorkoutType = (type) => {
    return type
      ?.replace("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleLogWorkout = async (data) => {
    const response = await logWorkout(data);
    console.log("Workout logged:", response);
    if (response?.data?.completed) {
    setCompleted(true);
  }

    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Today's Workout</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            {formatWorkoutType(workout.workoutType)}
          </h2>

          <p className="text-gray-600 mt-2">
            {workout.description || "Complete your planned workout"}
          </p>
        </div>

        {/* Duration */}
        <div className="bg-[#E8FFF5] rounded-xl px-5 py-3 text-center">
          <p className="text-sm text-gray-500">Duration</p>

          <p className="text-xl font-bold text-[#00BC7D]">
            {workout.targetDurationMinutes}
          </p>

          <p className="text-sm text-gray-500">minutes</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-6">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            completed
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {completed ? "Completed" : "Not Completed"}
        </span>

        {!completed && (
          <button
            onClick={() => setShowForm(true)}
            className="
              bg-[#00BC7D]
              text-white
              px-5
              py-2
              rounded-xl
              font-semibold
              hover:bg-[#009E6A]
              transition
            "
          >
            Start Workout
          </button>
        )}
      </div>

      {showForm && (
        <WorkoutCompletionForm
          workout={workout}
          onSubmit={handleLogWorkout}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
