function CaloriesSummary({ consumed }) {
  const goal = 2500;
  const remaining = goal - consumed;
  const percentage =
    (consumed / goal) * 100;

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Calories Remaining
      </h2>

      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-slate-500">
            Goal
          </p>
          <h3 className="text-2xl font-bold">
            {goal}
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Food
          </p>
          <h3 className="text-2xl font-bold">
            {consumed}
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Remaining
          </p>
          <h3 className="text-2xl font-bold">
            {remaining}
          </h3>
        </div>
      </div>

      <div className="w-full bg-slate-200 h-4 rounded-full mt-6">
        <div
          className="bg-emerald-500 h-4 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

export default CaloriesSummary;