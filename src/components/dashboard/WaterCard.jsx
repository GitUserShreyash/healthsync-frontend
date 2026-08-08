import { FaTint } from "react-icons/fa";

function WaterCard({ logs = [], goal = 2 }) {
  // Total consumed in ml
  const consumedMl = logs.reduce((sum, item) => sum + item.amountMl, 0);

  // Convert ml -> liters
  const consumedL = consumedMl / 1000;

  const percentage = Math.min(
    Math.round((consumedL / goal) * 100),
    100
  );

  const remaining = Math.max(goal - consumedL, 0);

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <FaTint className="text-blue-500" />
        <h2 className="text-lg font-semibold">Hydration</h2>
      </div>

      <p className="mt-4 text-3xl font-bold">
        {consumedL.toFixed(2)}
        <span className="text-lg font-normal text-gray-500">
          {" "}
          / {goal.toFixed(2)} L
        </span>
      </p>

      <div className="mt-5 h-4 rounded-full bg-gray-200">
        <div
          className="h-4 rounded-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-3 flex justify-between text-gray-500">
        <span>{percentage}%</span>

        <span>{remaining.toFixed(2)} L remaining</span>
      </div>
    </div>
  );
}

export default WaterCard;