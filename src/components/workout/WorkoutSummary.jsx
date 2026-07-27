import SummaryCard from "./SummaryCard";

export default function WorkoutSummary({ summary }) {
  if (!summary) {
    return null;
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-6
    "
    >
      <SummaryCard
        title="Workouts This Week"
        value={summary.workoutsThisWeek}
        unit="sessions"
        icon="💪"
      />

      <SummaryCard
        title="Total Minutes"
        value={summary.totalMinutes}
        unit="minutes"
        icon="⏱️"
      />

      <SummaryCard
        title="Calories Burned"
        value={Math.round(summary.totalCalories)}
        unit="kcal"
        icon="🔥"
      />

      <SummaryCard
        title="Current Streak"
        value={summary.currentStreak}
        unit="days"
        icon="🏆"
      />
    </div>
  );
}
