import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export const NutritionChart = ({ data }) => {
  if (!data) return null;

  const chartData = data.history.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    calories: item.calories,
  }));

  if (!data?.history?.length) {
    return (
        <EmptyState
            title="No Nutrition Data"
            message="Add your meals to see your nutrition progress."
        />
    );
}
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Nutrition Progress
          </h2>

          <p className="text-sm text-gray-500">Daily calorie intake tracking</p>
        </div>

        <div className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
          {data.averageCalories.toFixed(0)} kcal avg
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Target Calories</p>

          <h3 className="mt-1 text-2xl font-bold">
            {data.targetCalories.toFixed(0)} kcal
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Average Intake</p>

          <h3 className="mt-1 text-2xl font-bold">
            {data.averageCalories.toFixed(0)} kcal
          </h3>
        </div>
      </div>

      {/* Macronutrients */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-red-50 p-4 text-center">
          <p className="text-sm text-gray-500">Protein</p>

          <h3 className="text-xl font-bold text-red-600">
            {data.averageProtein.toFixed(1)}g
          </h3>
        </div>

        <div className="rounded-xl bg-yellow-50 p-4 text-center">
          <p className="text-sm text-gray-500">Carbs</p>

          <h3 className="text-xl font-bold text-yellow-600">
            {data.averageCarbs.toFixed(1)}g
          </h3>
        </div>

        <div className="rounded-xl bg-purple-50 p-4 text-center">
          <p className="text-sm text-gray-500">Fat</p>

          <h3 className="text-xl font-bold text-purple-600">
            {data.averageFat.toFixed(1)}g
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            {/* Target line */}
            <ReferenceLine
              y={data.targetCalories}
              stroke="#f97316"
              strokeDasharray="5 5"
              label="Target"
            />

            <Bar dataKey="calories" fill="#f97316" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
