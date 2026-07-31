import WorkoutPlanCard from "./WorkoutPlanCard";

export default function WeeklyPlan({weeklyPlan = []}) {
  console.log("WeeklyPlan weeklyPlan:", weeklyPlan);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Weekly Workout Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {weeklyPlan.map((plan) => (
          <WorkoutPlanCard
            key={plan.id}
            workout={plan}
          />
        ))}
      </div>
    </div>
  );
}
