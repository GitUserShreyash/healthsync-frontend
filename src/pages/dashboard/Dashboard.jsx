import AiInsightsCard from "../../components/dashboard/AiInsightCard";
import GoalProgressCard from "../../components/dashboard/GoalProgressCard";
import StatCard from "../../components/dashboard/StatCard";
import TodayMealsCard from "../../components/dashboard/TodayMealsCard";
import TodayWorkoutCard from "../../components/dashboard/TodayWorkoutCard";
import WaterCard from "../../components/dashboard/WaterCard";
import useDashboard from "../../hooks/useDashboard";

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {dashboard.username} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's your health summary for today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <StatCard
          title="BMI"
          value={dashboard.bmi != null ? dashboard.bmi.toFixed(2) : "--"}
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
          value={dashboard.dailyWaterGoalL ?? "--"}
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

      {/* Meals & Workout */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <TodayMealsCard />

        <TodayWorkoutCard />
      </div>

      {/* Water & Goal */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <WaterCard
          goal={dashboard.dailyWaterGoalL}
          streak={dashboard.hydrationStreakDays}
        />

        <GoalProgressCard goal={dashboard.goal} />
      </div>

      {/* AI */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <AiInsightsCard recommendation={dashboard.recommendation} />

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">
            Recent Activity
          </h2>

          <p className="text-gray-500">
            Coming Soon...
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;