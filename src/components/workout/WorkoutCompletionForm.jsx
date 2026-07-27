import { useState } from "react";

export default function WorkoutCompletionForm({ workout, onSubmit, onCancel }) {
  const [duration, setDuration] = useState(workout.targetDurationMinutes);

  const [intensity, setIntensity] = useState("Moderate");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    onSubmit({
      workoutType: workout.workoutType,
      day: new Date().toISOString().split("T")[0],
      durationMinutes: Number(duration),
      intensity,
      notes,
    });
  };

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="bg-[#00BC7D] px-6 py-5">
        <h3 className="text-xl font-bold text-white">
          Complete Today's Workout
        </h3>

        <p className="mt-1 text-sm text-emerald-50">
          Review your workout and log your performance.
        </p>
      </div>

      <div className="space-y-6 bg-gray-50 p-6">
        {/* Workout Summary */}
        <div className="rounded-xl bg-white border border-gray-200 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-bold text-gray-800">
                {workout.workoutType}
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Planned Duration:{" "}
                <span className="font-semibold text-gray-700">
                  {workout.targetDurationMinutes} min
                </span>
              </p>
            </div>

            <div className="bg-[#E8FFF5] px-4 py-2 rounded-xl">
              <p className="text-sm text-gray-500">Exercises</p>

              <p className="text-xl font-bold text-[#00BC7D] text-center">
                {workout.exercises?.length || 0}
              </p>
            </div>
          </div>
        </div>

        {/* Exercise List */}
        {workout.exercises?.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Workout Plan
            </h4>

            <div className="space-y-3">
              {workout.exercises.map((exercise, index) => (
                <div
                  key={index}
                  className="
                    flex
                    justify-between
                    items-center
                    rounded-xl
                    bg-white
                    border
                    border-gray-200
                    p-4
                  "
                >
                  <div>
                    <h5 className="font-semibold text-gray-800">
                      {index + 1}. {exercise.exerciseName}
                    </h5>

                    <p className="text-sm text-gray-500 mt-1">
                      {exercise.sets} sets × {exercise.reps} reps
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-[#00BC7D]">
                      {exercise.weight} kg
                    </p>

                    <p className="text-xs text-gray-500">
                      Rest {exercise.restSeconds}s
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completion Details */}

        <div className="rounded-xl bg-white border border-gray-200 p-5">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Workout Details
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Intensity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Intensity
              </label>

              <select
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  outline-none
                  focus:border-[#00BC7D]
                  focus:ring-2
                  focus:ring-emerald-100
                "
              >
                <option value="Low">Low</option>

                <option value="Moderate">Moderate</option>

                <option value="High">High</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Actual Duration
              </label>

              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:border-[#00BC7D]
                  focus:ring-2
                  focus:ring-emerald-100
                "
              />
            </div>
          </div>

          {/* Notes */}

          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Workout Notes
            </label>

            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How was today's workout?"
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-[#00BC7D]
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>
        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="
              rounded-xl
              border
              border-gray-300
              bg-white
              px-5
              py-2.5
              font-semibold
              text-gray-700
              hover:bg-gray-100
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              rounded-xl
              bg-[#00BC7D]
              px-6
              py-2.5
              font-semibold
              text-white
              hover:bg-[#009E6A]
              transition
            "
          >
            Complete Workout
          </button>
        </div>
      </div>
    </div>
  );
}
