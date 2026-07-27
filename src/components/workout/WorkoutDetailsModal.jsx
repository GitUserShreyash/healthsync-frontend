import React from "react";

export default function WorkoutDetailsModal({ workout, onClose }) {
  if (!workout) return null;

  const duration =
    workout.durationMinutes || workout.targetDurationMinutes || 0;

  const date = workout.day ? new Date(workout.day).toLocaleDateString() : "N/A";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Workout Details</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}

        <div className="p-6 space-y-5">
          <DetailItem label="Workout Type" value={workout.workoutType} />

          <DetailItem label="Date" value={date} />

          <DetailItem label="Duration" value={`${duration} minutes`} />

          {workout.intensity && (
            <DetailItem label="Intensity" value={workout.intensity} />
          )}

          {workout.caloriesBurned !== undefined && (
            <DetailItem
              label="Calories Burned"
              value={`${workout.caloriesBurned} kcal`}
            />
          )}

          {workout.description && (
            <DetailItem label="Description" value={workout.description} />
          )}

          {workout.notes && <DetailItem label="Notes" value={workout.notes} />}

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Status</span>

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
        </div>

        {/* Footer */}

        <div className="p-6 border-t">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-500">{label}</span>

      <span className="font-semibold text-gray-800 text-right">
        {value || "N/A"}
      </span>
    </div>
  );
}
