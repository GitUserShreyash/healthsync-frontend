import { FaBullseye } from "react-icons/fa";

function GoalProgressCard() {
  const currentWeight = 72;
  const targetWeight = 68;
  const startingWeight = 78;

  const totalToLose =
    startingWeight - targetWeight;

  const lost =
    startingWeight - currentWeight;

  const percentage = Math.min(
    Math.round((lost / totalToLose) * 100),
    100
  );

  const remaining =
    currentWeight - targetWeight;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center gap-3 mb-6">
        <FaBullseye className="text-emerald-600 text-2xl" />

        <h2 className="text-xl font-semibold">
          Goal Progress
        </h2>
      </div>

      <p className="text-slate-500">
        Target Weight
      </p>

      <p className="text-3xl font-bold mt-2">
        {currentWeight}kg
        <span className="text-lg text-slate-500">
          {" "}
          → {targetWeight}kg
        </span>
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-4 mt-6">
        <div
          className="bg-emerald-500 h-4 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-slate-600">
          {percentage}%
        </span>

        <span className="text-slate-600">
          {remaining} kg remaining
        </span>
      </div>
    </div>
  );
}

export default GoalProgressCard;