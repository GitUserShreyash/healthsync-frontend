import useDashboard from "../../hooks/useDashboard";
import useNutrition from "../../hooks/useNutrition";
import useHydration from "../../hooks/useHydration";
import useWorkouts from "../../hooks/useWorkouts";

import TodayMealsCard from "../../components/dashboard/TodayMealsCard";
import TodayWorkoutCard from "../../components/dashboard/TodayWorkoutCard";
import WaterCard from "../../components/dashboard/WaterCard";
import StatCard from "../../components/dashboard/StatCard";

import {
  FaFire,
  FaTint,
  FaDumbbell,
  FaWeight,
  FaRulerVertical,
  FaBullseye,
} from "react-icons/fa";

function Dashboard() {
  const { dashboard, loading, error } = useDashboard();

  const { nutritionLogs } = useNutrition();

  const { hydrationLogs } = useHydration();

  const { todayWorkout, todayStatus } = useWorkouts();

  console.log("todayWorkout:", todayWorkout);
  console.log("todayStatus:", todayStatus);
  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return <div className="rounded-xl bg-red-50 p-5 text-red-600">{error}</div>;
  }

  if (!dashboard) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {dashboard.username} 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Here's your health summary for today.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="BMI"
          value={dashboard.bmi ? dashboard.bmi.toFixed(2) : "--"}
          unit={dashboard.bmiCategory}
          icon={FaRulerVertical}
        />

        <StatCard
          title="Current Weight"
          value={dashboard.currentWeightKg ?? "--"}
          unit="kg"
          icon={FaWeight}
        />

        <StatCard
          title="Calories"
          value={dashboard.caloriesConsumedToday ?? 0}
          unit="kcal"
          icon={FaFire}
        />

        <StatCard
          title="Water Goal"
          value={
            dashboard.dailyWaterGoalL
              ? dashboard.dailyWaterGoalL.toFixed(2)
              : "--"
          }
          unit="L"
          icon={FaTint}
        />

        <StatCard
          title="Workout This Week"
          value={dashboard.workoutsCompletedThisWeek ?? 0}
          unit="sessions"
          icon={FaDumbbell}
        />

        <StatCard
          title="Goal"
          value={
            dashboard.goal
              ?.replaceAll("_", " ")
              .toLowerCase()
              .replace(/\b\w/g, (c) => c.toUpperCase()) || "--"
          }
          icon={FaBullseye}
        />
      </div>

      {/* Today's Activity */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <TodayMealsCard meals={nutritionLogs} />

        <TodayWorkoutCard workout={todayWorkout} status={todayStatus} />
      </div>

      {/* Hydration + Goal */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <WaterCard
          logs={hydrationLogs}
          goal={dashboard.dailyWaterGoalL}
          streak={dashboard.hydrationStreakDays}
        />

        {/* Goal Progress Coming Soon */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Goal Progress</h2>

          <p className="mt-3 text-gray-500">Coming Soon...</p>
        </div>
      </div>

      {/* AI + Recent Activity */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* AI Coming Soon */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>

          <p className="mt-3 text-gray-500">Coming Soon...</p>
        </div>

        {/* Recent Activity */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h2>

          <p className="mt-3 text-gray-500">Coming Soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
