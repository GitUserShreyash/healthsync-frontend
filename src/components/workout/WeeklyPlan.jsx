import WorkoutPlanCard from "./WorkoutPlanCard";

export default function WeeklyPlan({
  weeklyPlan = [],

  onSelectWorkout,
}) {
  return (
    <div
      className="
bg-white
rounded-2xl
p-6
border
"
    >
      <h2
        className="
text-xl
font-bold
mb-5"
      >
        Weekly Plan
      </h2>

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-5
"
      >
        {weeklyPlan.map((plan) => (
          <WorkoutPlanCard
            key={plan.id}
            workout={plan}
            onClick={() => onSelectWorkout(plan)}
          />
        ))}
      </div>
    </div>
  );
}
