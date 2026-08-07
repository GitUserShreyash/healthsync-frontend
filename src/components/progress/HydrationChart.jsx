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

export const HydrationChart = ({ data }) => {
  if (!data) return null;

  const chartData = data.history.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    liters: item.liters,
  }));

  if (!data?.history?.length) {
    return (
        <EmptyState
            title="No Hydration Data"
            message="Add your water intake to see your progress."
        />
    );
 }
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Hydration Progress
          </h2>

          <p className="text-sm text-gray-500">Daily water intake tracking</p>
        </div>

        <div className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
          {data.completionPercentage.toFixed(1)}%
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Average Intake</p>

          <h3 className="mt-1 text-2xl font-bold">
            {data.averageWaterIntake.toFixed(3)} L
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Daily Goal</p>

          <h3 className="mt-1 text-2xl font-bold">
            {data.dailyGoal.toFixed(2)} L
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis
              label={{
                value: "Liters",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip />

            {/* Goal Line */}
            <ReferenceLine
              y={data.dailyGoal}
              stroke="#0891b2"
              strokeDasharray="5 5"
              label="Goal"
            />

            <Bar dataKey="liters" radius={[8, 8, 0, 0]} fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
