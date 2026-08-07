import {
  Scale,
  HeartPulse,
  Droplets,
  Dumbbell,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export const SummaryCard = ({ progress }) => {
  const weight = progress?.weight;
  const bmi = progress?.bmi;
  const hydration = progress?.hydration;
  const workout = progress?.workout;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      {/* Weight */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Current Weight</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {weight.currentWeight.toFixed(2)} kg
            </h2>

            <div
              className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
                weight.weightChange <= 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {weight.weightChange <= 0 ? (
                <TrendingDown size={16} />
              ) : (
                <TrendingUp size={16} />
              )}

              {weight.weightChange.toFixed(2)} kg
            </div>
          </div>

          <div className="rounded-full bg-green-100 p-4">
            <Scale className="text-green-600" size={28} />
          </div>
        </div>
      </div>

      {/* BMI */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">BMI</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {bmi.currentBmi.toFixed(1)}
            </h2>

            <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {bmi.bmiCategory}
            </span>
          </div>

          <div className="rounded-full bg-blue-100 p-4">
            <HeartPulse className="text-blue-600" size={28} />
          </div>

        </div>
      </div>

      {/* Hydration */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">Hydration</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {hydration.completionPercentage.toFixed(0)}%
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Avg {hydration.averageWaterIntake.toFixed(2)} L/day
            </p>
          </div>

          <div className="rounded-full bg-cyan-100 p-4">
            <Droplets className="text-cyan-600" size={28} />
          </div>

        </div>
      </div>

      {/* Workout */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">Workout</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {workout.completedWorkouts}
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              {workout.totalMinutes} mins
            </p>
          </div>

          <div className="rounded-full bg-orange-100 p-4">
            <Dumbbell className="text-orange-600" size={28} />
          </div>

        </div>
      </div>

    </div>
  );
};