function HydrationSummary({ totalWater }) {
  const goal = 4000;

  const percentage = Math.min(
    (totalWater / goal) * 100,
    100
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
            {(totalWater / 1000).toFixed(1)}L
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Goal
          </p>

          <h3 className="text-3xl font-bold">
            4L
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Remaining
          </p>

          <h3 className="text-3xl font-bold">
            {((goal - totalWater) / 1000).toFixed(1)}L
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
