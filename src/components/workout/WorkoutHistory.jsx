import WorkoutHistoryCard from "./WorkoutHistoryCard";

export default function WorkoutHistory({
  history,
}) {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">
        Workout History
      </h2>

      <div className="space-y-5">
        {history.map((workout) => (
          <WorkoutHistoryCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
}