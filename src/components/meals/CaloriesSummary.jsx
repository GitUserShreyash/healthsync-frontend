function CaloriesSummary({
  consumed,
  goal,
}) {
  const remaining = Math.max(goal - consumed, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-lg font-semibold mb-6">
        Today's Calories
      </h2>

      <div className="grid grid-cols-3 gap-6 text-center">

        <div>
          <p className="text-sm text-gray-500">
            Consumed
          </p>

          <h3 className="text-3xl font-bold text-emerald-600">
            {consumed}
          </h3>

          <p className="text-sm">
            kcal
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Goal
          </p>

          <h3 className="text-3xl font-bold">
            {goal}
          </h3>

          <p className="text-sm">
            kcal
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Remaining
          </p>

          <h3 className="text-3xl font-bold">
            {remaining}
          </h3>

          <p className="text-sm">
            kcal
          </p>
        </div>

      </div>

    </div>
  );
}

export default CaloriesSummary;