function HydrationSummary({ totalWater,
    goalMl, }) {
console.log("goalMl", goalMl);
  const percentage =
  goalMl > 0 ? Math.min((totalWater / goalMl) * 100, 100) : 0;

const remaining = Math.max(
    goalMl - totalWater,
    0
);

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Water Intake
      </h2>

      <div className="flex justify-between">
        <div>
          <p className="text-slate-500">
            Current
          </p>

          <h3 className="text-3xl font-bold">
            {(totalWater).toFixed(1)} mL
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Goal
          </p>

          <h3 className="text-3xl font-bold">
            {(goalMl).toFixed(1)} mL
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Remaining
          </p>

          <h3 className="text-3xl font-bold">
            {(remaining ).toFixed(1)} mL
          </h3>
        </div>
      </div>

      <div className="w-full bg-slate-200 h-4 rounded-full mt-6">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

export default HydrationSummary;
