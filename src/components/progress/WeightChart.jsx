import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const WeightChart = ({ data }) => {
  if (!data) return null;

  const chartData = data.history.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    weight: item.weight,
  }));

  if (!data?.history?.length) {
    return (
        <EmptyState
            title="No Weight History"
            message="Add your weight regularly to track changes."
        />
    );
}
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Weight Progress
          </h2>
          <p className="text-sm text-gray-500">
            Track your weight trend over time
          </p>
        </div>

        <div
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            data.weightChange <= 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {data.weightChange > 0 ? "+" : ""}
          {data.weightChange.toFixed(2)} kg
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Current</p>
          <h3 className="mt-1 text-2xl font-bold">
            {data.currentWeight.toFixed(1)} kg
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Starting</p>
          <h3 className="mt-1 text-2xl font-bold">
            {data.startingWeight.toFixed(1)} kg
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Highest</p>
          <h3 className="mt-1 text-2xl font-bold">
            {data.highestWeight.toFixed(1)} kg
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Lowest</p>
          <h3 className="mt-1 text-2xl font-bold">
            {data.lowestWeight.toFixed(1)} kg
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis domain={[(min) => min - 1, (max) => max + 1]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="weight"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
