import { useEffect, useState } from "react";
import { BmiChart } from "../../components/progress/BMIChart";
import { HydrationChart } from "../../components/progress/HydrationChart";
import { NutritionChart } from "../../components/progress/NutritionChart";
import { SummaryCard } from "../../components/progress/SummaryCards";
import { WeeklyInsights } from "../../components/progress/WeeklyInsights";
import { WeightChart } from "../../components/progress/WeightChart";
import { WorkoutChart } from "../../components/progress/WorkoutChart";
import useProgress from "../../hooks/useProgress";

export default function Progress() {
  const [days, setDays] = useState(7);

  const { progress, loading, error, fetchProgress } = useProgress();

  useEffect(() => {
    fetchProgress(days);
  }, [days]);

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading progress...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!progress) {
    return (
      <div className="p-6">
        <p>No progress data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Progress</h1>
          <p className="mt-2 text-gray-500">
            Track your health and fitness journey over time.
          </p>
        </div>

        {/* Time Filter */}
        <div className="flex rounded-xl bg-white p-1 shadow-md">
          {[7, 30, 90].map((value) => (
            <button
              key={value}
              onClick={() => setDays(value)}
              className={`rounded-lg px-6 py-2 font-medium transition-all duration-200 ${
                days === value
                  ? "bg-green-600 text-white shadow"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {value} Days
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <section className="mb-8">
        <SummaryCard progress={progress} />
      </section>

      {/* Weight + BMI */}
      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <WeightChart data={progress.weight} />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <BmiChart data={progress.bmi} />
        </div>
      </div>

      {/* Hydration + Nutrition */}
      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <HydrationChart data={progress.hydration} />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <NutritionChart data={progress.nutrition} />
        </div>
      </div>

      {/* Workout */}
      <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <WorkoutChart data={progress.workout} />
      </div>

      {/* Weekly Insights */}
      <div className="rounded-2xl bg-linear-to-r from-green-600 to-emerald-500 p-6 text-white shadow-lg">
        <WeeklyInsights progress={progress} days={days}/>
      </div>
    </div>
  );
}
