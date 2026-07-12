import WorkoutPlanCard from "./WorkoutPlanCard";

export default function WeeklyPlan({
  plans,
  onOpen,
}) {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Weekly Workout Plan
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan) => (
          <WorkoutPlanCard
    key={plan.id}
    plan={plan}
    onOpen={onOpen}
/>
        ))}
      </div>
    </div>
  );
}