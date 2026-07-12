import AiInsightsCard from "../../components/dashboard/AiInsightCard";
import GoalProgressCard from "../../components/dashboard/GoalProgressCard";
import StatCard from "../../components/dashboard/StatCard";
import TodayMealsCard from "../../components/dashboard/TodayMealsCard";
import TodayWorkoutCard from "../../components/dashboard/TodayWorkoutCard";
import WaterCard from "../../components/dashboard/WaterCard";
import {
  FaFire,
  FaTint,
  FaDumbbell,
  FaWeight,
  FaRulerVertical,
  FaBullseye,
} from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <StatCard title="BMI" value="23.4" icon={FaRulerVertical} />

        <StatCard title="Body Fat" value="18" unit="%" icon={FaBullseye} />

        <StatCard title="Calories" value="2200" unit="/2500" icon={FaFire} />

        <StatCard title="Water Intake" value="2.5" unit="L" icon={FaTint} />

        <StatCard title="Workout" value="45" unit="min" icon={FaDumbbell} />

        <StatCard title="Weight" value="72" unit="kg" icon={FaWeight} />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <TodayMealsCard />

        <TodayWorkoutCard />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <WaterCard />

        <GoalProgressCard />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <AiInsightsCard />

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          Recent Activity Coming Soon
        </div>
      </div>
    </>
  );
}

export default Dashboard;
