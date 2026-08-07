import { Activity, Dumbbell, Droplets, Utensils } from "lucide-react";

export const EmptyState = ({ title, message }) => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100">
      {/* Icon */}
      <div className="mb-5 rounded-full bg-green-100 p-5">
        <Activity size={40} className="text-green-600" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900">
        {title || "No Progress Data Yet"}
      </h2>

      {/* Message */}
      <p className="mt-2 max-w-md text-sm text-gray-500">
        {message ||
          "Start tracking your weight, meals, hydration and workouts to see your progress."}
      </p>

      {/* Tracking Suggestions */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="flex flex-col items-center rounded-xl bg-gray-50 p-3">
          <Dumbbell size={22} className="text-orange-500" />

          <span className="mt-1 text-xs">Workout</span>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-gray-50 p-3">
          <Droplets size={22} className="text-blue-500" />

          <span className="mt-1 text-xs">Water</span>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-gray-50 p-3">
          <Utensils size={22} className="text-red-500" />

          <span className="mt-1 text-xs">Meals</span>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-gray-50 p-3">
          <Activity size={22} className="text-green-500" />

          <span className="mt-1 text-xs">Weight</span>
        </div>
      </div>
    </div>
  );
};
