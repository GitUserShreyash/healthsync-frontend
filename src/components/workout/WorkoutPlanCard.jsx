import {
  FaCheckCircle,
  FaPlayCircle,
  FaClock,
  FaFire,
} from "react-icons/fa";

export default function WorkoutPlanCard({
   plan,
  onOpen
}) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        shadow-sm
        p-5
        hover:shadow-md
        transition
      "
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">
          {plan.day}
        </h3>

        {plan.completed ? (
          <FaCheckCircle className="text-green-500 text-xl" />
        ) : (
          <FaPlayCircle className="text-emerald-600 text-xl" />
        )}
      </div>

      <div className="mt-5">
        <p className="text-xl font-semibold">
          💪 {plan.workoutName}
        </p>

        <div className="flex items-center gap-2 mt-4 text-slate-500">
          <FaClock />
          <span>{plan.duration} mins</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-slate-500">
          <FaFire />
          <span>{plan.calories} kcal</span>
        </div>
      </div>

      <button
    onClick={() => onOpen(plan)}
    className={`mt-6 w-full py-3 rounded-xl font-semibold ${
      plan.completed
        ? "bg-green-100 text-green-700"
        : "bg-emerald-600 text-white hover:bg-emerald-700"
    }`}
>
    {plan.completed ? "Completed" : "Start Workout"}
</button>
    </div>
  );
}