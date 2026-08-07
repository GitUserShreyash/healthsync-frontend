import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const BmiChart = ({ data }) => {
  if (!data) return null;

  const chartData = data.history.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    bmi: Number(item.bmi.toFixed(3)),
  }));

  if (!data?.history?.length) {
    return (
        <EmptyState
            title="No BMI Data"
            message="Add your weight and height to see your BMI progress."
        />
    );
  }
  const getCategoryColor = (category) => {
    switch (category) {
      case "UNDERWEIGHT":
        return "bg-blue-100 text-blue-700";
      case "NORMAL":
        return "bg-green-100 text-green-700";
      case "OVERWEIGHT":
        return "bg-yellow-100 text-yellow-700";
      case "OBESE":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">BMI Progress</h2>
          <p className="text-sm text-gray-500">
            Monitor your Body Mass Index over time
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${getCategoryColor(
            data.bmiCategory,
          )}`}
        >
          {data.bmiCategory}
        </span>
      </div>

      {/* Current BMI */}
      <div className="mb-6 rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-500">Current BMI</p>
        <h2 className="mt-1 text-3xl font-bold text-gray-900">
          {data.currentBmi.toFixed(3)}
        </h2>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis
              domain={[
                (min) => Math.floor(min - 1),
                (max) => Math.ceil(max + 1),
              ]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="bmi"
              stroke="#2563eb"
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
