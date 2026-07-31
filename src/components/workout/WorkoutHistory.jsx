import React from "react";

export default function WorkoutHistory({ workouts = [], onViewDetails }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Workout History</h2>

      {workouts.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No workouts logged yet
        </div>
      ) : (
        <div className="space-y-4">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {workout.workoutType}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">{workout.day}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    workout.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {workout.completed ? "Completed" : "Pending"}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>

                  <p className="font-semibold">{workout.durationMinutes} min</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Intensity</p>

                  <p className="font-semibold">{workout.intensity}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Calories</p>

                  <p className="font-semibold">
                    {workout.caloriesBurned || 0} kcal
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Logged At</p>

                  <p className="font-semibold">
                    {new Date(workout.loggedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onViewDetails(workout)}
                className="mt-5 text-blue-600 font-medium hover:underline"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
