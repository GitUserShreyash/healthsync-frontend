import {
  FaClock,
  FaFire,
  FaTrash,
} from "react-icons/fa";

export default function WorkoutHistoryCard({
  workout,
}) {
  return (
    <div
      className="
        bg-white
        border
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold">
            💪 {workout.workoutName}
          </h3>

          <p className="text-slate-400 mt-1">
            {workout.date}
          </p>
        </div>

        <button className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>

      <div className="flex gap-8 mt-6">
        <div className="flex items-center gap-2">
          <FaClock className="text-blue-500" />
          {workout.duration} mins
        </div>

        <div className="flex items-center gap-2">
          <FaFire className="text-orange-500" />
          {workout.calories} kcal
        </div>
      </div>

      <p className="mt-5 text-slate-600">
        {workout.notes}
      </p>
    </div>
  );
}