import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const WorkoutChart = ({ data }) => {
  if (!data) return null;

  const chartData = data.history.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    minutes: item.durationMinutes,
    calories: item.caloriesBurned,
  }));

  if (!data?.history?.length) {
    return (
        <EmptyState
            title="No Workout Data"
            message="Complete workouts to see your activity progress."
        />
    );
  }
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Workout Progress
          </h2>

          <p className="text-sm text-gray-500">
            Track workout consistency and activity
          </p>
        </div>

        <div className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
          {data.completedWorkouts} Sessions
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Completed</p>

          <h3 className="mt-1 text-2xl font-bold">{data.completedWorkouts}</h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Total Time</p>

          <h3 className="mt-1 text-2xl font-bold">{data.totalMinutes} min</h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Calories Burned</p>

          <h3 className="mt-1 text-2xl font-bold">
            {data.totalCalories.toFixed(0)}
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
                value: "Minutes",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip />

            <Bar dataKey="minutes" fill="#f97316" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
