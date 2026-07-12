import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function LogWorkoutModal({
  onClose,
}) {
  const [form, setForm] = useState({
    workoutName: "",
    duration: "",
    calories: "",
    notes: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-175 p-8 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Log Workout
          </h2>

          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="space-y-5">
          <input
            name="workoutName"
            placeholder="Workout Name"
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="duration"
            type="number"
            placeholder="Duration (minutes)"
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="calories"
            type="number"
            placeholder="Calories Burned"
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            name="notes"
            rows="4"
            placeholder="Workout Notes"
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="border rounded-xl px-5 py-3"
            >
              Cancel
            </button>

            <button
              className="bg-emerald-600 text-white rounded-xl px-6 py-3"
            >
              Save Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}