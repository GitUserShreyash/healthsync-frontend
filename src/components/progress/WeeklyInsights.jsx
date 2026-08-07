import {
  TrendingDown,
  TrendingUp,
  Droplets,
  Dumbbell,
  Flame,
  HeartPulse,
} from "lucide-react";

export const WeeklyInsights = ({ progress , days}) => {
  if (!progress) return null;

  const insights = [];

  const periodText =
    days === 7
      ? "Last 7 Days"
      : days === 30
      ? "Last 30 Days"
      : "Last 90 Days";

  // Weight insight
  if (progress.weight.weightChange < 0) {
    insights.push({
      icon: TrendingDown,
      title: "Weight Progress",
      message: `You lost ${Math.abs(progress.weight.weightChange).toFixed(2)} kg in this period.`,
      color: "text-green-600",
      bg: "bg-green-100",
    });
  } else if (progress.weight.weightChange > 0) {
    insights.push({
      icon: TrendingUp,
      title: "Weight Change",
      message: `Your weight increased by ${progress.weight.weightChange.toFixed(2)} kg.`,
      color: "text-orange-600",
      bg: "bg-orange-100",
    });
  } else {
    insights.push({
      icon: HeartPulse,
      title: "Weight Stable",
      message: "Your weight remained consistent this week.",
      color: "text-blue-600",
      bg: "bg-blue-100",
    });
  }

  // BMI insight
  insights.push({
    icon: HeartPulse,
    title: "BMI Status",
    message: `Your BMI is ${progress.bmi.currentBmi.toFixed(3)} (${progress.bmi.bmiCategory}).`,
    color: "text-purple-600",
    bg: "bg-purple-100",
  });

  // Hydration
  if (progress.hydration.completionPercentage < 50) {
    insights.push({
      icon: Droplets,
      title: "Hydration",
      message: "Try increasing your daily water intake.",
      color: "text-cyan-600",
      bg: "bg-cyan-100",
    });
  } else {
    insights.push({
      icon: Droplets,
      title: "Hydration",
      message: "Great job maintaining your water intake.",
      color: "text-cyan-600",
      bg: "bg-cyan-100",
    });
  }

  // Workout
  if (progress.workout.completedWorkouts === 0) {
    insights.push({
      icon: Dumbbell,
      title: "Workout",
      message: "No workouts completed. Start building consistency.",
      color: "text-red-600",
      bg: "bg-red-100",
    });
  } else {
    insights.push({
      icon: Dumbbell,
      title: "Workout",
      message: `${progress.workout.completedWorkouts} workouts completed in this period.`,
      color: "text-orange-600",
      bg: "bg-orange-100",
    });
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Progress Insights
        </h2>

        <p className="text-sm text-gray-500">
          Personalized summary for {periodText}
        </p>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {insights.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl bg-gray-50 p-4"
            >
              <div className={`rounded-full p-3 ${item.bg}`}>
                <Icon size={22} className={item.color} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>

                <p className="mt-1 text-sm text-gray-600">{item.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
