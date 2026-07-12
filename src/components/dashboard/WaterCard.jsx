import { FaTint } from "react-icons/fa";

function WaterCard() {
  const consumed = 2.5;
  const goal = 3.0;

  const percentage = Math.min(Math.round((consumed / goal) * 100), 100);

  const remaining = (goal - consumed).toFixed(1);
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center gap-3 mb-6">
        <FaTint className="text-blue-500 text-2xl" />
        <h2 className="text-xl font-semibold">Hydration</h2>
      </div>

      <div className="mb-4">
        <p className="text-3xl font-bold">
          {consumed}L<span className="text-lg text-slate-500"> / {goal}L</span>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-slate-600">{percentage}%</span>

        <span className="text-slate-600">{remaining}L remaining</span>
      </div>
    </div>
  );
}

export default WaterCard;