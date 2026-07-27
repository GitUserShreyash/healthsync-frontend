import { useState } from "react";

const workoutTypes = [
  "CHEST",
  "BACK",
  "SHOULDERS",
  "LEGS",
  "FULL_BODY",
  "REST",
  "CARDIO",
  "WALKING",
  "CYCLING",
  "YOGA",
  "STRENGTH",
  "ARMS",
];

const intensities = ["LOW", "MEDIUM", "HIGH"];

export default function LogWorkoutModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    workoutType: "",
    day: new Date().toISOString().split("T")[0],
    durationMinutes: "",
    intensity: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await onSubmit({
        ...formData,
        durationMinutes: Number(formData.durationMinutes),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Log Workout</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Workout Type */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workout Type
            </label>

            <select
              name="workoutType"
              value={formData.workoutType}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">Select workout</option>

              {workoutTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workout Date
            </label>

            <input
              type="date"
              name="day"
              value={formData.day}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Duration */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (minutes)
            </label>

            <input
              type="number"
              name="durationMinutes"
              value={formData.durationMinutes}
              onChange={handleChange}
              min="1"
              required
              placeholder="45"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Intensity */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Intensity
            </label>

            <select
              name="intensity"
              value={formData.intensity}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">Select intensity</option>

              {intensities.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Workout notes..."
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Buttons */}

          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border rounded-xl py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Workout"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
